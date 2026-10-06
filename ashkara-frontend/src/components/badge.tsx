import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../utils/cn";

export function Badge({ className, ...props }: ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={cn(
        "inline-flex min-h-8 items-center rounded-sm border border-surface-line bg-white/[0.06] px-3 text-eyebrow font-medium uppercase text-ink-200 backdrop-blur-xl",
        className,
      )}
      {...props}
    />
  );
}
