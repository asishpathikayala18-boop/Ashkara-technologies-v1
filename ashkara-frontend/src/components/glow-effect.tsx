import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../utils/cn";

export function GlowEffect({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute rounded-full bg-neon-blue/20 blur-3xl",
        className,
      )}
      {...props}
    />
  );
}
