import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Users, FolderOpen, FileText, Bell, MessageSquare, Image,
  Activity, TrendingUp, Search, Plus, CheckCircle, Clock, Server, Database, Cloud, Zap
} from "lucide-react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, BarChart, Bar, Legend,
} from "recharts";
import { analyticsApi } from "../services/adminApi";
import { useAdminAuth } from "../context/AdminAuthContext";
import { cn } from "../../utils/cn";

const COLORS = ["#22d3ee", "#3b82f6", "#a855f7", "#f59e0b", "#10b981", "#ef4444"];

function StatCard({ icon: Icon, label, value, sub, color }: any) {
  return (
    <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 hover:bg-white/[0.05] transition-all group relative overflow-hidden transition duration-base ease-premium">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full -mr-16 -mt-16 pointer-events-none" />
      <div className="flex items-start justify-between mb-4">
        <div className={cn("size-10 rounded-xl flex items-center justify-center shadow-glass", color)}>
          <Icon className="size-5 text-white" />
        </div>
        <TrendingUp className="size-4 text-white/20 group-hover:text-emerald-400 transition-colors transition duration-base ease-premium" />
      </div>
      <p className="text-3xl font-bold text-white mb-0.5 tracking-tight">{value ?? "—"}</p>
      <p className="text-sm text-white/50">{label}</p>
      {sub && <p className="text-xs text-white/30 mt-1">{sub}</p>}
    </div>
  );
}

function SectionHeader({ title, to }: { title: string; to?: string }) {
  return (
    <div className="flex items-center justify-between mb-5">
      <h2 className="text-sm font-bold text-white uppercase tracking-wider">{title}</h2>
      {to && (
        <Link to={to} className="text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors bg-cyan-400/10 px-3 py-1 rounded-full transition duration-base ease-premium">
          View All
        </Link>
      )}
    </div>
  );
}

const STATUS_COLORS: Record<string, string> = {
  pending: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  reviewed: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  contacted: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  resolved: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  draft: "bg-white/5 text-white/50 border-white/10",
  active: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  completed: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  featured: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  archived: "bg-white/5 text-white/30 border-white/10",
};

function StatusBadge({ status }: { status: string }) {
  return (
    <span className={cn("px-2 py-0.5 rounded text-[10px] font-bold border uppercase tracking-wider", STATUS_COLORS[status] || "bg-white/5 text-white/40 border-white/10")}>
      {status}
    </span>
  );
}

export function DashboardPage() {
  const { admin } = useAdminAuth();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    analyticsApi.getDashboard()
      .then((res) => setData(res.data.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const greetingHour = new Date().getHours();
  const greeting = greetingHour < 12 ? "Good morning" : greetingHour < 17 ? "Good afternoon" : "Good evening";

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="size-10 border-2 border-white/10 border-t-cyan-400 rounded-full animate-spin" />
      </div>
    );
  }

  const { overview, charts, systemHealth, recentActivity, recentInquiries } = data || {};

  const trendData = charts?.inquiryTrend?.map((t: any) => ({
    date: t._id.slice(5),
    inquiries: t.count,
  })) || [];

  const sourceData = charts?.inquiriesBySource?.map((c: any) => ({
    name: c._id || "Direct",
    value: c.count,
  })) || [];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-r from-cyan-900/20 to-blue-900/10 p-6 rounded-3xl border border-white/5">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">{greeting}, {admin?.name?.split(" ")[0]} 👋</h1>
          <p className="text-sm text-white/50 mt-1.5">Here is your operational overview for today.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/admin/project-blueprints" className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-white text-sm font-medium rounded-xl transition-all border border-white/10 transition duration-base ease-premium">
            <FileText className="size-4" /> New Blueprint
          </Link>
          <Link to="/admin/clients" className="flex items-center gap-2 px-4 py-2 bg-cyan-500 text-black text-sm font-bold rounded-xl hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] transition duration-base ease-premium">
            <Plus className="size-4" /> New Client
          </Link>
        </div>
      </div>

      {/* Primary Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard icon={Users} label="Total Clients" value={overview?.totalClients} color="bg-blue-500/20 text-blue-400" />
        <StatCard icon={FolderOpen} label="Active Projects" value={overview?.activeProjects} color="bg-cyan-500/20 text-cyan-400" />
        <StatCard icon={FileText} label="Draft Blueprints" value={overview?.draftBlueprints} color="bg-violet-500/20 text-violet-400" />
        <StatCard icon={Bell} label="Pending Reminders" value={overview?.pendingReminders} color="bg-amber-500/20 text-amber-400" />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="bg-white/[0.02] border border-white/[0.05] rounded-3xl p-6">
          <SectionHeader title="Quick Actions" />
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Add Client", to: "/admin/clients", icon: Users, color: "text-blue-400" },
              { label: "New Blueprint", to: "/admin/project-blueprints", icon: FileText, color: "text-violet-400" },
              { label: "Add Reminder", to: "/admin/reminders", icon: Bell, color: "text-amber-400" },
              { label: "Portfolio", to: "/admin/portfolio-items", icon: Image, color: "text-emerald-400" },
            ].map(({ label, to, icon: Icon, color }) => (
              <Link key={to} to={to} className="flex flex-col items-center justify-center gap-3 p-4 bg-white/[0.03] border border-white/[0.06] rounded-2xl hover:bg-white/[0.06] transition-all group transition duration-base ease-premium">
                <Icon className={cn("size-6", color, "group-hover:scale-110 transition-transform")} />
                <span className="text-xs font-medium text-white/70 group-hover:text-white transition duration-base ease-premium">{label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* System Health */}
        <div className="bg-white/[0.02] border border-white/[0.05] rounded-3xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
            <Activity className="size-32" />
          </div>
          <SectionHeader title="System Health" />
          <div className="space-y-4 relative z-10">
            {[
              { label: "API Server", status: systemHealth?.server, icon: Server },
              { label: "Database", status: systemHealth?.database, icon: Database },
              { label: "Uploads Storage", status: systemHealth?.storage, icon: Cloud },
              { label: "Environment", status: systemHealth?.environment, icon: Zap },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <item.icon className="size-4 opacity-50" />
                  {item.label}
                </div>
                <div className="flex items-center gap-2">
                  <span className={cn("size-2 rounded-full", item.status === "Healthy" ? "bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.5)]" : "bg-amber-400")} />
                  <span className="text-xs font-medium text-white">{item.status}</span>
                </div>
              </div>
            ))}
            <div className="pt-4 mt-2 border-t border-white/[0.06] flex justify-between text-xs text-white/40">
              <span>Memory: {Math.round(systemHealth?.memoryUsage || 0)} MB</span>
              <span>Uptime: {Math.round((systemHealth?.uptime || 0) / 3600)}h</span>
            </div>
          </div>
        </div>

        {/* Lead Source Analytics */}
        <div className="bg-white/[0.02] border border-white/[0.05] rounded-3xl p-6">
          <SectionHeader title="Lead Sources" />
          {sourceData.length > 0 ? (
            <ResponsiveContainer width="100%" height={180}>
              <PieChart>
                <Pie data={sourceData} cx="50%" cy="50%" innerRadius={50} outerRadius={75} paddingAngle={2} dataKey="value">
                  {sourceData.map((_: any, index: number) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ background: "#0d1629", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", color: "#fff" }} />
                <Legend iconSize={8} iconType="circle" wrapperStyle={{ fontSize: "11px", color: "rgba(255,255,255,0.6)" }} />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-[180px] flex items-center justify-center text-white/30 text-sm">No source data</div>
          )}
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Activity Timeline */}
        <div className="bg-white/[0.02] border border-white/[0.05] rounded-3xl p-6">
          <SectionHeader title="Recent Activity" />
          <div className="space-y-0 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
            {recentActivity?.length > 0 ? recentActivity.slice(0, 6).map((log: any, idx: number) => (
              <div key={log._id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active py-3">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border border-white/20 bg-[#0d1629] group-[.is-active]:bg-cyan-500/20 text-cyan-400 group-[.is-active]:border-cyan-500/50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                </div>
                <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] p-3 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors transition duration-base ease-premium">
                  <div className="flex items-center justify-between mb-1">
                    <div className="font-bold text-white text-xs">{log.adminName} <span className="font-normal text-white/50">{log.action}</span></div>
                    <time className="text-[10px] font-medium text-cyan-400">{new Date(log.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</time>
                  </div>
                  <div className="text-xs text-white/70">{log.resource}</div>
                </div>
              </div>
            )) : (
              <div className="flex items-center gap-2 text-white/30 text-xs py-4 pl-8">
                <Activity className="size-4" /> No recent activity
              </div>
            )}
          </div>
        </div>

        {/* Recent Client Updates / Inquiries */}
        <div className="bg-white/[0.02] border border-white/[0.05] rounded-3xl p-6">
          <SectionHeader title="Recent Inquiries" to="/admin/inquiries" />
          <div className="space-y-2">
            {recentInquiries?.length > 0 ? recentInquiries.map((inq: any) => (
              <div key={inq._id} className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/[0.02] border border-transparent hover:border-white/[0.05] transition-all transition duration-base ease-premium">
                <div className="size-10 rounded-full bg-gradient-to-br from-blue-500/20 to-violet-600/20 border border-white/10 flex items-center justify-center text-sm font-bold text-white shrink-0">
                  {inq.fullName?.[0]?.toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-white truncate">{inq.fullName}</p>
                  <p className="text-xs text-white/40 truncate">{inq.email}</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <StatusBadge status={inq.status} />
                  <span className="text-[10px] text-white/30">{new Date(inq.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            )) : (
              <div className="flex items-center justify-center py-8 text-white/30 text-sm">
                No recent inquiries
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
