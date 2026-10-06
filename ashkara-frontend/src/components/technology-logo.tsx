import { useState } from "react";
import { cn } from "../utils/cn";

const logoAliases: Record<string, string> = {
  android: "android",
  arduino: "arduino",
  aws: "aws",
  cpp: "cpp-svgrepo-com",
  "c++": "cpp-svgrepo-com",
  firebase: "firebase",
  flutter: "flutter",
  github: "github",
  html: "html5",
  html5: "html5",
  java: "java",
  javascript: "java-script",
  js: "java-script",
  mongodb: "mongodb",
  mongo: "mongodb",
  node: "nodejs",
  "node.js": "nodejs",
  nodejs: "nodejs",
  numpy: "numpy",
  pandas: "pandas",
  react: "react",
  tailwind: "tailwindcss",
  "tailwind css": "tailwindcss",
  tailwindcss: "tailwindcss",
  typescript: "typescript",
  ts: "typescript",
};

type TechnologyLogoProps = {
  className?: string;
  iconClassName?: string;
  labelClassName?: string;
  technology: string;
};

function normalizeTechnologyName(technology: string) {
  return technology.trim().toLowerCase().replace(/\s+/g, " ");
}

function toLogoFileName(technology: string) {
  const normalized = normalizeTechnologyName(technology);
  return logoAliases[normalized] ?? normalized.replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function TechnologyLogo({
  className,
  iconClassName,
  labelClassName,
  technology,
}: TechnologyLogoProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const logoName = toLogoFileName(technology);
  const logoSrc = logoName.length > 0 ? `/logos/${logoName}.svg` : undefined;

  return (
    <span
      aria-label={`${technology} technology`}
      className={cn(
        "inline-flex max-w-full items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-xs font-medium text-ink-200 transition duration-base ease-premium hover:scale-[1.03] hover:rotate-[3deg] hover:border-neon-blue/25 hover:text-white hover:shadow-glow",
        className,
      )}
      role="img"
    >
      {logoSrc && !hasError ? (
        <img
          alt={`${technology} logo`}
          className={cn(
            "size-4 max-h-12 max-w-12 shrink-0 object-contain opacity-0 transition duration-base ease-premium",
            isLoaded && "opacity-100",
            iconClassName,
          )}
          decoding="async"
          loading="lazy"
          onError={() => setHasError(true)}
          onLoad={() => setIsLoaded(true)}
          src={logoSrc}
        />
      ) : null}
      <span className={cn("truncate", labelClassName)}>{technology}</span>
    </span>
  );
}
