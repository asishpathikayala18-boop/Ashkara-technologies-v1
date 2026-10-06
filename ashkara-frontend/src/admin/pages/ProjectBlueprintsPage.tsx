import { useState } from "react";
import { Plus, FileText, Loader2 } from "lucide-react";
import { useProjectBlueprints } from "../hooks/useProjectBlueprints";

export function ProjectBlueprintsPage() {
  const { data: blueprints, isLoading } = useProjectBlueprints();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Project Blueprints</h1>
          <p className="text-sm text-white/40 mt-1">Manage project proposals and blueprints.</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 text-cyan-400 font-medium rounded-xl border border-cyan-500/20 hover:bg-cyan-500/20 transition-all transition duration-base ease-premium"
        >
          <Plus className="size-4" /> New Blueprint
        </button>
      </div>

      {/* List */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden">
        {isLoading ? (
          <div className="p-8 flex justify-center items-center">
            <Loader2 className="size-8 text-cyan-400 animate-spin" />
          </div>
        ) : blueprints?.length === 0 ? (
          <div className="p-8 text-center text-white/40">
            <FileText className="size-12 mx-auto mb-4 opacity-20" />
            <p>No project blueprints found.</p>
            <p className="text-sm mt-1">Create your first blueprint to get started.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/[0.02] border-b border-white/[0.06] text-white/40 uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="px-6 py-4 font-bold">Title</th>
                  <th className="px-6 py-4 font-bold">Client</th>
                  <th className="px-6 py-4 font-bold">Version</th>
                  <th className="px-6 py-4 font-bold">Status</th>
                  <th className="px-6 py-4 font-bold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {blueprints?.map((bp: any) => (
                  <tr key={bp._id} className="hover:bg-white/[0.02] transition-colors transition duration-base ease-premium">
                    <td className="px-6 py-4 font-medium text-white">{bp.title}</td>
                    <td className="px-6 py-4 text-white/60">{bp.client?.fullName || 'Unknown Client'}</td>
                    <td className="px-6 py-4 text-white/60">v{bp.version}</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold border uppercase tracking-wider bg-white/5 text-white/40 border-white/10">
                        {bp.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      {/* Action buttons would go here */}
                      <button className="text-cyan-400 hover:text-cyan-300 text-xs font-medium transition duration-base ease-premium">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Placeholder Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-[#0a1122] border border-white/10 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl">
            <div className="p-6 border-b border-white/10">
              <h2 className="text-lg font-bold text-white">Create Project Blueprint</h2>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-sm text-white/60">Blueprint creation form will be implemented here.</p>
              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-white/60 hover:text-white hover:bg-white/5 rounded-xl transition-colors transition duration-base ease-premium"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
