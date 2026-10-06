import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import { cn } from "../../utils/cn";
import { type ReactNode, forwardRef } from "react";
import { Link } from "react-router-dom";

type CTAButtonProps = Omit<HTMLMotionProps<"button">, "ref"> & {
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ElementType;
  iconPosition?: "left" | "right";
  children?: ReactNode;
};

export const CTAButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, CTAButtonProps>(
  (
    {
      className,
      href,
      icon: Icon,
      iconPosition = "left",
      children,
      type = "button",
      ...props
    },
    ref
  ) => {
    const content = (
      <>
        {Icon && iconPosition === "left" && (
          <Icon className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110 relative z-10 transition duration-base ease-premium" />
        )}
        <span className="relative z-10 font-bold tracking-wide">{children}</span>
        {Icon && iconPosition === "right" && (
          <Icon className="size-5 transition-transform duration-300 group-hover:translate-x-1 relative z-10 transition duration-base ease-premium" />
        )}
      </>
    );

    const baseClasses = cn(
      "group relative inline-flex h-14 items-center justify-center gap-2 overflow-hidden rounded-full border border-neon-blue/50 bg-[linear-gradient(135deg,#00a3ff,#8b5cf6_58%,#b45cff)] px-8 text-base text-white shadow-[0_0_30px_rgba(0,163,255,0.5)] outline-none transition duration-base ease-premium focus-visible:ring-2 focus-visible:ring-neon-blue focus-visible:ring-offset-2 focus-visible:ring-offset-surface-base hover:shadow-[0_0_50px_rgba(0,163,255,0.8)] hover:brightness-125 hover:scale-105 disabled:pointer-events-none disabled:opacity-50",
      className
    );

    if (href) {
      const isInternal = href.startsWith("/");
      
      if (isInternal) {
        return (
          <Link
            className={baseClasses}
            to={href}
            ref={ref as React.Ref<HTMLAnchorElement>}
          >
            {/* Dynamic sweep effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] skew-x-[-30deg] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out transition duration-base ease-premium" />
            {content}
          </Link>
        );
      }
      return (
        <a
          className={baseClasses}
          href={href}
          target="_blank"
          rel="noreferrer"
          ref={ref as React.Ref<HTMLAnchorElement>}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] skew-x-[-30deg] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out transition duration-base ease-premium" />
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
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] skew-x-[-30deg] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out transition duration-base ease-premium" />
        {content}
      </motion.button>
    );
  }
);

CTAButton.displayName = "CTAButton";
