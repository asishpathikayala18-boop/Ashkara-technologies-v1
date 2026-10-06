import { useState } from "react";
import { cn } from "../../utils/cn";
import { Code2 } from "lucide-react"; // Fallback icon

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
  python: "python",
  "react native": "react",
  mysql: "mysql",
  sql: "mysql",
};

function normalizeTechnologyName(technology: string) {
  return technology.trim().toLowerCase().replace(/\s+/g, " ");
}

function toLogoFileName(technology: string) {
  const normalized = normalizeTechnologyName(technology);
  return logoAliases[normalized] ?? normalized.replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

type TechLogoProps = {
  technology: string;
  className?: string;
  iconClassName?: string;
  labelClassName?: string;
  showLabel?: boolean;
};

export function TechLogo({
  technology,
  className,
  iconClassName,
  labelClassName,
  showLabel = true,
}: TechLogoProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  
  const logoName = toLogoFileName(technology);
  const logoSrc = logoName.length > 0 ? `/logos/${logoName}.svg` : undefined;

  return (
    <div
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-[#0B1120] px-3 py-2 transition-all duration-300 hover:border-white/20 hover:bg-white/5 hover:shadow-glass",
        className
      )}
      title={technology} // Native tooltip
      aria-label={`${technology} technology`}
      role="img"
    >
      {logoSrc && !hasError ? (
        <img
          src={logoSrc}
          alt={technology}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={cn(
            "size-5 object-contain opacity-0 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-glass",
            isLoaded && "opacity-100",
            iconClassName
          )}
        />
      ) : (
        <Code2 className={cn("size-5 text-neon-cyan transition-transform duration-300 group-hover:scale-110", iconClassName)} aria-hidden="true" />
      )}
      
      {showLabel && (
        <span className={cn("text-sm font-medium text-white/80 group-hover:text-white transition-colors truncate", labelClassName)}>
          {technology}
        </span>
      )}
    </div>
  );
}
