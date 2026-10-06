import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../utils/cn";

export function GradientText({ className, ...props }: ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={cn(
        "bg-[linear-gradient(135deg,#ffffff,#37e6ff_42%,#b45cff)] bg-clip-text text-transparent",
        className,
      )}
      {...props}
    />
  );
}
