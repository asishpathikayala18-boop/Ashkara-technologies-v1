import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../utils/cn";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  spacing?: "compact" | "normal" | "loose";
};

const spacing = {
  compact: "py-16 sm:py-20",
  normal: "py-24 sm:py-30",
  loose: "py-30 sm:py-36",
};

export function Section({ className, spacing: sectionSpacing = "normal", ...props }: SectionProps) {
  return <section className={cn("relative", spacing[sectionSpacing], className)} {...props} />;
}
