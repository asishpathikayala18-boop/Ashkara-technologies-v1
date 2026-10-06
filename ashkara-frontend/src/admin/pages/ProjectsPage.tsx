import { useState, useEffect, useCallback } from "react";
import { Plus, Search, Copy, Trash2, Edit2, Archive, Star, ChevronDown, Filter, Download } from "lucide-react";
import toast from "react-hot-toast";
import { projectsApi } from "../services/adminApi";
import { cn } from "../../utils/cn";
import { ProjectFormModal } from "../components/ProjectFormModal";

const STATUS_TABS = ["all", "active", "draft", "featured", "archived"];
const STATUS_COLORS: Record<string, string> = {
  active: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  draft: "bg-white/5 text-white/40 border-white/10",
  featured: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  archived: "bg-white/5 text-white/20 border-white/[0.06]",
};

function StatusBadge({ status }: { status: string }) {
  return (
    <span className={cn("px-2 py-0.5 rounded text-[10px] font-bold border uppercase tracking-wider", STATUS_COLORS[status] || "bg-white/5 text-white/40 border-white/10")}>
      {status}
    </span>
  );
}

export function ProjectsPage() {
  const [projects, setProjects] = useState<any[]>([]);
  const [pagination, setPagination] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("all");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [showModal, setShowModal] = useState(false);
  const [editProject, setEditProject] = useState<any>(null);

  const fetchProjects = useCallback(async () => {
    setLoading(true);
    try {
      const params: any = { page, limit: 15 };
      if (status !== "all") params.status = status;
      if (search) params.search = search;
      const res = await projectsApi.getAll(params);
      setProjects(res.data.data.projects);
      setPagination(res.data.data.pagination);
    } catch {
      toast.error("Failed to load projects");
    } finally {
      setLoading(false);
    }
  }, [page, status, search]);

  useEffect(() => { fetchProjects(); }, [fetchProjects]);

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    try {
      await projectsApi.delete(id);
      toast.success("Project deleted");
      fetchProjects();
    } catch { toast.error("Delete failed"); }
  };

  const handleDuplicate = async (id: string) => {
    try {
      await projectsApi.duplicate(id);
      toast.success("Project duplicated");
      fetchProjects();
    } catch { toast.error("Duplicate failed"); }
  };

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      await projectsApi.updateStatus(id, newStatus);
      toast.success(`Project ${newStatus}`);
      fetchProjects();
    } catch { toast.error("Status update failed"); }
  };

  const toggleSelect = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const handleBulkDelete = async () => {
    if (!confirm(`Delete ${selected.size} projects?`)) return;
    try {
      await Promise.all([...selected].map((id) => projectsApi.delete(id)));
      toast.success(`${selected.size} projects deleted`);
      setSelected(new Set());
      fetchProjects();
    } catch { toast.error("Bulk delete failed"); }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-white">Projects</h1>
          <p className="text-sm text-white/40 mt-0.5">{pagination?.total ?? 0} total projects</p>
        </div>
        <button
          onClick={() => { setEditProject(null); setShowModal(true); }}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-xl shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all transition duration-base ease-premium"
        >
          <Plus className="size-4" /> New Project
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3 flex-wrap">
        {/* Status tabs */}
        <div className="flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-xl p-1">
          {STATUS_TABS.map((s) => (
            <button
              key={s}
              onClick={() => { setStatus(s); setPage(1); }}
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wide transition-all capitalize",
                status === s ? "bg-cyan-500/20 text-cyan-400" : "text-white/40 hover:text-white"
              )}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="flex-1 min-w-[200px] relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-white/30" />
          <input
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            placeholder="Search projects..."
            className="w-full pl-9 pr-4 py-2.5 bg-white/[0.04] border border-white/[0.06] rounded-xl text-white text-sm placeholder-white/30 outline-none focus:border-cyan-500/30 transition-all transition duration-base ease-premium"
          />
        </div>

        {/* Bulk actions */}
        {selected.size > 0 && (
          <div className="flex items-center gap-2 px-3 py-2 bg-red-500/10 border border-red-500/20 rounded-xl">
            <span className="text-xs text-red-400 font-medium">{selected.size} selected</span>
            <button onClick={handleBulkDelete} className="text-xs text-red-400 hover:text-red-300 font-semibold transition duration-base ease-premium">Delete All</button>
          </div>
        )}
      </div>

      {/* Table */}
      <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/[0.06]">
                <th className="px-5 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={selected.size === projects.length && projects.length > 0}
                    onChange={() => {
                      if (selected.size === projects.length) setSelected(new Set());
                      else setSelected(new Set(projects.map((p) => p._id)));
                    }}
                    className="accent-cyan-400"
                  />
                </th>
                <th className="px-4 py-3 text-left text-xs font-bold text-white/40 uppercase tracking-wider">Title</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-white/40 uppercase tracking-wider">Category</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-white/40 uppercase tracking-wider">Branch</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-white/40 uppercase tracking-wider">Status</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-white/40 uppercase tracking-wider">Views</th>
                <th className="px-4 py-3 text-right text-xs font-bold text-white/40 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={7} className="px-5 py-12 text-center text-white/30 text-sm">Loading...</td></tr>
              ) : projects.length === 0 ? (
                <tr><td colSpan={7} className="px-5 py-12 text-center text-white/30 text-sm">No projects found</td></tr>
              ) : projects.map((project) => (
                <tr key={project._id} className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors group transition duration-base ease-premium">
                  <td className="px-5 py-3.5">
                    <input type="checkbox" checked={selected.has(project._id)} onChange={() => toggleSelect(project._id)} className="accent-cyan-400" />
                  </td>
                  <td className="px-4 py-3.5">
                    <div>
                      <p className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors truncate max-w-[200px] transition duration-base ease-premium">{project.title}</p>
                      <p className="text-xs text-white/30 truncate max-w-[200px]">{project.slug}</p>
                    </div>
                  </td>
                  <td className="px-4 py-3.5 text-xs text-white/50 capitalize">{project.category}</td>
                  <td className="px-4 py-3.5 text-xs text-white/50">{project.engineeringBranch}</td>
                  <td className="px-4 py-3.5"><StatusBadge status={project.status} /></td>
                  <td className="px-4 py-3.5 text-xs text-white/50">{project.viewCount ?? 0}</td>
                  <td className="px-4 py-3.5">
                    <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity transition duration-base ease-premium">
                      <button
                        onClick={() => { setEditProject(project); setShowModal(true); }}
                        className="size-7 rounded-lg hover:bg-cyan-500/10 flex items-center justify-center text-white/40 hover:text-cyan-400 transition-all transition duration-base ease-premium"
                        title="Edit"
                      >
                        <Edit2 className="size-3.5" />
                      </button>
                      <button
                        onClick={() => handleDuplicate(project._id)}
                        className="size-7 rounded-lg hover:bg-[linear-gradient(135deg,#00a3ff,#8b5cf6)]/10 flex items-center justify-center text-white/40 hover:text-blue-400 transition-all shadow-button hover:shadow-glow transition duration-base ease-premium"
                        title="Duplicate"
                      >
                        <Copy className="size-3.5" />
                      </button>
                      <button
                        onClick={() => handleStatusChange(project._id, project.status === "featured" ? "active" : "featured")}
                        className="size-7 rounded-lg hover:bg-amber-500/10 flex items-center justify-center text-white/40 hover:text-amber-400 transition-all transition duration-base ease-premium"
                        title="Feature/Unfeature"
                      >
                        <Star className="size-3.5" />
                      </button>
                      <button
                        onClick={() => handleStatusChange(project._id, project.status === "archived" ? "draft" : "archived")}
                        className="size-7 rounded-lg hover:bg-white/10 flex items-center justify-center text-white/40 hover:text-white transition-all transition duration-base ease-premium"
                        title="Archive/Unarchive"
                      >
                        <Archive className="size-3.5" />
                      </button>
                      <button
                        onClick={() => handleDelete(project._id, project.title)}
                        className="size-7 rounded-lg hover:bg-red-500/10 flex items-center justify-center text-white/40 hover:text-red-400 transition-all transition duration-base ease-premium"
                        title="Delete"
                      >
                        <Trash2 className="size-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {pagination && pagination.pages > 1 && (
          <div className="flex items-center justify-between px-5 py-3 border-t border-white/[0.06]">
            <p className="text-xs text-white/30">
              Page {pagination.page} of {pagination.pages} ({pagination.total} projects)
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-3 py-1.5 text-xs bg-white/[0.04] border border-white/[0.06] rounded-lg text-white/50 hover:text-white disabled:opacity-30 transition-all transition duration-base ease-premium"
              >
                Previous
              </button>
              <button
                onClick={() => setPage((p) => Math.min(pagination.pages, p + 1))}
                disabled={page === pagination.pages}
                className="px-3 py-1.5 text-xs bg-white/[0.04] border border-white/[0.06] rounded-lg text-white/50 hover:text-white disabled:opacity-30 transition-all transition duration-base ease-premium"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Project Form Modal */}
      {showModal && (
        <ProjectFormModal
          project={editProject}
          onClose={() => { setShowModal(false); setEditProject(null); }}
          onSaved={() => { fetchProjects(); setShowModal(false); setEditProject(null); }}
        />
      )}
    </div>
  );
}
