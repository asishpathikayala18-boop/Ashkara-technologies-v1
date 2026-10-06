import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Shield, Loader2, Lock, Mail } from "lucide-react";
import toast from "react-hot-toast";
import { authApi } from "../services/adminApi";
import { useAdminAuth } from "../context/AdminAuthContext";

export function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAdminAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      const res = await authApi.login(form.email, form.password);
      const { token, admin } = res.data.data;
      login(token, admin);
      toast.success(`Welcome back, ${admin.name}!`);

      if (admin.mustChangePassword) {
        toast("Please change your password to continue.", { icon: "🔐", duration: 5000 });
      }
      navigate("/admin/dashboard");
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-[0_0_40px_rgba(34,211,238,0.4)] mb-6">
          <Shield className="size-8 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-white mb-1">AshKara Control Center</h1>
        <p className="text-sm text-white/40">Secure admin access only</p>
      </div>

      {/* Card */}
      <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 shadow-[0_25px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-white/50 uppercase tracking-wider">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-white/30" />
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="admin@ashkara.tech"
                autoComplete="email"
                className="w-full pl-11 pr-4 py-3 bg-white/[0.05] border border-white/[0.08] rounded-xl text-white placeholder-white/20 text-sm outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/10 transition-all transition duration-base ease-premium"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-white/50 uppercase tracking-wider">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-white/30" />
              <input
                type={showPassword ? "text" : "password"}
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                placeholder="••••••••••••"
                autoComplete="current-password"
                className="w-full pl-11 pr-12 py-3 bg-white/[0.05] border border-white/[0.08] rounded-xl text-white placeholder-white/20 text-sm outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/10 transition-all transition duration-base ease-premium"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/70 transition-colors transition duration-base ease-premium"
              >
                {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] disabled:opacity-60 disabled:cursor-not-allowed mt-2 transition duration-base ease-premium"
          >
            {loading ? <Loader2 className="size-4 animate-spin" /> : <Shield className="size-4" />}
            {loading ? "Authenticating..." : "Sign In to Control Center"}
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-white/[0.06] text-center">
          <p className="text-xs text-white/20">
            AshKara Technologies — Restricted Access
          </p>
        </div>
      </div>
    </div>
  );
}
