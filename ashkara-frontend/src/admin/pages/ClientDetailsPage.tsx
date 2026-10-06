import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, User, Phone, Mail, MapPin, Building, Briefcase, Calendar } from "lucide-react";
// import { clientsApi } from "../services/adminApi";

export function ClientDetailsPage() {
  const { id } = useParams();
  const [client, setClient] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   clientsApi.getById(id!).then(res => setClient(res.data.data)).finally(() => setLoading(false));
  // }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="size-10 border-2 border-white/10 border-t-cyan-400 rounded-full animate-spin" />
      </div>
    );
  }

  // if (!client) return <div className="p-8 text-white text-center">Client not found</div>;

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <Link to="/admin/clients" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors transition duration-base ease-premium">
        <ArrowLeft className="size-4" /> Back to Clients
      </Link>

      {/* Client Overview Card */}
      <div className="bg-white/[0.02] border border-white/[0.05] p-6 md:p-8 rounded-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-bl-full pointer-events-none" />
        
        <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
          <div className="size-24 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center text-3xl font-bold text-cyan-400 shrink-0">
            {client?.fullName?.[0]?.toUpperCase() || "C"}
          </div>

          <div className="flex-1 space-y-4">
            <div>
              <h1 className="text-3xl font-bold text-white">{client?.fullName || "Client Profile"}</h1>
              <p className="text-white/50 mt-1 flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase tracking-wider border border-emerald-500/20">
                  {client?.status || "Active"}
                </span>
                • Added {new Date(client?.createdAt || Date.now()).toLocaleDateString()}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/[0.05]">
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Mail className="size-4 text-cyan-400" />
                {client?.email || "No email"}
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Phone className="size-4 text-cyan-400" />
                {client?.phone || "No phone"}
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Building className="size-4 text-cyan-400" />
                {client?.college || "No college specified"}
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <MapPin className="size-4 text-cyan-400" />
                {client?.location || "No location specified"}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Placeholder for tabs or extra details */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white/[0.02] border border-white/[0.05] p-6 rounded-3xl">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <Briefcase className="size-4 text-cyan-400" />
              Related Projects
            </h2>
            <div className="p-8 text-center text-white/30 text-sm border border-dashed border-white/10 rounded-2xl">
              No projects linked to this client yet.
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white/[0.02] border border-white/[0.05] p-6 rounded-3xl">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Notes</h2>
            <p className="text-sm text-white/70 whitespace-pre-wrap">
              {client?.notes || "No notes available for this client."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
