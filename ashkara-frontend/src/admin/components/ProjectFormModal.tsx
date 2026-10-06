import { useState, useEffect } from "react";
import { X, Save, Loader2, Plus, Trash2, RefreshCw } from "lucide-react";
import toast from "react-hot-toast";
import { projectsApi, categoriesApi } from "../services/adminApi";
import { cn } from "../../utils/cn";

const TABS = ["Basic Info", "Content", "Tech & Features", "Deliverables", "SEO & Status"];

interface Props {
  project: any | null;
  onClose: () => void;
  onSaved: () => void;
}

function TagInput({ label, tags, onChange }: { label: string; tags: string[]; onChange: (t: string[]) => void }) {
  const [input, setInput] = useState("");
  const add = () => {
    const val = input.trim();
    if (val && !tags.includes(val)) { onChange([...tags, val]); }
    setInput("");
  };
  return (
    <div className="space-y-2">
      <label className="text-xs font-semibold text-white/50 uppercase tracking-wider">{label}</label>
      <div className="flex flex-wrap gap-2 p-3 bg-white/[0.04] border border-white/[0.08] rounded-xl min-h-[44px]">
        {tags.map((t) => (
          <span key={t} className="flex items-center gap-1.5 px-2.5 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs rounded-lg font-medium">
            {t}
            <button type="button" onClick={() => onChange(tags.filter((x) => x !== t))} className="text-cyan-400/60 hover:text-red-400 transition-colors transition duration-base ease-premium">×</button>
          </span>
        ))}
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === ",") { e.preventDefault(); add(); } }}
          placeholder="Type and press Enter..."
          className="flex-1 min-w-[120px] bg-transparent text-white text-sm placeholder-white/20 outline-none"
        />
      </div>
    </div>
  );
}

function ListInput({ label, items, onChange }: { label: string; items: string[]; onChange: (i: string[]) => void }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-xs font-semibold text-white/50 uppercase tracking-wider">{label}</label>
        <button type="button" onClick={() => onChange([...items, ""])} className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition duration-base ease-premium">
          <Plus className="size-3" /> Add
        </button>
      </div>
      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="size-5 shrink-0 flex items-center justify-center text-white/20 text-xs font-bold">{i + 1}</div>
            <input
              value={item}
              onChange={(e) => { const next = [...items]; next[i] = e.target.value; onChange(next); }}
              placeholder={`${label} item...`}
              className="flex-1 px-3 py-2 bg-white/[0.04] border border-white/[0.06] rounded-lg text-white text-sm placeholder-white/20 outline-none focus:border-cyan-500/30 transition-all transition duration-base ease-premium"
            />
            <button type="button" onClick={() => onChange(items.filter((_, j) => j !== i))} className="text-white/30 hover:text-red-400 transition-colors transition duration-base ease-premium">
              <Trash2 className="size-3.5" />
            </button>
          </div>
        ))}
        {items.length === 0 && (
          <p className="text-xs text-white/20 py-2">Click "Add" to add items</p>
        )}
      </div>
    </div>
  );
}

export function ProjectFormModal({ project, onClose, onSaved }: Props) {
  const isEdit = !!project;
  const [activeTab, setActiveTab] = useState(0);
  const [saving, setSaving] = useState(false);
  const [categories, setCategories] = useState<any[]>([]);

  const [form, setForm] = useState({
    title: project?.title || "",
    slug: project?.slug || "",
    category: project?.category || "",
    engineeringBranch: project?.engineeringBranch || "",
    banner: project?.banner || "",
    description: project?.description || "",
    technologies: project?.technologies || [],
    features: project?.features || [],
    deliverables: project?.deliverables || [],
    seoTitle: project?.seoTitle || "",
    seoDescription: project?.seoDescription || "",
    status: project?.status || "draft",
  });

  useEffect(() => {
    categoriesApi.getAll().then((res) => setCategories(res.data.data || []));
  }, []);

  const generateSlug = () => {
    const slug = form.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    setForm((f) => ({ ...f, slug }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.category || !form.description) {
      toast.error("Title, Category, and Description are required");
      return;
    }
    setSaving(true);
    try {
      if (isEdit) {
        await projectsApi.update(project._id, form);
        toast.success("Project updated!");
      } else {
        await projectsApi.create(form);
        toast.success("Project created!");
      }
      onSaved();
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Save failed");
    } finally {
      setSaving(false);
    }
  };

  const inputClass = "w-full px-4 py-2.5 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white text-sm placeholder-white/20 outline-none focus:border-cyan-500/40 focus:ring-2 focus:ring-cyan-500/10 transition-all";
  const labelClass = "text-xs font-semibold text-white/50 uppercase tracking-wider";

  const BRANCHES = ["CSE", "ECE", "EEE", "Mechanical", "Civil", "IT", "AI/ML", "IoT"];
  const STATUSES = ["draft", "active", "featured", "archived"];

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#0a1428] border border-white/10 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06] shrink-0">
          <div>
            <h2 className="text-base font-bold text-white">{isEdit ? "Edit Project" : "New Project"}</h2>
            <p className="text-xs text-white/40 mt-0.5">{isEdit ? `Editing: ${project.title}` : "Fill in the details below"}</p>
          </div>
          <button onClick={onClose} className="size-8 rounded-lg hover:bg-white/[0.06] flex items-center justify-center text-white/40 hover:text-white transition-colors transition duration-base ease-premium">
            <X className="size-4" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1 px-6 py-3 border-b border-white/[0.06] shrink-0 overflow-x-auto">
          {TABS.map((tab, i) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(i)}
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap",
                activeTab === i ? "bg-cyan-500/20 text-cyan-400" : "text-white/40 hover:text-white"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="flex flex-col flex-1 overflow-hidden">
          <div className="flex-1 overflow-y-auto p-6 space-y-5">
            {/* Tab 0: Basic Info */}
            {activeTab === 0 && (
              <>
                <div className="space-y-2">
                  <label className={labelClass}>Title *</label>
                  <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="Project title" className={inputClass} />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className={labelClass}>Slug *</label>
                    <button type="button" onClick={generateSlug} className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition duration-base ease-premium">
                      <RefreshCw className="size-3" /> Auto-generate
                    </button>
                  </div>
                  <input value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} placeholder="project-slug" className={inputClass} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className={labelClass}>Category *</label>
                    <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className={inputClass + " appearance-none"}>
                      <option value="">Select category</option>
                      {categories.map((c) => <option key={c._id} value={c.slug}>{c.name}</option>)}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className={labelClass}>Engineering Branch *</label>
                    <select value={form.engineeringBranch} onChange={(e) => setForm({ ...form, engineeringBranch: e.target.value })} className={inputClass + " appearance-none"}>
                      <option value="">Select branch</option>
                      {BRANCHES.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className={labelClass}>Banner Image URL</label>
                  <input value={form.banner} onChange={(e) => setForm({ ...form, banner: e.target.value })} placeholder="https://... or /uploads/banners/..." className={inputClass} />
                </div>
              </>
            )}

            {/* Tab 1: Content */}
            {activeTab === 1 && (
              <div className="space-y-2">
                <label className={labelClass}>Description *</label>
                <textarea
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  placeholder="Describe the project in detail..."
                  rows={12}
                  className={inputClass + " resize-none"}
                />
              </div>
            )}

            {/* Tab 2: Tech & Features */}
            {activeTab === 2 && (
              <div className="space-y-6">
                <TagInput label="Technologies" tags={form.technologies} onChange={(t) => setForm({ ...form, technologies: t })} />
                <ListInput label="Features" items={form.features} onChange={(i) => setForm({ ...form, features: i })} />
              </div>
            )}

            {/* Tab 3: Deliverables */}
            {activeTab === 3 && (
              <ListInput label="Deliverables" items={form.deliverables} onChange={(i) => setForm({ ...form, deliverables: i })} />
            )}

            {/* Tab 4: SEO & Status */}
            {activeTab === 4 && (
              <>
                <div className="space-y-2">
                  <label className={labelClass}>SEO Title</label>
                  <input value={form.seoTitle} onChange={(e) => setForm({ ...form, seoTitle: e.target.value })} placeholder="SEO-optimized title..." className={inputClass} />
                </div>
                <div className="space-y-2">
                  <label className={labelClass}>SEO Description</label>
                  <textarea value={form.seoDescription} onChange={(e) => setForm({ ...form, seoDescription: e.target.value })} rows={3} placeholder="Meta description for search engines..." className={inputClass + " resize-none"} />
                </div>
                <div className="space-y-2">
                  <label className={labelClass}>Status</label>
                  <div className="flex items-center gap-2">
                    {STATUSES.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setForm({ ...form, status: s })}
                        className={cn(
                          "px-4 py-2 rounded-lg text-xs font-bold capitalize transition-all border",
                          form.status === s ? "bg-cyan-500/20 border-cyan-500/30 text-cyan-400" : "bg-white/[0.03] border-white/[0.06] text-white/40 hover:text-white"
                        )}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-white/[0.06] shrink-0 bg-[#070d1a]">
            <div className="flex items-center gap-2">
              {TABS.map((_, i) => (
                <div key={i} className={cn("size-1.5 rounded-full transition-all", i === activeTab ? "bg-cyan-400 w-4" : "bg-white/20")} />
              ))}
            </div>
            <div className="flex items-center gap-3">
              <button type="button" onClick={onClose} className="px-4 py-2 text-sm text-white/50 hover:text-white transition-colors transition duration-base ease-premium">Cancel</button>
              {activeTab < TABS.length - 1 && (
                <button type="button" onClick={() => setActiveTab((t) => t + 1)} className="px-4 py-2 bg-white/[0.06] border border-white/[0.08] rounded-xl text-sm text-white hover:bg-white/10 transition-all transition duration-base ease-premium">
                  Next →
                </button>
              )}
              <button type="submit" disabled={saving} className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-xl transition-all disabled:opacity-60">
                {saving ? <Loader2 className="size-4 animate-spin" /> : <Save className="size-4" />}
                {saving ? "Saving..." : isEdit ? "Update Project" : "Create Project"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
