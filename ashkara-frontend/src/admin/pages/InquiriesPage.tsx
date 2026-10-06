import { useState, useEffect, useCallback } from "react";
import { Search, Filter, Download, ChevronDown, Eye, Trash2, CheckCircle, X, MessageSquare } from "lucide-react";
import toast from "react-hot-toast";
import { inquiriesApi } from "../services/adminApi";
import { cn } from "../../utils/cn";

const STATUS_TABS = ["all", "pending", "reviewed", "contacted", "resolved", "archived"];
const STATUS_COLORS: Record<string, string> = {
  pending: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  reviewed: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  contacted: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  resolved: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  archived: "bg-white/5 text-white/30 border-white/10",
};

function StatusBadge({ status }: { status: string }) {
  return <span className={cn("px-2 py-0.5 rounded text-[10px] font-bold border uppercase tracking-wider", STATUS_COLORS[status] || "bg-white/5 text-white/40 border-white/10")}>{status}</span>;
}

function InquiryDrawer({ inquiry, onClose, onStatusChange }: { inquiry: any; onClose: () => void; onStatusChange: (id: string, status: string) => void }) {
  const STATUSES = ["pending", "reviewed", "contacted", "resolved", "archived"];
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative w-full max-w-md h-full bg-[#0a1428] border-l border-white/[0.06] shadow-[0_0_60px_rgba(0,0,0,0.8)] overflow-y-auto">
        <div className="sticky top-0 flex items-center justify-between px-6 py-4 border-b border-white/[0.06] bg-[#0a1428]">
          <h3 className="text-sm font-bold text-white">Inquiry Detail</h3>
          <button onClick={onClose} className="size-7 rounded-lg hover:bg-white/[0.06] flex items-center justify-center text-white/40 hover:text-white transition-colors transition duration-base ease-premium">
            <X className="size-4" />
          </button>
        </div>
        <div className="p-6 space-y-6">
          {/* Contact Info */}
          <div className="space-y-3">
            <div className="size-12 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white font-bold text-lg">
              {inquiry.fullName?.[0]?.toUpperCase()}
            </div>
            <div>
              <h4 className="text-base font-bold text-white">{inquiry.fullName}</h4>
              <p className="text-sm text-white/50">{inquiry.email}</p>
              <p className="text-sm text-white/50">{inquiry.phone}</p>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-3 p-4 bg-white/[0.03] border border-white/[0.06] rounded-xl">
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/40 font-medium uppercase tracking-wider">Project</span>
              <StatusBadge status={inquiry.status} />
            </div>
            <p className="text-sm text-white font-medium">{inquiry.project}</p>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-white/30 block mb-0.5">Category</span>
                <span className="text-white/70">{inquiry.category}</span>
              </div>
              <div>
                <span className="text-white/30 block mb-0.5">Branch</span>
                <span className="text-white/70">{inquiry.engineeringBranch}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <span className="text-xs text-white/40 font-medium uppercase tracking-wider">Description</span>
            <p className="text-sm text-white/70 leading-relaxed whitespace-pre-wrap">{inquiry.description}</p>
          </div>

          {/* Date */}
          <p className="text-xs text-white/30">Received: {new Date(inquiry.createdAt).toLocaleString()}</p>

          {/* Status Actions */}
          <div className="space-y-2">
            <span className="text-xs text-white/40 font-medium uppercase tracking-wider">Update Status</span>
            <div className="flex flex-wrap gap-2">
              {STATUSES.filter((s) => s !== inquiry.status).map((s) => (
                <button
                  key={s}
                  onClick={() => onStatusChange(inquiry._id, s)}
                  className="px-3 py-1.5 bg-white/[0.04] border border-white/[0.06] rounded-lg text-xs text-white/50 hover:text-white capitalize transition-all hover:border-white/20 transition duration-base ease-premium"
                >
                  Mark {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function InquiriesPage() {
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [pagination, setPagination] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("all");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [activeInquiry, setActiveInquiry] = useState<any>(null);

  const fetchInquiries = useCallback(async () => {
    setLoading(true);
    try {
      const params: any = { page, limit: 20 };
      if (status !== "all") params.status = status;
      if (search) params.search = search;
      const res = await inquiriesApi.getAll(params);
      setInquiries(res.data.data.inquiries);
      setPagination(res.data.data.pagination);
    } catch { toast.error("Failed to load inquiries"); }
    finally { setLoading(false); }
  }, [page, status, search]);

  useEffect(() => { fetchInquiries(); }, [fetchInquiries]);

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      await inquiriesApi.updateStatus(id, newStatus);
      toast.success(`Marked as ${newStatus}`);
      if (activeInquiry?._id === id) {
        setActiveInquiry((prev: any) => ({ ...prev, status: newStatus }));
      }
      fetchInquiries();
    } catch { toast.error("Status update failed"); }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this inquiry?")) return;
    try {
      await inquiriesApi.delete(id);
      toast.success("Inquiry deleted");
      if (activeInquiry?._id === id) setActiveInquiry(null);
      fetchInquiries();
    } catch { toast.error("Delete failed"); }
  };

  const handleExportCsv = async () => {
    try {
      const res = await inquiriesApi.exportCsv(status !== "all" ? status : undefined);
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const a = document.createElement("a");
      a.href = url;
      a.download = "ashkara-inquiries.csv";
      a.click();
      window.URL.revokeObjectURL(url);
      toast.success("CSV exported!");
    } catch { toast.error("Export failed"); }
  };

  const toggleSelect = (id: string) => {
    setSelected((prev) => { const next = new Set(prev); next.has(id) ? next.delete(id) : next.add(id); return next; });
  };

  const handleBulkStatus = async (newStatus: string) => {
    try {
      await Promise.all([...selected].map((id) => inquiriesApi.updateStatus(id, newStatus)));
      toast.success(`${selected.size} inquiries marked ${newStatus}`);
      setSelected(new Set());
      fetchInquiries();
    } catch { toast.error("Bulk update failed"); }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-white">Inquiries</h1>
          <p className="text-sm text-white/40 mt-0.5">{pagination?.total ?? 0} total inquiries</p>
        </div>
        <button onClick={handleExportCsv} className="flex items-center gap-2 px-4 py-2 bg-white/[0.04] border border-white/[0.08] text-white/60 hover:text-white text-sm font-medium rounded-xl transition-all transition duration-base ease-premium">
          <Download className="size-4" /> Export CSV
        </button>
      </div>

      {/* Status tabs */}
      <div className="flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-xl p-1 overflow-x-auto">
        {STATUS_TABS.map((s) => (
          <button key={s} onClick={() => { setStatus(s); setPage(1); }}
            className={cn("px-3 py-1.5 rounded-lg text-xs font-semibold capitalize whitespace-nowrap transition-all", status === s ? "bg-cyan-500/20 text-cyan-400" : "text-white/40 hover:text-white")}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Search & Bulk */}
      <div className="flex items-center gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-white/30" />
          <input value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }} placeholder="Search by name, email, project..." className="w-full pl-9 pr-4 py-2.5 bg-white/[0.04] border border-white/[0.06] rounded-xl text-white text-sm placeholder-white/30 outline-none focus:border-cyan-500/30 transition-all transition duration-base ease-premium" />
        </div>
        {selected.size > 0 && (
          <div className="flex items-center gap-2 px-3 py-2 bg-[linear-gradient(135deg,#00a3ff,#8b5cf6)]/10 border border-blue-500/20 rounded-xl shadow-button hover:shadow-glow transition duration-base ease-premium">
            <span className="text-xs text-blue-400">{selected.size} selected</span>
            {["reviewed", "contacted", "resolved"].map((s) => (
              <button key={s} onClick={() => handleBulkStatus(s)} className="text-xs text-blue-300 hover:text-white capitalize font-medium transition duration-base ease-premium">{s}</button>
            ))}
          </div>
        )}
      </div>

      {/* Table */}
      <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/[0.06]">
              <th className="px-5 py-3 text-left"><input type="checkbox" checked={selected.size === inquiries.length && inquiries.length > 0} onChange={() => { if (selected.size === inquiries.length) setSelected(new Set()); else setSelected(new Set(inquiries.map((i) => i._id))); }} className="accent-cyan-400" /></th>
              <th className="px-4 py-3 text-left text-xs font-bold text-white/40 uppercase tracking-wider">From</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-white/40 uppercase tracking-wider">Project</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-white/40 uppercase tracking-wider">Category</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-white/40 uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-white/40 uppercase tracking-wider">Date</th>
              <th className="px-4 py-3 text-right text-xs font-bold text-white/40 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={7} className="px-5 py-12 text-center text-white/30 text-sm">Loading...</td></tr>
            ) : inquiries.length === 0 ? (
              <tr><td colSpan={7} className="px-5 py-12 text-center text-white/30 text-sm">No inquiries found</td></tr>
            ) : inquiries.map((inq) => (
              <tr key={inq._id} className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors group cursor-pointer transition duration-base ease-premium" onClick={() => setActiveInquiry(inq)}>
                <td className="px-5 py-3.5" onClick={(e) => e.stopPropagation()}>
                  <input type="checkbox" checked={selected.has(inq._id)} onChange={() => toggleSelect(inq._id)} className="accent-cyan-400" />
                </td>
                <td className="px-4 py-3.5">
                  <div>
                    <p className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors transition duration-base ease-premium">{inq.fullName}</p>
                    <p className="text-xs text-white/30">{inq.email}</p>
                  </div>
                </td>
                <td className="px-4 py-3.5 text-xs text-white/60 max-w-[160px] truncate">{inq.project}</td>
                <td className="px-4 py-3.5 text-xs text-white/50">{inq.category}</td>
                <td className="px-4 py-3.5"><StatusBadge status={inq.status} /></td>
                <td className="px-4 py-3.5 text-xs text-white/30">{new Date(inq.createdAt).toLocaleDateString()}</td>
                <td className="px-4 py-3.5" onClick={(e) => e.stopPropagation()}>
                  <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity transition duration-base ease-premium">
                    <button onClick={() => setActiveInquiry(inq)} className="size-7 rounded-lg hover:bg-cyan-500/10 flex items-center justify-center text-white/40 hover:text-cyan-400 transition-all transition duration-base ease-premium" title="View"><Eye className="size-3.5" /></button>
                    <button onClick={() => handleStatusChange(inq._id, "resolved")} className="size-7 rounded-lg hover:bg-emerald-500/10 flex items-center justify-center text-white/40 hover:text-emerald-400 transition-all transition duration-base ease-premium" title="Mark Resolved"><CheckCircle className="size-3.5" /></button>
                    <button onClick={() => handleDelete(inq._id)} className="size-7 rounded-lg hover:bg-red-500/10 flex items-center justify-center text-white/40 hover:text-red-400 transition-all transition duration-base ease-premium" title="Delete"><Trash2 className="size-3.5" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {pagination && pagination.pages > 1 && (
          <div className="flex items-center justify-between px-5 py-3 border-t border-white/[0.06]">
            <p className="text-xs text-white/30">Page {pagination.page} of {pagination.pages}</p>
            <div className="flex items-center gap-2">
              <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1} className="px-3 py-1.5 text-xs bg-white/[0.04] border border-white/[0.06] rounded-lg text-white/50 hover:text-white disabled:opacity-30 transition-all transition duration-base ease-premium">Previous</button>
              <button onClick={() => setPage((p) => Math.min(pagination.pages, p + 1))} disabled={page === pagination.pages} className="px-3 py-1.5 text-xs bg-white/[0.04] border border-white/[0.06] rounded-lg text-white/50 hover:text-white disabled:opacity-30 transition-all transition duration-base ease-premium">Next</button>
            </div>
          </div>
        )}
      </div>

      {activeInquiry && (
        <InquiryDrawer
          inquiry={activeInquiry}
          onClose={() => setActiveInquiry(null)}
          onStatusChange={handleStatusChange}
        />
      )}
    </div>
  );
}
