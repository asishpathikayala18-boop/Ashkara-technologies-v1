import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "../../utils/cn";
import { type ReactNode, forwardRef } from "react";

type SectionHeadingProps = Omit<HTMLMotionProps<"div">, "ref"> & {
  title: ReactNode;
  subtitle?: string;
  gradient?: "blue" | "cyan" | "violet" | "emerald";
  align?: "left" | "center" | "right";
  className?: string;
  children?: ReactNode;
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export const SectionHeading = forwardRef<HTMLDivElement, SectionHeadingProps>(
  ({ className, title, subtitle, gradient = "blue", align = "left", children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className={cn(
          "mb-16 md:mb-24 flex flex-col",
          align === "center" ? "items-center text-center mx-auto max-w-3xl" : align === "right" ? "items-end text-right" : "items-start text-left",
          className
        )}
        {...props}
      >
        {subtitle && (
          <motion.div variants={fadeUp} className="mb-4 inline-flex items-center gap-2">
            <span className="h-px w-8 bg-neon-cyan/50" />
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-neon-cyan">
              {subtitle}
            </span>
            <span className="h-px w-8 bg-neon-cyan/50" />
          </motion.div>
        )}
        
        <motion.h2 
          variants={fadeUp} 
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6"
        >
          {title}
        </motion.h2>

        {children && (
          <motion.div variants={fadeUp} className="text-lg text-white/60 leading-relaxed">
            {children}
          </motion.div>
        )}
        
        {/* Gradient accent line */}
        <motion.div 
          variants={fadeUp}
          className={cn(
            "mt-8 h-1 w-24 rounded-full opacity-80",
            gradient === "blue" && "bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-blue",
            gradient === "cyan" && "bg-gradient-to-r from-neon-cyan via-emerald-400 to-neon-cyan",
            gradient === "violet" && "bg-gradient-to-r from-neon-violet via-pink-500 to-neon-violet",
            gradient === "emerald" && "bg-gradient-to-r from-emerald-400 via-neon-cyan to-emerald-400",
            align === "center" && "mx-auto"
          )}
        />
      </motion.div>
    );
  }
);
