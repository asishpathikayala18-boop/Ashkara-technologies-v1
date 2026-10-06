import { motion } from "framer-motion";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../utils/cn";

type CardProps = ComponentPropsWithoutRef<typeof motion.div> & {
  variant?: "glass" | "solid" | "minimal";
};

const variants = {
  glass: "border-surface-line bg-white/[0.07] shadow-glass backdrop-blur-xl",
  solid: "border-surface-line bg-ink-900/90 shadow-glass",
  minimal: "border-surface-line bg-transparent",
};

export function Card({ className, variant = "glass", ...props }: CardProps) {
  return (
    <motion.div
      className={cn("rounded-md border transition duration-base ease-premium", variants[variant], className)}
      {...props}
    />
  );
}
