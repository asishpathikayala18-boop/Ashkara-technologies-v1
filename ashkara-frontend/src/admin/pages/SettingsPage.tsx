import { useState, useEffect, useCallback } from "react";
import { Save, Loader2, Shield, Lock, Globe, Mail, RefreshCw } from "lucide-react";
import toast from "react-hot-toast";
import { settingsApi, authApi } from "../services/adminApi";
import { useAdminAuth } from "../context/AdminAuthContext";
import { cn } from "../../utils/cn";

const TABS = ["General", "SEO", "Contact & Social", "Change Password"];

export function SettingsPage() {
  const { admin, updateAdmin } = useAdminAuth();
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [settings, setSettings] = useState<Record<string, string>>({});
  const [pwForm, setPwForm] = useState({ currentPassword: "", newPassword: "", confirmPassword: "" });

  useEffect(() => {
    settingsApi.getAll()
      .then((res) => setSettings(res.data.data || {}))
      .catch(() => toast.error("Failed to load settings"))
      .finally(() => setLoading(false));
  }, []);

  const handleSaveSettings = async (group: Record<string, string>) => {
    setSaving(true);
    try {
      const res = await settingsApi.update(group);
      setSettings((prev) => ({ ...prev, ...res.data.data }));
      toast.success("Settings saved!");
    } catch { toast.error("Save failed"); }
    finally { setSaving(false); }
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (pwForm.newPassword !== pwForm.confirmPassword) { toast.error("Passwords don't match"); return; }
    if (pwForm.newPassword.length < 8) { toast.error("Password must be at least 8 characters"); return; }
    setSaving(true);
    try {
      await authApi.changePassword(pwForm.currentPassword, pwForm.newPassword);
      updateAdmin({ mustChangePassword: false });
      toast.success("Password changed successfully!");
      setPwForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
    } catch (err: any) { toast.error(err.response?.data?.message || "Password change failed"); }
    finally { setSaving(false); }
  };

  const inputClass = "w-full px-4 py-2.5 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white text-sm placeholder-white/20 outline-none focus:border-cyan-500/40 focus:ring-2 focus:ring-cyan-500/10 transition-all";
  const labelClass = "text-xs font-semibold text-white/50 uppercase tracking-wider block mb-2";

  const setSetting = (key: string, value: string) => setSettings((prev) => ({ ...prev, [key]: value }));

  return (
    <div className="space-y-6 max-w-3xl">
      {/* Header */}
      <div>
        <h1 className="text-xl font-bold text-white">Settings</h1>
        <p className="text-sm text-white/40 mt-0.5">Manage your platform configuration</p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-xl p-1">
        {TABS.map((tab, i) => (
          <button key={tab} onClick={() => setActiveTab(i)}
            className={cn("flex-1 px-3 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap text-center", activeTab === i ? "bg-cyan-500/20 text-cyan-400" : "text-white/40 hover:text-white")}
          >
            {tab}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-48"><div className="size-8 border-2 border-white/10 border-t-cyan-400 rounded-full animate-spin" /></div>
      ) : (
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 space-y-6">
          {/* General */}
          {activeTab === 0 && (
            <>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.06]">
                <Globe className="size-5 text-cyan-400" />
                <div>
                  <h2 className="text-sm font-bold text-white">General Settings</h2>
                  <p className="text-xs text-white/40">Basic company and platform information</p>
                </div>
              </div>
              <div className="space-y-4">
                <div><label className={labelClass}>Company Name</label><input value={settings.companyName || ""} onChange={(e) => setSetting("companyName", e.target.value)} placeholder="AshKara Technologies" className={inputClass} /></div>
                <div className="grid grid-cols-2 gap-4">
                  <div><label className={labelClass}>Phone</label><input value={settings.phone || ""} onChange={(e) => setSetting("phone", e.target.value)} placeholder="+91 XXXXXXXXXX" className={inputClass} /></div>
                  <div><label className={labelClass}>WhatsApp URL</label><input value={settings.whatsapp || ""} onChange={(e) => setSetting("whatsapp", e.target.value)} placeholder="https://wa.me/..." className={inputClass} /></div>
                </div>
              </div>
              <button onClick={() => handleSaveSettings({ companyName: settings.companyName, phone: settings.phone, whatsapp: settings.whatsapp })} disabled={saving} className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-xl disabled:opacity-60 transition-all">
                {saving ? <Loader2 className="size-4 animate-spin" /> : <Save className="size-4" />} Save General Settings
              </button>
            </>
          )}

          {/* SEO */}
          {activeTab === 1 && (
            <>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.06]">
                <Globe className="size-5 text-blue-400" />
                <div>
                  <h2 className="text-sm font-bold text-white">SEO Settings</h2>
                  <p className="text-xs text-white/40">Search engine optimization metadata</p>
                </div>
              </div>
              <div className="space-y-4">
                <div><label className={labelClass}>SEO Title</label><input value={settings.seoTitle || ""} onChange={(e) => setSetting("seoTitle", e.target.value)} placeholder="AshKara Technologies — Engineering Project Development" className={inputClass} /></div>
                <div><label className={labelClass}>SEO Description</label><textarea value={settings.seoDescription || ""} onChange={(e) => setSetting("seoDescription", e.target.value)} rows={3} placeholder="Meta description for search engines..." className={inputClass + " resize-none"} /></div>
                <div><label className={labelClass}>SEO Keywords (comma-separated)</label><input value={settings.seoKeywords || ""} onChange={(e) => setSetting("seoKeywords", e.target.value)} placeholder="engineering projects, final year, MERN stack..." className={inputClass} /></div>
              </div>
              <button onClick={() => handleSaveSettings({ seoTitle: settings.seoTitle, seoDescription: settings.seoDescription, seoKeywords: settings.seoKeywords })} disabled={saving} className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-xl disabled:opacity-60 transition-all">
                {saving ? <Loader2 className="size-4 animate-spin" /> : <Save className="size-4" />} Save SEO Settings
              </button>
            </>
          )}

          {/* Contact & Social */}
          {activeTab === 2 && (
            <>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.06]">
                <Mail className="size-5 text-violet-400" />
                <div>
                  <h2 className="text-sm font-bold text-white">Contact & Social</h2>
                  <p className="text-xs text-white/40">Contact information and social media links</p>
                </div>
              </div>
              <div className="space-y-4">
                <div><label className={labelClass}>Public Email</label><input value={settings.email || ""} onChange={(e) => setSetting("email", e.target.value)} placeholder="contact@ashkara.tech" className={inputClass} /></div>
                <div><label className={labelClass}>Instagram URL</label><input value={settings.instagram || ""} onChange={(e) => setSetting("instagram", e.target.value)} placeholder="https://instagram.com/..." className={inputClass} /></div>
                <div><label className={labelClass}>LinkedIn URL</label><input value={settings.linkedin || ""} onChange={(e) => setSetting("linkedin", e.target.value)} placeholder="https://linkedin.com/..." className={inputClass} /></div>
                <div><label className={labelClass}>GitHub URL</label><input value={settings.github || ""} onChange={(e) => setSetting("github", e.target.value)} placeholder="https://github.com/..." className={inputClass} /></div>
              </div>
              <button onClick={() => handleSaveSettings({ email: settings.email, instagram: settings.instagram, linkedin: settings.linkedin, github: settings.github })} disabled={saving} className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-xl disabled:opacity-60 transition-all">
                {saving ? <Loader2 className="size-4 animate-spin" /> : <Save className="size-4" />} Save Contact Settings
              </button>
            </>
          )}

          {/* Change Password */}
          {activeTab === 3 && (
            <>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.06]">
                <Lock className="size-5 text-amber-400" />
                <div>
                  <h2 className="text-sm font-bold text-white">Change Password</h2>
                  <p className="text-xs text-white/40">Update your admin account password</p>
                </div>
              </div>

              {admin?.mustChangePassword && (
                <div className="flex items-center gap-3 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl mb-4">
                  <Shield className="size-5 text-amber-400 shrink-0" />
                  <p className="text-sm text-amber-400">You must change your password before using the platform.</p>
                </div>
              )}

              <form onSubmit={handleChangePassword} className="space-y-4">
                <div><label className={labelClass}>Current Password</label><input type="password" value={pwForm.currentPassword} onChange={(e) => setPwForm({ ...pwForm, currentPassword: e.target.value })} placeholder="••••••••" className={inputClass} /></div>
                <div><label className={labelClass}>New Password</label><input type="password" value={pwForm.newPassword} onChange={(e) => setPwForm({ ...pwForm, newPassword: e.target.value })} placeholder="••••••••" className={inputClass} /></div>
                <div><label className={labelClass}>Confirm New Password</label><input type="password" value={pwForm.confirmPassword} onChange={(e) => setPwForm({ ...pwForm, confirmPassword: e.target.value })} placeholder="••••••••" className={inputClass} /></div>
                <button type="submit" disabled={saving} className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-sm font-semibold rounded-xl disabled:opacity-60 transition-all">
                  {saving ? <Loader2 className="size-4 animate-spin" /> : <Lock className="size-4" />} Change Password
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </div>
  );
}
