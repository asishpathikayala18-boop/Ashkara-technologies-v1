import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../utils/cn";

type ContainerProps = ComponentPropsWithoutRef<"div"> & {
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "max-w-site-sm",
  md: "max-w-site",
  lg: "max-w-site-lg",
};

export function Container({ className, size = "lg", ...props }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full px-5 sm:px-6 lg:px-8", sizes[size], className)}
      {...props}
    />
  );
}
