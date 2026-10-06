import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export function AdminAuthLayout() {
  return (
    <div className="min-h-screen bg-[#040810] text-white antialiased flex items-center justify-center p-4">
      <Toaster position="top-center" toastOptions={{
        style: { background: "#0d1629", color: "#fff", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px" }
      }} />
      {/* Background Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />
      {/* Ambient glow */}
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="relative z-10 w-full">
        <Outlet />
      </div>
    </div>
  );
}
