import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import { type ReactNode } from "react";

type GlowBadgeProps = {
  children: ReactNode;
  icon?: React.ElementType;
  className?: string;
};

export function GlowBadge({ children, icon: Icon, className }: GlowBadgeProps) {
  return (
    <motion.div
      className={cn(
        "group relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-white shadow-glass backdrop-blur-md transition-all duration-300 hover:border-neon-blue/30 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(0,163,255,0.2)]",
        className
      )}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-blue/0 via-neon-cyan/10 to-neon-violet/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 transition duration-base ease-premium" />
      
      {Icon && (
        <Icon className="size-4 text-neon-cyan transition-transform duration-300 group-hover:scale-110 group-hover:text-neon-blue transition duration-base ease-premium" />
      )}
      
      <span className="relative z-10 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent group-hover:from-white group-hover:to-white transition-all transition duration-base ease-premium">
        {children}
      </span>
    </motion.div>
  );
}
