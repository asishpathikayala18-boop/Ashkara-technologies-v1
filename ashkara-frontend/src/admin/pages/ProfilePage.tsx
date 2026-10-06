import { useState } from "react";
import { useAdminAuth } from "../context/AdminAuthContext";
import { User, Shield, Mail, Key } from "lucide-react";

export function ProfilePage() {
  const { admin } = useAdminAuth();

  return (
    <div className="space-y-6 animate-in fade-in duration-500 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <User className="size-6 text-cyan-400" />
          Admin Profile
        </h1>
        <p className="text-sm text-white/50 mt-1">Manage your administrator account settings.</p>
      </div>

      <div className="bg-white/[0.02] border border-white/[0.05] rounded-3xl p-6 md:p-8 space-y-8">
        <div className="flex items-center gap-6">
          <div className="size-20 md:size-24 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center text-3xl font-bold text-cyan-400 shrink-0">
            {admin?.name?.[0]?.toUpperCase() || "A"}
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">{admin?.name}</h2>
            <div className="flex items-center gap-2 mt-2">
              <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-wider border border-cyan-500/20 flex items-center gap-1">
                <Shield className="size-3" />
                {admin?.role}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/[0.05]">
          <div className="space-y-2">
            <label className="text-xs font-bold text-white/50 uppercase tracking-wider">Full Name</label>
            <div className="flex items-center gap-3 px-4 py-3 bg-black/20 border border-white/10 rounded-xl">
              <User className="size-4 text-white/40" />
              <span className="text-white text-sm">{admin?.name}</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-xs font-bold text-white/50 uppercase tracking-wider">Email Address</label>
            <div className="flex items-center gap-3 px-4 py-3 bg-black/20 border border-white/10 rounded-xl">
              <Mail className="size-4 text-white/40" />
              <span className="text-white text-sm">{admin?.email}</span>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/[0.05]">
          <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
            <Key className="size-4 text-cyan-400" />
            Security
          </h3>
          <p className="text-sm text-white/50 mb-4">
            To change your password, please contact the system administrator or use the forgot password flow.
          </p>
          <button className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white text-sm transition-colors cursor-not-allowed opacity-50 transition duration-base ease-premium">
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
}
