import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  Database,
  Search,
  LayoutGrid,
  X,
  Layers,
  Package,
  Sparkles,
  Check,
} from "lucide-react";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";
import { Container } from "../components/container";
import { Section } from "../components/section";
import { TechLogo } from "../components/ui/tech-logo";
import { GlowButton } from "../components/ui/glow-button";
import { CTAButton } from "../components/ui/cta-button";
import { SectionHeading } from "../components/ui/section-heading";
import { cn } from "../utils/cn";
import { projectData, type Project } from "../data/project-data";
import { CATEGORIES, type FilterCategory } from "../data/categories";
import { siteConfig } from "../config/site";

type SortOption = "Trending" | "Newest" | "Popular" | "Recently Added";
const SORT_OPTIONS: SortOption[] = ["Trending", "Newest", "Popular", "Recently Added"];

type ModalState = {
  type: "preview" | "details" | null;
  project: Project | null;
};

function VaultBackground() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden dark:bg-ink-950 bg-white transition-colors duration-300">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgb(0_163_255/0.16),transparent_28rem),radial-gradient(circle_at_82%_26%,rgb(139_92_246/0.14),transparent_30rem),linear-gradient(135deg,#030711_0%,#071226_48%,#050816_100%)] dark:opacity-100 opacity-20" />
      <motion.div
        animate={shouldReduceMotion ? undefined : { backgroundPosition: ["0px 0px", "42px 42px"] }}
        className="absolute inset-0 bg-radial-grid bg-[length:28px_28px] dark:opacity-25 opacity-10"
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      />
      {Array.from({ length: 20 }, (_, index) => (
        <motion.span
          animate={shouldReduceMotion ? undefined : { opacity: [0.12, 0.54, 0.12], y: [0, -20, 0] }}
          className={cn("absolute rounded-full bg-neon-cyan shadow-glow", index % 4 === 0 ? "size-1.5" : "size-1")}
          key={index}
          style={{
            left: `${(index * 43) % 100}%`,
            top: `${(index * 61) % 100}%`,
          }}
          transition={{ delay: (index % 7) * 0.35, duration: 6.5, ease: "easeInOut", repeat: Infinity }}
        />
      ))}
      <div className="absolute left-1/2 top-28 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-neon-blue/10 blur-3xl" />
    </div>
  );
}

function ProjectCard({
  project,
  onOpenPreview,
  onOpenDetails,
}: {
  project: Project;
  onOpenPreview: (project: Project) => void;
  onOpenDetails: (project: Project) => void;
}) {
  const shouldReduceMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(useSpring(mouseY, { stiffness: 150, damping: 18 }), [-0.5, 0.5], [3, -3]);
  const rotateY = useTransform(useSpring(mouseX, { stiffness: 150, damping: 18 }), [-0.5, 0.5], [-3, 3]);

  const handleMove = (event: MouseEvent<HTMLElement>) => {
    if (shouldReduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi, I am interested in getting the project: "${project.title}" (${project.category})`
  );

  return (
    <motion.article
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-neon-blue/15 bg-[#0B1120] bg-gradient-to-b from-[#0B1120] to-[#040810] shadow-glass backdrop-blur-xl outline-none transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-neon-blue/30 hover:shadow-[0_10px_40px_rgba(59,130,246,0.2)] transition duration-base ease-premium"
      layout
      onMouseLeave={reset}
      onMouseMove={handleMove}
      style={shouldReduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 900 }}
    >
      <div className="relative h-48 w-full overflow-hidden bg-ink-950">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 to-neon-violet/20 opacity-40 z-10" />
        <img
          alt={`${project.category} banner`}
          className="absolute inset-0 h-full w-full object-cover transition duration-slow ease-premium group-hover:scale-105 transition duration-base ease-premium"
          loading="lazy"
          src={project.bannerImage}
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/40 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-5 pt-6 text-white">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-eyebrow font-medium uppercase text-neon-cyan">{project.engineeringBranch}</p>
            <h3 className="mt-1.5 text-xl font-semibold leading-tight line-clamp-2">
              {project.title}
            </h3>
          </div>
        </div>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/70 flex-1">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologyLogos.slice(0, 4).map((item, index) => (
            <motion.div
              key={item}
              transition={{ delay: index * 0.025 }}
              whileHover={shouldReduceMotion ? undefined : { y: -2 }}
              className="flex items-center justify-center size-8 rounded-md bg-white/5 border border-white/10"
            >
              <TechLogo technology={item} showLabel={false} iconClassName="size-5" />
            </motion.div>
          ))}
          {project.technologyLogos.length > 4 && (
            <span className="flex items-center text-xs font-medium text-white/50 pl-1">
              +{project.technologyLogos.length - 4}
            </span>
          )}
        </div>

        <div className="mt-6 flex flex-col gap-2.5">
          <div className="grid grid-cols-2 gap-2.5">
            <GlowButton
              variant="outline"
              className="h-10 text-neon-blue border-neon-blue/25 bg-neon-blue/10 hover:bg-neon-blue/15 transition duration-base ease-premium"
              onClick={() => onOpenPreview(project)}
            >
              <LayoutGrid aria-hidden="true" className="size-4 mr-2" />
              Preview
            </GlowButton>
            <GlowButton
              variant="secondary"
              className="h-10"
              onClick={() => onOpenDetails(project)}
            >
              Details
            </GlowButton>
          </div>
          <CTAButton
            href={`${siteConfig.whatsapp}?text=${whatsappMessage}`}
            target="_blank"
            icon={ArrowRight}
            iconPosition="right"
          >
            Get This Project
          </CTAButton>
        </div>
      </div>
    </motion.article>
  );
}

function PreviewModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeButtonRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const whatsappMessage = encodeURIComponent(
    `Hi, I am interested in getting the project: "${project.title}" (${project.category})`
  );

  return (
    <motion.div
      aria-labelledby="preview-modal-title"
      aria-modal="true"
      className="fixed inset-0 z-[80] grid place-items-center bg-ink-950/72 p-4 backdrop-blur-2xl"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      role="dialog"
    >
      <motion.div
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative max-h-[90vh] w-full max-w-3xl overflow-auto rounded-xl border border-neon-blue/20 bg-[#0B1120] shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_0_20px_rgba(59,130,246,0.05)]"
        exit={{ opacity: 0, scale: 0.97, y: 12 }}
        initial={{ opacity: 0, scale: 0.97, y: 12 }}
        ref={dialogRef}
        transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative h-64 w-full overflow-hidden bg-ink-900 sm:h-80">
          <img
            alt={`${project.category} banner`}
            className="absolute inset-0 h-full w-full object-cover"
            src={project.bannerImage}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/60 to-transparent" />
          <button
            aria-label="Close preview"
            className="absolute right-4 top-4 z-20 grid size-10 place-items-center rounded-sm border border-white/10 bg-black/40 text-white outline-none backdrop-blur-md transition hover:bg-white/20 hover:border-white/20 focus-visible:ring-2 focus-visible:ring-neon-blue transition duration-base ease-premium"
            onClick={onClose}
            ref={closeButtonRef}
            type="button"
          >
            <X aria-hidden="true" className="size-5" />
          </button>
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-eyebrow font-semibold uppercase text-neon-cyan drop-shadow-glass">
              {project.engineeringBranch}
            </p>
            <h2
              className="mt-2 text-2xl font-bold leading-tight text-white sm:text-4xl drop-shadow-glass"
              id="preview-modal-title"
            >
              {project.title}
            </h2>
          </div>
        </div>

        <div className="p-6 sm:p-8 text-white/80">
          <p className="text-base leading-relaxed">
            {project.description}
          </p>
          <div className="mt-8">
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Core Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologyLogos.map((tech) => (
                <div key={tech} className="flex items-center justify-center size-10 rounded-md bg-white/5 border border-white/10">
                   <TechLogo technology={tech} showLabel={false} iconClassName="size-6" />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 flex justify-end">
            <CTAButton
              href={`${siteConfig.whatsapp}?text=${whatsappMessage}`}
              target="_blank"
              icon={ArrowRight}
              iconPosition="right"
            >
              Get This Project Now
            </CTAButton>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}


function DetailsModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeButtonRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const whatsappMessage = encodeURIComponent(
    `Hi, I am interested in getting the project details for: "${project.title}" (${project.category})`
  );

  return (
    <motion.div
      aria-labelledby="details-modal-title"
      aria-modal="true"
      className="fixed inset-0 z-[80] grid place-items-center bg-ink-950/72 p-4 backdrop-blur-2xl"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      role="dialog"
    >
      <motion.div
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative max-h-[92vh] w-full max-w-4xl overflow-auto rounded-xl border border-neon-blue/20 bg-[#0B1120] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_0_20px_rgba(59,130,246,0.05)] sm:p-8"
        exit={{ opacity: 0, scale: 0.97, y: 12 }}
        initial={{ opacity: 0, scale: 0.97, y: 12 }}
        ref={dialogRef}
        transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
      >
        <button
          aria-label="Close project details"
          className="absolute right-4 top-4 grid size-10 place-items-center rounded-sm border border-white/10 bg-white/5 text-white/80 outline-none transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-neon-blue transition duration-base ease-premium"
          onClick={onClose}
          ref={closeButtonRef}
          type="button"
        >
          <X aria-hidden="true" className="size-5" />
        </button>

        <div className="pr-12">
          <p className="text-eyebrow font-semibold uppercase text-neon-cyan">{project.category}</p>
          <h2 className="mt-2 text-3xl font-bold leading-tight text-white" id="details-modal-title">
            {project.title}
          </h2>
          <p className="mt-6 text-base text-white/70">{project.description}</p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {/* Tech Stack */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-5 md:col-span-2 shadow-glass backdrop-blur-md">
            <h4 className="flex items-center gap-2 text-sm font-semibold text-white">
              <Layers aria-hidden="true" className="size-4 text-neon-cyan" />
              Technology Stack
            </h4>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologyLogos.map((tech) => (
                <div key={tech} className="flex items-center justify-center size-10 rounded-md bg-white/5 border border-white/10">
                   <TechLogo technology={tech} showLabel={false} iconClassName="size-6" />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-5 md:col-span-2 shadow-glass backdrop-blur-md">
             <h4 className="flex items-center gap-2 text-sm font-semibold text-white">
               <Package aria-hidden="true" className="size-4 text-neon-cyan" />
               Project Architecture & Features
             </h4>
             <p className="mt-3 text-sm text-white/70">
                This project is built around a scalable architecture using modern frameworks. It implements secure patterns, performant design, and provides all necessary boilerplate and core logic for academic or industrial use.
             </p>
          </div>

          {/* Build With AshKara Checklist */}
          <div className="rounded-xl border border-neon-blue/20 bg-gradient-to-br from-neon-blue/10 to-neon-violet/10 p-5 md:col-span-2 shadow-inner">
            <h4 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white">
              <Sparkles className="size-4 text-neon-cyan" /> Build With AshKara Checklist
            </h4>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                "Source Code",
                "Documentation",
                "PPT",
                "GitHub Repository",
                "Deployment Support",
                "Viva Preparation",
                "Technical Guidance",
              ].map((item) => (
                <div className="flex items-center gap-2 text-sm text-white/90 font-medium" key={item}>
                  <Check className="size-4 shrink-0 text-emerald-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end gap-4">
          <CTAButton
            href={`${siteConfig.whatsapp}?text=${whatsappMessage}`}
            target="_blank"
            icon={ArrowRight}
            iconPosition="right"
          >
            Get This Project
          </CTAButton>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ProjectVaultSection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const initialCategory = (searchParams.get("category") as FilterCategory) || "All";
  const [activeFilter, setActiveFilter] = useState<FilterCategory | "All">(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [activeSort, setActiveSort] = useState<SortOption>("Trending");
  const [modalState, setModalState] = useState<ModalState>({ type: null, project: null });
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(9); // Initial load count

  useEffect(() => {
    const category = searchParams.get("category") as FilterCategory;
    if (category && CATEGORIES.includes(category)) {
      setActiveFilter(category);
    } else {
      setActiveFilter("All");
    }
    
    // Automatically scroll to the vault if hash matches
    if (location.hash === "#project-vault") {
      const element = document.getElementById("project-vault");
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [searchParams, location.hash]);

  const handleFilterChange = (filter: FilterCategory | "All") => {
    setActiveFilter(filter);
    if (filter === "All") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", filter);
    }
    setSearchParams(searchParams, { replace: true });
  };

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(searchQuery), 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const visibleProjects = useMemo(() => {
    const normalizedQuery = debouncedQuery.trim().toLowerCase();

    // Filter
    let filtered = projectData.filter((project) => {
      const matchesFilter = activeFilter === "All" || project.category === activeFilter;
      const searchable = [project.title, project.category, project.engineeringBranch, project.description, ...project.technologyLogos]
        .join(" ")
        .toLowerCase();
      return matchesFilter && (normalizedQuery.length === 0 || searchable.includes(normalizedQuery));
    });

    // Sort
    if (activeSort === "Trending") {
      filtered = filtered.sort((a, b) => (b.trending ? 1 : 0) - (a.trending ? 1 : 0));
    } else if (activeSort === "Newest" || activeSort === "Recently Added") {
      filtered = filtered.sort((a, b) => new Date(b.dateAdded || "").getTime() - new Date(a.dateAdded || "").getTime());
    } else if (activeSort === "Popular") {
      filtered = filtered.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
    }

    return filtered;
  }, [activeFilter, debouncedQuery, activeSort]);

  const displayedProjects = visibleProjects.slice(0, visibleCount);
  const hasMore = visibleCount < visibleProjects.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 9);
  };

  const handleCloseModal = useCallback(() => setModalState({ type: null, project: null }), []);

  // Reset pagination when filters change
  useEffect(() => {
    setVisibleCount(9);
  }, [activeFilter, debouncedQuery, activeSort]);

  return (
    <Section aria-labelledby="project-vault-title" className="scroll-mt-20 overflow-hidden py-24 sm:py-30 relative" id="project-vault">
      <VaultBackground />
      <Container>
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <SectionHeading
              title="PROJECT VAULT"
              subtitle="Growing Project Library"
              gradient="blue"
              align="left"
            >
              Explore 150+ modern engineering projects built using industry-standard technologies across
              multiple engineering disciplines.
            </SectionHeading>
          </div>
          
          <div className="flex w-full flex-col gap-4 lg:max-w-md">
            <label className="group relative w-full">
              <span className="sr-only">Search projects, technologies, and domains</span>
              <Search
                aria-hidden="true"
                className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-ink-400 transition group-focus-within:text-neon-cyan"
              />
              <input
                className="h-13 w-full rounded-md border dark:border-white/12 border-black/12 dark:bg-white/[0.06] bg-black/[0.03] pl-12 pr-4 text-sm font-medium dark:text-white text-ink-950 outline-none shadow-glass backdrop-blur-xl transition duration-base ease-premium placeholder:text-ink-500 focus:border-neon-blue/45 focus:shadow-glow"
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search projects, technologies, domains..."
                type="search"
                value={searchQuery}
              />
            </label>
            
            <div className="flex gap-2">
              <span className="flex h-11 shrink-0 items-center rounded-md border dark:border-white/10 border-black/10 dark:bg-white/[0.04] bg-black/[0.02] px-4 text-sm font-medium dark:text-ink-300 text-ink-600">
                Sort by:
              </span>
              <div className="flex flex-1 gap-2 overflow-x-auto pb-1 scrollbar-hide">
                {SORT_OPTIONS.map((option) => (
                  <button
                    key={option}
                    onClick={() => setActiveSort(option)}
                    className={cn(
                      "shrink-0 rounded-md border px-4 h-11 text-sm font-semibold outline-none transition duration-base ease-premium focus-visible:ring-2 focus-visible:ring-neon-blue",
                      activeSort === option
                        ? "border-neon-blue/40 bg-neon-blue/15 text-neon-blue shadow-glow"
                        : "dark:border-white/10 border-black/10 dark:bg-white/[0.03] bg-black/[0.02] dark:text-ink-400 text-ink-600 hover:border-black/20 dark:hover:border-white/20 dark:hover:text-ink-200 hover:text-ink-800"
                    )}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-3 scrollbar-hide">
          {CATEGORIES.map((filter) => (
            <button
              aria-pressed={activeFilter === filter}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 text-sm font-semibold outline-none transition duration-base ease-premium focus-visible:ring-2 focus-visible:ring-neon-blue",
                activeFilter === filter
                  ? "border-neon-blue/40 bg-neon-blue/15 text-neon-blue shadow-glow"
                  : "dark:border-white/10 border-black/10 dark:bg-white/[0.055] bg-black/[0.03] dark:text-ink-300 text-ink-600 dark:hover:border-neon-blue/25 hover:border-neon-blue/25 dark:hover:text-white hover:text-ink-950"
              )}
              key={filter}
              onClick={() => handleFilterChange(filter)}
              type="button"
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-4 flex items-center text-xs font-semibold uppercase text-neon-cyan">
           Showing {visibleProjects.length} Projects
        </div>

        <AnimatePresence mode="popLayout">
          {displayedProjects.length > 0 ? (
            <motion.div
              className="mt-6 grid auto-rows-fr items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3"
              layout
              key="projects"
            >
              {displayedProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  onOpenPreview={(p) => setModalState({ type: "preview", project: p })}
                  onOpenDetails={(p) => navigate(`/projects/${p.id}`)}
                  project={project}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="mt-10 rounded-lg border dark:border-white/10 border-black/10 dark:bg-white/[0.055] bg-black/[0.02] p-8 text-center shadow-glass backdrop-blur-xl"
              exit={{ opacity: 0, y: 12 }}
              initial={{ opacity: 0, y: 12 }}
              key="empty"
            >
              <Database aria-hidden="true" className="mx-auto size-8 text-neon-cyan" />
              <p className="mt-4 text-lg font-semibold dark:text-white text-ink-950">No matching project found</p>
              <p className="mt-2 text-sm dark:text-ink-300 text-ink-600">Try another technology, domain, or project keyword.</p>
            </motion.div>
          )}
        </AnimatePresence>
        
        {hasMore && (
          <div className="mt-12 flex justify-center">
             <GlowButton
                onClick={handleLoadMore}
                variant="outline"
                icon={ArrowRight}
                iconPosition="right"
             >
                Explore More Projects
             </GlowButton>
          </div>
        )}
      </Container>

      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,#37e6ff,#8b5cf6,transparent)] shadow-glow" />

      <AnimatePresence>
        {modalState.type === "preview" && modalState.project && (
          <PreviewModal onClose={handleCloseModal} project={modalState.project} />
        )}
        {modalState.type === "details" && modalState.project && (
          <DetailsModal onClose={handleCloseModal} project={modalState.project} />
        )}
      </AnimatePresence>
    </Section>
  );
}
