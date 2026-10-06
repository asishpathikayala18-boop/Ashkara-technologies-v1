import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { Size, Variant } from "../types/component";
import { cn } from "../utils/cn";

type ButtonProps = HTMLMotionProps<"button"> & {
  variant?: Extract<Variant, "primary" | "secondary" | "ghost">;
  size?: Size;
};

const variants = {
  primary:
    "border-transparent bg-[linear-gradient(135deg,#00a3ff,#8b5cf6)] text-white shadow-button hover:shadow-glow",
  secondary:
    "border-surface-line bg-surface-raised text-ink-50 hover:border-surface-strong hover:bg-surface-hover",
  ghost:
    "border-transparent bg-transparent text-ink-200 hover:bg-white/10 hover:text-white",
};

const sizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-6 text-base",
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-sm border font-medium outline-none transition duration-base ease-premium focus-visible:ring-2 focus-visible:ring-neon-blue focus-visible:ring-offset-2 focus-visible:ring-offset-surface-base disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className,
      )}
      type={type}
      {...props}
    />
  );
}
