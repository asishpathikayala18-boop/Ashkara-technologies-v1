import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import { cn } from "../../utils/cn";
import { type ReactNode, forwardRef } from "react";
import { Link } from "react-router-dom";

export type GlowButtonVariant = "primary" | "secondary" | "outline" | "icon";

type GlowButtonProps = Omit<HTMLMotionProps<"button">, "ref"> & {
  variant?: GlowButtonVariant;
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ElementType;
  iconPosition?: "left" | "right";
  children?: ReactNode;
};

const variants = {
  primary:
    "border-neon-blue/40 bg-[linear-gradient(135deg,#00a3ff,#8b5cf6_58%,#b45cff)] text-white shadow-[0_0_15px_rgba(0,163,255,0.3)] hover:shadow-[0_0_25px_rgba(0,163,255,0.5)] hover:brightness-110",
  secondary:
    "border-neon-violet/40 bg-white/[0.07] text-white shadow-[0_4px_12px_rgba(0,0,0,0.5)] backdrop-blur-xl hover:border-neon-violet/60 hover:bg-white/[0.12] hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]",
  outline:
    "border-neon-cyan/40 bg-white/[0.03] text-white shadow-[0_4px_12px_rgba(0,0,0,0.5)] backdrop-blur-xl hover:border-neon-cyan/60 hover:bg-white/[0.08] hover:shadow-[0_0_15px_rgba(55,230,255,0.2)]",
  icon:
    "size-10 rounded-full border border-white/10 bg-white/5 text-white shadow-[0_4px_12px_rgba(0,0,0,0.5)] backdrop-blur-xl hover:bg-white/10 hover:border-white/20 focus-visible:ring-neon-blue",
};

export const GlowButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, GlowButtonProps>(
  (
    {
      className,
      variant = "primary",
      href,
      target,
      rel,
      icon: Icon,
      iconPosition = "left",
      children,
      type = "button",
      ...props
    },
    ref
  ) => {
    const isIconOnly = variant === "icon";

    const content = (
      <>
        {Icon && iconPosition === "left" && (
          <Icon className={cn("size-4 transition-transform duration-300", !isIconOnly && "group-hover:-translate-y-0.5 group-hover:scale-110")} />
        )}
        {!isIconOnly && <span className="relative z-10">{children}</span>}
        {Icon && iconPosition === "right" && (
          <Icon className="size-4 transition-transform duration-300 group-hover:translate-x-1 transition duration-base ease-premium" />
        )}
      </>
    );

    const baseClasses = cn(
      "group relative inline-flex items-center justify-center overflow-hidden rounded-sm border outline-none transition duration-base ease-premium focus-visible:ring-2 focus-visible:ring-neon-blue focus-visible:ring-offset-2 focus-visible:ring-offset-surface-base disabled:pointer-events-none disabled:opacity-50",
      !isIconOnly && "h-[3.25rem] px-6 text-sm font-semibold gap-2 sm:min-w-44",
      variants[variant],
      className
    );

    if (href) {
      const isExternal = href.startsWith("http");
      if (!isExternal) {
        return (
          <Link to={href} className={baseClasses} ref={ref as React.Ref<HTMLAnchorElement>}>
            {content}
          </Link>
        );
      }
      return (
        <a className={baseClasses} href={href} target={target} rel={rel} ref={ref as React.Ref<HTMLAnchorElement>}>
          {content}
        </a>
      );
    }

    return (
      <motion.button
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        className={baseClasses}
        type={type}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...props}
      >
        {content}
      </motion.button>
    );
  }
);

GlowButton.displayName = "GlowButton";
