import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Users, Plus, Search, Filter } from "lucide-react";
import { EmptyState } from "../components/EmptyState";
// import { clientsApi } from "../services/adminApi"; 

export function ClientsPage() {
  const [clients, setClients] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   setLoading(true);
  //   clientsApi.getAll().then(res => setClients(res.data.data)).finally(() => setLoading(false));
  // }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="size-10 border-2 border-white/10 border-t-cyan-400 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <Users className="size-6 text-cyan-400" />
            Clients
          </h1>
          <p className="text-sm text-white/50 mt-1">Manage all client relationships and profiles.</p>
        </div>
        <Link 
          to="/admin/clients/new"
          className="flex items-center justify-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] transition duration-base ease-premium"
        >
          <Plus className="size-4" /> Add Client
        </Link>
      </div>

      <div className="flex items-center gap-4 bg-white/[0.02] p-4 rounded-2xl border border-white/[0.05]">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-white/40" />
          <input 
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search clients by name, email, or college..."
            className="w-full pl-10 pr-4 py-2 bg-black/20 border border-white/10 rounded-xl text-white text-sm outline-none focus:border-cyan-500/50 transition-colors transition duration-base ease-premium"
          />
        </div>
        <button className="p-2 border border-white/10 rounded-xl hover:bg-white/5 text-white/70 transition-colors transition duration-base ease-premium">
          <Filter className="size-4" />
        </button>
      </div>

      {clients.length === 0 ? (
        <EmptyState
          icon={Users}
          title="No Clients Found"
          description="You haven't added any clients yet. Start building your CRM by adding your first client."
          actionLabel="Add Client"
          actionTo="/admin/clients/new"
        />
      ) : (
        <div className="bg-white/[0.02] border border-white/[0.05] rounded-3xl overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/[0.02] border-b border-white/[0.05] text-white/50">
              <tr>
                <th className="p-4 font-medium">Client</th>
                <th className="p-4 font-medium hidden md:table-cell">Contact</th>
                <th className="p-4 font-medium hidden lg:table-cell">Institution</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.02]">
              {clients.map(client => (
                <tr key={client._id} className="hover:bg-white/[0.02] transition-colors transition duration-base ease-premium">
                  <td className="p-4">
                    <div className="font-bold text-white">{client.fullName}</div>
                    <div className="text-xs text-white/40">{client.source}</div>
                  </td>
                  <td className="p-4 hidden md:table-cell">
                    <div className="text-white/80">{client.email}</div>
                    <div className="text-xs text-white/40">{client.phone}</div>
                  </td>
                  <td className="p-4 hidden lg:table-cell">
                    <div className="text-white/80">{client.college}</div>
                    <div className="text-xs text-white/40">{client.branch} - Year {client.year}</div>
                  </td>
                  <td className="p-4">
                    <span className="px-2 py-1 rounded bg-cyan-500/10 text-cyan-400 text-[10px] font-bold uppercase tracking-wider border border-cyan-500/20">
                      {client.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <Link to={`/admin/clients/${client._id}`} className="text-cyan-400 hover:text-cyan-300 text-xs font-medium transition duration-base ease-premium">
                      View Profile
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
