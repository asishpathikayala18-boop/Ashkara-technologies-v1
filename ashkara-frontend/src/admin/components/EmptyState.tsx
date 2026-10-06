import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  actionTo?: string;
  onAction?: () => void;
  className?: string;
}

export function EmptyState({ icon: Icon, title, description, actionLabel, actionTo, onAction, className }: EmptyStateProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center p-12 text-center border border-dashed border-white/10 rounded-3xl bg-white/[0.01]", className)}>
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full" />
        <div className="relative size-16 bg-[#0d1629] border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl">
          <Icon className="size-8 text-cyan-400" />
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-white/50 max-w-md mb-8 leading-relaxed">
        {description}
      </p>

      {(actionLabel && actionTo) ? (
        <Link 
          to={actionTo}
          className="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-[#070d1a] font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(34,211,238,0.2)] transition duration-base ease-premium"
        >
          {actionLabel}
        </Link>
      ) : (actionLabel && onAction) ? (
        <button
          onClick={onAction}
          className="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-[#070d1a] font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(34,211,238,0.2)] transition duration-base ease-premium"
        >
          {actionLabel}
        </button>
      ) : null}
    </div>
  );
}
