import { cn } from "../../utils/cn";
import { type ReactNode, forwardRef } from "react";

export interface GlowIconProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ElementType;
  children?: ReactNode; // For custom SVG children
  isSelected?: boolean;
  glowColor?: "cyan" | "blue" | "violet";
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeClasses = {
  sm: "size-10 [&>svg]:size-5",
  md: "size-14 [&>svg]:size-6",
  lg: "size-20 [&>svg]:size-8",
  xl: "size-24 [&>svg]:size-10",
};

const glowClasses = {
  cyan: "group-hover:shadow-[0_0_20px_rgba(55,230,255,0.3)] data-[selected=true]:shadow-[0_0_30px_rgba(55,230,255,0.4)]",
  blue: "group-hover:shadow-[0_0_20px_rgba(0,163,255,0.3)] data-[selected=true]:shadow-[0_0_30px_rgba(0,163,255,0.4)]",
  violet: "group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] data-[selected=true]:shadow-[0_0_30px_rgba(139,92,246,0.4)]",
};

const borderClasses = {
  cyan: "group-hover:border-neon-cyan/50 data-[selected=true]:border-neon-cyan/70",
  blue: "group-hover:border-neon-blue/50 data-[selected=true]:border-neon-blue/70",
  violet: "group-hover:border-neon-violet/50 data-[selected=true]:border-neon-violet/70",
};

export const GlowIcon = forwardRef<HTMLDivElement, GlowIconProps>(
  (
    {
      className,
      icon: Icon,
      children,
      isSelected = false,
      glowColor = "cyan",
      size = "md",
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        data-selected={isSelected}
        className={cn(
          "group relative flex items-center justify-center rounded-full bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-500 ease-premium hover:scale-110",
          sizeClasses[size],
          glowClasses[glowColor],
          borderClasses[glowColor],
          isSelected && "bg-white/10 scale-105",
          className
        )}
        {...props}
      >
        {/* Subtle inner radial glow */}
        <div className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100 data-[selected=true]:opacity-100 transition duration-base ease-premium" 
             style={{
               background: `radial-gradient(circle at center, ${
                 glowColor === "cyan" ? "rgba(55,230,255,0.15)" :
                 glowColor === "blue" ? "rgba(0,163,255,0.15)" :
                 "rgba(139,92,246,0.15)"
               } 0%, transparent 70%)`
             }} 
        />
        
        {/* Content */}
        <div className="relative z-10 text-white flex items-center justify-center">
          {Icon && <Icon />}
          {children}
        </div>
      </div>
    );
  }
);

GlowIcon.displayName = "GlowIcon";
