import { useState, useEffect } from "react";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard, FolderOpen, Tags, MessageSquare, Image,
  Settings, LogOut, ChevronLeft, Menu, Shield, Activity, Search,
  Bell, ChevronRight, Users,
} from "lucide-react";
import { useAdminAuth } from "../context/AdminAuthContext";
import { cn } from "../../utils/cn";

const navItems = [
  { to: "/admin/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/admin/clients", icon: Users, label: "Clients" },
  { to: "/admin/projects", icon: FolderOpen, label: "Projects" },
  { to: "/admin/project-blueprints", icon: FolderOpen, label: "Blueprints" },
  { to: "/admin/categories", icon: Tags, label: "Categories" },
  { to: "/admin/inquiries", icon: MessageSquare, label: "Inquiries" },
  { to: "/admin/media", icon: Image, label: "Media" },
  { to: "/admin/analytics", icon: Activity, label: "Analytics" },
  { to: "/admin/settings", icon: Settings, label: "Settings" },
];

export function AdminSidebar({ collapsed, onToggle }: { collapsed: boolean; onToggle: () => void }) {
  const { admin, logout } = useAdminAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 h-screen z-50 flex flex-col transition-all duration-300 ease-in-out",
        "bg-[#070d1a]/95 backdrop-blur-xl border-r border-white/[0.06]",
        collapsed ? "w-16" : "w-60"
      )}
    >
      {/* Logo */}
      <div className={cn(
        "flex items-center gap-3 px-4 h-16 border-b border-white/[0.06] shrink-0",
        collapsed ? "justify-center" : "justify-between"
      )}>
        <div className="flex items-center gap-3 min-w-0">
          <div className="size-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(34,211,238,0.3)]">
            <Shield className="size-4 text-white" />
          </div>
          {!collapsed && (
            <div className="min-w-0">
              <p className="text-xs font-bold text-white leading-tight truncate">AshKara</p>
              <p className="text-[10px] text-cyan-400 font-medium tracking-wider uppercase">Control Center</p>
            </div>
          )}
        </div>
        <button
          onClick={onToggle}
          className="size-7 rounded-md hover:bg-white/[0.06] flex items-center justify-center text-white/40 hover:text-white transition-colors shrink-0 transition duration-base ease-premium"
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <ChevronLeft className={cn("size-4 transition-transform", collapsed && "rotate-180")} />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-4 space-y-0.5 px-2">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            title={collapsed ? label : undefined}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group relative",
                collapsed ? "justify-center" : "",
                isActive
                  ? "bg-cyan-500/10 text-cyan-400 shadow-[inset_0_0_0_1px_rgba(34,211,238,0.2)]"
                  : "text-white/50 hover:text-white hover:bg-white/[0.05]"
              )
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-cyan-400 rounded-r-full" />
                )}
                <Icon className={cn("size-4 shrink-0", isActive ? "text-cyan-400" : "")} />
                {!collapsed && <span>{label}</span>}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Admin profile */}
      <div className={cn("px-2 py-3 border-t border-white/[0.06] shrink-0 space-y-1")}>
        {!collapsed && admin && (
          <Link to="/admin/profile" className="block px-3 py-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] transition-colors mb-2 group transition duration-base ease-premium">
            <p className="text-xs font-semibold text-white truncate group-hover:text-cyan-400 transition-colors transition duration-base ease-premium">{admin.name}</p>
            <p className="text-[10px] text-white/40 truncate">{admin.email}</p>
            <span className="inline-block mt-1 px-1.5 py-0.5 rounded text-[9px] font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 tracking-wider">
              {admin.role}
            </span>
          </Link>
        )}
        <button
          onClick={handleLogout}
          title="Logout"
          className={cn(
            "flex items-center gap-3 px-3 py-2 rounded-lg w-full text-sm font-medium text-red-400/70 hover:text-red-400 hover:bg-red-500/10 transition-all duration-200",
            collapsed ? "justify-center" : ""
          )}
        >
          <LogOut className="size-4 shrink-0" />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
}
