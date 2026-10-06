import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../utils/cn";

export function AnimatedBorder({ className, children, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-lg p-px before:absolute before:inset-[-40%] before:bg-[conic-gradient(from_180deg,transparent,#00a3ff,#8b5cf6,transparent)] before:opacity-60 before:transition before:duration-slow before:ease-premium before:content-[''] hover:before:rotate-180 hover:before:opacity-100",
        className,
      )}
      {...props}
    >
      <div className="relative rounded-[calc(1rem-1px)] bg-ink-950">{children}</div>
    </div>
  );
}
