import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import { type ReactNode } from "react";
import { GlassCard } from "./glass-card";

type StatCardProps = {
  value: ReactNode;
  label: string;
  icon?: React.ElementType;
  className?: string;
  glowColor?: "cyan" | "blue" | "violet";
};

const textColors = {
  cyan: "text-neon-cyan drop-shadow-[0_0_10px_rgba(55,230,255,0.5)]",
  blue: "text-neon-blue drop-shadow-[0_0_10px_rgba(0,163,255,0.5)]",
  violet: "text-neon-violet drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]",
};

export function StatCard({ value, label, icon: Icon, className, glowColor = "cyan" }: StatCardProps) {
  return (
    <GlassCard variant="feature" className={cn("p-6 text-center group", className)}>
      {Icon && (
        <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300 transition duration-base ease-premium">
          <Icon className={cn("size-6", textColors[glowColor])} />
        </div>
      )}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={cn("text-4xl font-extrabold mb-2 tracking-tight", textColors[glowColor])}
      >
        {value}
      </motion.div>
      <div className="text-sm font-semibold text-white/60 uppercase tracking-wider">
        {label}
      </div>
    </GlassCard>
  );
}
