import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import { cn } from "../../utils/cn";
import { forwardRef } from "react";

export type GlassCardVariant = "project" | "feature" | "solution" | "default";

type GlassCardProps = Omit<HTMLMotionProps<"div">, "ref"> & {
  variant?: GlassCardVariant;
};

const variants = {
  default:
    "bg-[#0B1120] border-white/10 hover:border-white/20 shadow-[0_4px_24px_rgba(0,0,0,0.4)]",
  project:
    "bg-[#0B1120] border-white/10 hover:border-neon-blue/40 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,163,255,0.15)]",
  feature:
    "bg-white/[0.02] border-white/5 hover:border-neon-violet/30 hover:bg-white/[0.04] hover:shadow-[0_0_20px_rgba(139,92,246,0.1)]",
  solution:
    "bg-surface-raised border-surface-line hover:border-neon-cyan/40 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(55,230,255,0.15)]",
};

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-2xl border backdrop-blur-xl transition-all duration-300",
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

GlassCard.displayName = "GlassCard";
