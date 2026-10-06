import { useState, useRef, useEffect } from "react";
import { Search, Bell, X } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { analyticsApi, notificationsApi } from "../services/adminApi";
import { useAdminAuth } from "../context/AdminAuthContext";
import { cn } from "../../utils/cn";

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
}

export function AdminTopBar({ sidebarCollapsed }: { sidebarCollapsed: boolean }) {
  const { admin } = useAdminAuth();
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<any>(null);
  const [searching, setSearching] = useState(false);
  
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [notifications, setNotifications] = useState<any[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);
  const debouncedQuery = useDebounce(searchQuery, 300);

  useEffect(() => {
    notificationsApi.getAll()
      .then((res) => setNotifications(res.data.data.notifications || []))
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!debouncedQuery || debouncedQuery.length < 2) {
      setResults(null);
      return;
    }
    setSearching(true);
    analyticsApi.search(debouncedQuery)
      .then((res) => setResults(res.data.data))
      .catch(() => setResults(null))
      .finally(() => setSearching(false));
  }, [debouncedQuery]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
        setTimeout(() => inputRef.current?.focus(), 50);
      }
      if (e.key === "Escape") {
        setSearchOpen(false);
        setSearchQuery("");
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const hasResults = results && (
    results.projects?.length > 0 ||
    results.inquiries?.length > 0 ||
    results.categories?.length > 0 ||
    results.clients?.length > 0 ||
    results.blueprints?.length > 0 ||
    results.reminders?.length > 0
  );

  return (
    <header
      className={cn(
        "fixed top-0 right-0 h-16 z-40 flex items-center gap-4 px-6 transition-all duration-300",
        "bg-[#070d1a]/80 backdrop-blur-xl border-b border-white/[0.06]",
        sidebarCollapsed ? "left-16" : "left-60"
      )}
    >
      {/* Global Search */}
      <div className="flex-1 max-w-md">
        <button
          onClick={() => { setSearchOpen(true); setTimeout(() => inputRef.current?.focus(), 50); }}
          className="w-full flex items-center gap-3 px-4 py-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white/40 text-sm hover:border-cyan-500/30 hover:text-white/60 transition-all group transition duration-base ease-premium"
        >
          <Search className="size-4 shrink-0" />
          <span className="flex-1 text-left">Search everything...</span>
          <span className="text-xs font-mono bg-white/[0.06] px-1.5 py-0.5 rounded border border-white/10">⌘K</span>
        </button>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-2">
        <div className="relative">
          <button
            onClick={() => setNotificationsOpen(!notificationsOpen)}
            className={cn("size-9 rounded-lg hover:bg-white/[0.05] flex items-center justify-center relative transition-colors", notificationsOpen ? "bg-white/[0.05] text-white" : "text-white/50 hover:text-white")}
          >
            <Bell className="size-4" />
            {notifications.length > 0 && (
              <span className="absolute top-1.5 right-1.5 size-2 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)] animate-pulse" />
            )}
          </button>
          
          {notificationsOpen && (
            <div className="absolute top-full right-0 mt-2 w-80 bg-[#0d1629] border border-white/10 rounded-2xl shadow-glow overflow-hidden z-50">
              <div className="flex items-center justify-between p-4 border-b border-white/[0.06]">
                <h3 className="font-bold text-white text-sm">Notifications</h3>
                <span className="text-xs text-white/50 bg-white/5 px-2 py-0.5 rounded-full">{notifications.length} new</span>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {notifications.length > 0 ? notifications.map((n: any) => (
                  <Link
                    key={n.id}
                    to={n.link}
                    onClick={() => setNotificationsOpen(false)}
                    className="block p-4 border-b border-white/[0.02] hover:bg-white/[0.02] transition-colors transition duration-base ease-premium"
                  >
                    <div className="flex items-start gap-3">
                      <div className={cn("size-2 rounded-full mt-1.5 shrink-0", 
                        n.type === "inquiry" ? "bg-pink-400" :
                        n.type === "reminder" ? "bg-amber-400" :
                        "bg-violet-400"
                      )} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-white truncate">{n.title}</p>
                        <p className="text-xs text-white/60 mt-0.5 line-clamp-2">{n.message}</p>
                        <p className="text-[10px] text-cyan-400/70 mt-1">
                          {new Date(n.date).toLocaleDateString()} {new Date(n.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  </Link>
                )) : (
                  <div className="p-8 text-center text-white/40 text-sm">
                    No new notifications
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <Link to="/admin/profile" className="flex items-center gap-2.5 pl-2 border-l border-white/10 group cursor-pointer">
          <div className="size-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold shadow-[0_0_15px_rgba(34,211,238,0.3)] group-hover:scale-110 transition-transform transition duration-base ease-premium">
            {admin?.name?.[0]?.toUpperCase() || "A"}
          </div>
          <div className="hidden sm:block">
            <p className="text-xs font-semibold text-white leading-tight group-hover:text-cyan-400 transition-colors transition duration-base ease-premium">{admin?.name}</p>
            <p className="text-[10px] text-white/40 leading-tight">{admin?.role}</p>
          </div>
        </Link>
      </div>

      {/* Global Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => { setSearchOpen(false); setSearchQuery(""); }} />
          <div className="relative w-full max-w-xl bg-[#0d1629] border border-white/10 rounded-2xl shadow-[0_25px_50px_rgba(0,0,0,0.8)] overflow-hidden">
            <div className="flex items-center gap-3 px-5 py-4 border-b border-white/[0.06]">
              <Search className="size-5 text-cyan-400 shrink-0" />
              <input
                ref={inputRef}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects, inquiries, categories..."
                className="flex-1 bg-transparent text-white placeholder-white/40 text-sm outline-none"
              />
              {searching && <div className="size-4 border-2 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin shrink-0" />}
              <button onClick={() => { setSearchOpen(false); setSearchQuery(""); }} className="text-white/40 hover:text-white transition-colors transition duration-base ease-premium">
                <X className="size-4" />
              </button>
            </div>

            {hasResults && (
              <div className="p-3 space-y-4 max-h-80 overflow-y-auto">
                {results.clients?.length > 0 && (
                  <div>
                    <p className="text-[10px] text-white/40 font-bold uppercase tracking-wider px-2 mb-2">Clients</p>
                    {results.clients.map((c: any) => (
                      <button
                        key={c._id}
                        onClick={() => { navigate(`/admin/clients/${c._id}`); setSearchOpen(false); setSearchQuery(""); }}
                        className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/[0.05] text-left transition-colors group transition duration-base ease-premium"
                      >
                        <div className="size-2 rounded-full bg-blue-400 shrink-0" />
                        <span className="text-sm text-white group-hover:text-blue-400 transition-colors flex-1 truncate transition duration-base ease-premium">{c.fullName}</span>
                        <span className="text-xs text-white/30 truncate">{c.college}</span>
                      </button>
                    ))}
                  </div>
                )}
                {results.blueprints?.length > 0 && (
                  <div>
                    <p className="text-[10px] text-white/40 font-bold uppercase tracking-wider px-2 mb-2">Blueprints</p>
                    {results.blueprints.map((bp: any) => (
                      <button
                        key={bp._id}
                        onClick={() => { navigate(`/admin/project-blueprints`); setSearchOpen(false); setSearchQuery(""); }}
                        className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/[0.05] text-left transition-colors group transition duration-base ease-premium"
                      >
                        <div className="size-2 rounded-full bg-violet-400 shrink-0" />
                        <span className="text-sm text-white group-hover:text-violet-400 transition-colors flex-1 truncate transition duration-base ease-premium">{bp.title}</span>
                        <span className="text-xs text-white/30 truncate capitalize">v{bp.version} • {bp.status}</span>
                      </button>
                    ))}
                  </div>
                )}
                {results.reminders?.length > 0 && (
                  <div>
                    <p className="text-[10px] text-white/40 font-bold uppercase tracking-wider px-2 mb-2">Reminders</p>
                    {results.reminders.map((r: any) => (
                      <button
                        key={r._id}
                        onClick={() => { navigate(`/admin/reminders`); setSearchOpen(false); setSearchQuery(""); }}
                        className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/[0.05] text-left transition-colors group transition duration-base ease-premium"
                      >
                        <div className="size-2 rounded-full bg-amber-400 shrink-0" />
                        <span className="text-sm text-white group-hover:text-amber-400 transition-colors flex-1 truncate transition duration-base ease-premium">{r.title}</span>
                      </button>
                    ))}
                  </div>
                )}
                {results.projects?.length > 0 && (
                  <div>
                    <p className="text-[10px] text-white/40 font-bold uppercase tracking-wider px-2 mb-2">Projects</p>
                    {results.projects.map((p: any) => (
                      <button
                        key={p._id}
                        onClick={() => { navigate("/admin/projects"); setSearchOpen(false); setSearchQuery(""); }}
                        className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/[0.05] text-left transition-colors group transition duration-base ease-premium"
                      >
                        <div className="size-2 rounded-full bg-cyan-400 shrink-0" />
                        <span className="text-sm text-white group-hover:text-cyan-400 transition-colors flex-1 truncate transition duration-base ease-premium">{p.title}</span>
                        <span className="text-xs text-white/30 capitalize">{p.status}</span>
                      </button>
                    ))}
                  </div>
                )}
                {results.inquiries?.length > 0 && (
                  <div>
                    <p className="text-[10px] text-white/40 font-bold uppercase tracking-wider px-2 mb-2">Inquiries</p>
                    {results.inquiries.map((i: any) => (
                      <button
                        key={i._id}
                        onClick={() => { navigate("/admin/inquiries"); setSearchOpen(false); setSearchQuery(""); }}
                        className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/[0.05] text-left transition-colors group transition duration-base ease-premium"
                      >
                        <div className="size-2 rounded-full bg-pink-400 shrink-0" />
                        <span className="text-sm text-white group-hover:text-pink-400 transition-colors transition duration-base ease-premium">{i.fullName}</span>
                        <span className="text-xs text-white/30">{i.email}</span>
                      </button>
                    ))}
                  </div>
                )}
                {results.categories?.length > 0 && (
                  <div>
                    <p className="text-[10px] text-white/40 font-bold uppercase tracking-wider px-2 mb-2">Categories</p>
                    {results.categories.map((c: any) => (
                      <button
                        key={c._id}
                        onClick={() => { navigate("/admin/categories"); setSearchOpen(false); setSearchQuery(""); }}
                        className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/[0.05] text-left transition-colors group transition duration-base ease-premium"
                      >
                        <div className="size-2 rounded-full bg-emerald-400 shrink-0" />
                        <span className="text-sm text-white group-hover:text-emerald-400 transition-colors transition duration-base ease-premium">{c.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {!hasResults && searchQuery.length >= 2 && !searching && (
              <div className="px-5 py-8 text-center text-white/40 text-sm">
                No results for "{searchQuery}"
              </div>
            )}

            {!searchQuery && (
              <div className="px-5 py-6 space-y-1">
                <p className="text-xs text-white/30 mb-3">Quick Navigation</p>
                {[
                  { label: "Dashboard", path: "/admin/dashboard" },
                  { label: "Projects", path: "/admin/projects" },
                  { label: "Inquiries", path: "/admin/inquiries" },
                  { label: "Settings", path: "/admin/settings" },
                ].map(({ label, path }) => (
                  <button
                    key={path}
                    onClick={() => { navigate(path); setSearchOpen(false); }}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/[0.05] text-left text-sm text-white/50 hover:text-white transition-colors transition duration-base ease-premium"
                  >
                    <span>→</span> {label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
