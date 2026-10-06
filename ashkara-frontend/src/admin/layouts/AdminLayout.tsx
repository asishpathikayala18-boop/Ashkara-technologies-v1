import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AdminSidebar } from "../components/AdminSidebar";
import { AdminTopBar } from "../components/AdminTopBar";
import { cn } from "../../utils/cn";

export function AdminLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-[#040810] text-white antialiased">
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#0d1629",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "12px",
            fontSize: "13px",
          },
          success: { iconTheme: { primary: "#22d3ee", secondary: "#040810" } },
          error: { iconTheme: { primary: "#f87171", secondary: "#040810" } },
        }}
      />
      <AdminSidebar
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed((v) => !v)}
      />
      <AdminTopBar sidebarCollapsed={sidebarCollapsed} />
      <main
        className={cn(
          "transition-all duration-300 pt-16 min-h-screen",
          sidebarCollapsed ? "pl-16" : "pl-60"
        )}
      >
        <div className="p-6 lg:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
