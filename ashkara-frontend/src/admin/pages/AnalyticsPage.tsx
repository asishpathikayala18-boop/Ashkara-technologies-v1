import { useEffect, useState, useCallback } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { analyticsApi } from "../services/adminApi";
import { Activity, Clock } from "lucide-react";
import toast from "react-hot-toast";

export function AnalyticsPage() {
  const [data, setData] = useState<any>(null);
  const [activityData, setActivityData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      analyticsApi.getDashboard(),
      analyticsApi.getActivity({ limit: 30 }),
    ])
      .then(([dash, activity]) => {
        setData(dash.data.data);
        setActivityData(activity.data.data.logs || []);
      })
      .catch(() => toast.error("Failed to load analytics"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="size-10 border-2 border-white/10 border-t-cyan-400 rounded-full animate-spin" />
      </div>
    );
  }

  const trendData = data?.charts?.inquiryTrend?.map((t: any) => ({ date: t._id.slice(5), inquiries: t.count })) || [];
  const catData = data?.charts?.inquiriesByCategory?.map((c: any) => ({ name: c._id || "Other", count: c.count })) || [];
  const statusData = data?.charts?.projectsByStatus?.map((p: any) => ({ name: p._id, count: p.count })) || [];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-xl font-bold text-white">Analytics</h1>
        <p className="text-sm text-white/40 mt-0.5">Platform performance and insights</p>
      </div>

      {/* Charts Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
          <h3 className="text-sm font-bold text-white/70 uppercase tracking-wider mb-4">Inquiry Trend (30 Days)</h3>
          {trendData.length > 0 ? (
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={trendData}>
                <XAxis dataKey="date" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: "#0d1629", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", color: "#fff" }} />
                <Line type="monotone" dataKey="inquiries" stroke="#22d3ee" strokeWidth={2} dot={false} activeDot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          ) : <div className="h-[200px] flex items-center justify-center text-white/30 text-sm">No data yet</div>}
        </div>

        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
          <h3 className="text-sm font-bold text-white/70 uppercase tracking-wider mb-4">Projects by Status</h3>
          {statusData.length > 0 ? (
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={statusData}>
                <XAxis dataKey="name" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: "#0d1629", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", color: "#fff" }} />
                <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          ) : <div className="h-[200px] flex items-center justify-center text-white/30 text-sm">No projects yet</div>}
        </div>
      </div>

      {/* Inquiry by Category */}
      {catData.length > 0 && (
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
          <h3 className="text-sm font-bold text-white/70 uppercase tracking-wider mb-4">Inquiries by Category</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={catData} layout="vertical">
              <XAxis type="number" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10 }} axisLine={false} tickLine={false} />
              <YAxis type="category" dataKey="name" tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 10 }} axisLine={false} tickLine={false} width={120} />
              <Tooltip contentStyle={{ background: "#0d1629", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", color: "#fff" }} />
              <Bar dataKey="count" fill="#a855f7" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Full Activity Log */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Activity className="size-4 text-cyan-400" />
          <h3 className="text-sm font-bold text-white/70 uppercase tracking-wider">Activity Log</h3>
        </div>
        <div className="space-y-2">
          {activityData.length > 0 ? activityData.map((log: any) => (
            <div key={log._id} className="flex items-start gap-4 py-2.5 border-b border-white/[0.04] last:border-0">
              <div className="size-7 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center text-xs font-bold text-cyan-400 shrink-0">
                {log.adminName?.[0]}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-white/70">
                  <span className="font-semibold text-white">{log.adminName}</span>{" "}
                  <span className="text-cyan-400">{log.action}</span>{" "}
                  <span className="text-white/50">{log.resource}</span>
                  {log.details && <span className="text-white/30"> — {log.details}</span>}
                </p>
                <p className="text-xs text-white/20 mt-0.5 flex items-center gap-1">
                  <Clock className="size-3" />
                  {new Date(log.createdAt).toLocaleString()}
                </p>
              </div>
            </div>
          )) : (
            <p className="text-sm text-white/30 py-4 text-center">No activity recorded yet</p>
          )}
        </div>
      </div>
    </div>
  );
}
