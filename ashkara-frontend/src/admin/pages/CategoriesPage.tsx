import { useState, useEffect, useCallback } from "react";
import { Plus, Edit2, Trash2, Eye, EyeOff, X, Save, Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { categoriesApi } from "../services/adminApi";
import { cn } from "../../utils/cn";

function CategoryModal({ category, onClose, onSaved }: { category: any; onClose: () => void; onSaved: () => void }) {
  const isEdit = !!category;
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    name: category?.name || "",
    slug: category?.slug || "",
    description: category?.description || "",
    banner: category?.banner || "",
    isVisible: category?.isVisible ?? true,
    order: category?.order ?? 0,
  });

  const inputClass = "w-full px-4 py-2.5 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white text-sm placeholder-white/20 outline-none focus:border-cyan-500/40 transition-all";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name) { toast.error("Name is required"); return; }
    if (!form.slug) { form.slug = form.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"); }
    setSaving(true);
    try {
      if (isEdit) await categoriesApi.update(category._id, form);
      else await categoriesApi.create(form);
      toast.success(isEdit ? "Category updated!" : "Category created!");
      onSaved();
    } catch (err: any) { toast.error(err.response?.data?.message || "Save failed"); }
    finally { setSaving(false); }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md bg-[#0a1428] border border-white/10 rounded-2xl shadow-[0_25px_50px_rgba(0,0,0,0.8)]">
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06]">
          <h3 className="text-sm font-bold text-white">{isEdit ? "Edit Category" : "New Category"}</h3>
          <button onClick={onClose} className="size-7 rounded-lg hover:bg-white/[0.06] flex items-center justify-center text-white/40 hover:text-white transition-colors transition duration-base ease-premium"><X className="size-4" /></button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-white/50 uppercase tracking-wider">Name *</label>
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Category name" className={inputClass} />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold text-white/50 uppercase tracking-wider">Slug</label>
            <input value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} placeholder="auto-generated-if-empty" className={inputClass} />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold text-white/50 uppercase tracking-wider">Description</label>
            <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3} placeholder="Brief description..." className={inputClass + " resize-none"} />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold text-white/50 uppercase tracking-wider">Banner Image URL</label>
            <input value={form.banner} onChange={(e) => setForm({ ...form, banner: e.target.value })} placeholder="/uploads/banners/..." className={inputClass} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-white/50 uppercase tracking-wider">Display Order</label>
              <input type="number" value={form.order} onChange={(e) => setForm({ ...form, order: Number(e.target.value) })} className={inputClass} />
            </div>
            <div className="flex items-center gap-3 pt-5">
              <button type="button" onClick={() => setForm((f) => ({ ...f, isVisible: !f.isVisible }))}
                className={cn("relative inline-flex h-6 w-11 rounded-full border-2 transition-all duration-300", form.isVisible ? "bg-cyan-500 border-cyan-500" : "bg-white/10 border-white/20")}>
                <span className={cn("absolute top-0.5 size-4 rounded-full bg-white transition-transform", form.isVisible ? "translate-x-5" : "translate-x-0.5")} />
              </button>
              <span className="text-xs text-white/50">{form.isVisible ? "Visible" : "Hidden"}</span>
            </div>
          </div>
          <div className="flex items-center gap-3 pt-2">
            <button type="button" onClick={onClose} className="flex-1 py-2.5 text-sm text-white/50 hover:text-white transition-colors transition duration-base ease-premium">Cancel</button>
            <button type="submit" disabled={saving} className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-xl disabled:opacity-60 transition-all">
              {saving ? <Loader2 className="size-4 animate-spin" /> : <Save className="size-4" />}
              {saving ? "Saving..." : isEdit ? "Update" : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export function CategoriesPage() {
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editCat, setEditCat] = useState<any>(null);

  const fetchCategories = useCallback(async () => {
    setLoading(true);
    try {
      const res = await categoriesApi.getAll();
      setCategories(res.data.data || []);
    } catch { toast.error("Failed to load categories"); }
    finally { setLoading(false); }
  }, []);

  useEffect(() => { fetchCategories(); }, [fetchCategories]);

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Delete "${name}"?`)) return;
    try {
      await categoriesApi.delete(id);
      toast.success("Category deleted");
      fetchCategories();
    } catch { toast.error("Delete failed"); }
  };

  const handleToggleVisibility = async (cat: any) => {
    try {
      await categoriesApi.update(cat._id, { isVisible: !cat.isVisible });
      toast.success(cat.isVisible ? "Hidden" : "Visible");
      fetchCategories();
    } catch { toast.error("Update failed"); }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-white">Categories</h1>
          <p className="text-sm text-white/40 mt-0.5">{categories.length} categories</p>
        </div>
        <button onClick={() => { setEditCat(null); setShowModal(true); }} className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-xl shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all transition duration-base ease-premium">
          <Plus className="size-4" /> New Category
        </button>
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-48"><div className="size-8 border-2 border-white/10 border-t-cyan-400 rounded-full animate-spin" /></div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <div key={cat._id} className={cn("bg-white/[0.03] border rounded-2xl overflow-hidden hover:border-white/10 transition-all group", cat.isVisible ? "border-white/[0.06]" : "border-white/[0.03] opacity-60")}>
              {/* Banner */}
              {cat.banner ? (
                <div className="h-28 overflow-hidden">
                  <img src={cat.banner} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 transition duration-base ease-premium" onError={(e) => { e.currentTarget.style.display = "none"; }} />
                </div>
              ) : (
                <div className="h-28 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 flex items-center justify-center">
                  <span className="text-4xl">{cat.name[0]}</span>
                </div>
              )}

              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-white truncate">{cat.name}</h3>
                    <p className="text-xs text-white/40">{cat.slug}</p>
                  </div>
                  <span className="text-xs text-white/30 bg-white/[0.05] px-2 py-0.5 rounded-full shrink-0 ml-2">
                    {cat.projectCount ?? 0} projects
                  </span>
                </div>
                {cat.description && <p className="text-xs text-white/50 mt-2 line-clamp-2">{cat.description}</p>}

                <div className="flex items-center gap-2 mt-4 pt-3 border-t border-white/[0.06]">
                  <button onClick={() => handleToggleVisibility(cat)} className={cn("flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-lg border transition-all", cat.isVisible ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" : "bg-white/[0.04] border-white/[0.08] text-white/40")}>
                    {cat.isVisible ? <Eye className="size-3" /> : <EyeOff className="size-3" />}
                    {cat.isVisible ? "Visible" : "Hidden"}
                  </button>
                  <div className="flex-1" />
                  <button onClick={() => { setEditCat(cat); setShowModal(true); }} className="size-7 rounded-lg hover:bg-cyan-500/10 flex items-center justify-center text-white/30 hover:text-cyan-400 transition-all transition duration-base ease-premium"><Edit2 className="size-3.5" /></button>
                  <button onClick={() => handleDelete(cat._id, cat.name)} className="size-7 rounded-lg hover:bg-red-500/10 flex items-center justify-center text-white/30 hover:text-red-400 transition-all transition duration-base ease-premium"><Trash2 className="size-3.5" /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {showModal && (
        <CategoryModal category={editCat} onClose={() => { setShowModal(false); setEditCat(null); }} onSaved={() => { fetchCategories(); setShowModal(false); setEditCat(null); }} />
      )}
    </div>
  );
}
