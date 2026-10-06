import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { navigationItems } from "../constants/navigation";
import { useLockBodyScroll } from "../hooks/use-lock-body-scroll";
import { siteConfig } from "../config/site";
import { cn } from "../utils/cn";
import { Container } from "./container";
import { GlowButton } from "./ui/glow-button";

const sectionIds = navigationItems.map((item) => item.href.slice(1));

function scrollToAnchor(href: string) {
  if (href.startsWith("/")) return; // Let React Router handle this

  const target = document.querySelector<HTMLElement>(href);

  if (!target) {
    return;
  }

  target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
  window.history.replaceState(null, "", href);
}

function Logo() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <a
      aria-label={`${siteConfig.companyName} home`}
      className="group inline-flex h-12 items-center gap-3 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-neon-blue focus-visible:ring-offset-2 focus-visible:ring-offset-surface-base"
      href="#home"
      onClick={(event) => {
        event.preventDefault();
        scrollToAnchor("#home");
      }}
    >
      <motion.span
        aria-hidden="true"
        animate={shouldReduceMotion ? undefined : { opacity: [0.86, 1, 0.86] }}
        className="relative grid size-10 place-items-center rounded-sm border border-neon-blue/30 bg-white/[0.07] shadow-glow backdrop-blur-xl"
        transition={{ duration: 3.8, ease: "easeInOut", repeat: Infinity }}
      >
        <svg
          className="size-7 overflow-visible"
          fill="none"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M7 24L16 6L25 24"
            initial={false}
            stroke="url(#logo-gradient)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.4"
            transition={{ duration: 2.6, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
            animate={shouldReduceMotion ? { pathLength: 1 } : { pathLength: [0.82, 1, 0.82] }}
          />
          <motion.path
            d="M11 17H21M13.5 22H18.5"
            stroke="#37e6ff"
            strokeLinecap="round"
            strokeWidth="1.8"
            animate={shouldReduceMotion ? undefined : { opacity: [0.55, 1, 0.55] }}
            transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity }}
          />
          <circle cx="7" cy="24" fill="#00a3ff" r="1.8" />
          <circle cx="16" cy="6" fill="#b45cff" r="1.8" />
          <circle cx="25" cy="24" fill="#37e6ff" r="1.8" />
          <defs>
            <linearGradient id="logo-gradient" x1="5" x2="27" y1="26" y2="6">
              <stop stopColor="#00a3ff" />
              <stop offset="0.52" stopColor="#37e6ff" />
              <stop offset="1" stopColor="#b45cff" />
            </linearGradient>
          </defs>
        </svg>
      </motion.span>
      <span className="text-sm font-semibold text-ink-50 transition duration-base ease-premium group-hover:text-white group-hover:[text-shadow:0_0_18px_rgb(55_230_255_/_0.55)]">
        {siteConfig.shortName}
      </span>
    </a>
  );
}

function DesktopMenu({ activeHref, onNavigate }: { activeHref: string; onNavigate: (href: string) => void }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <nav
      aria-label="Main navigation"
      className="hidden h-12 items-center gap-1 rounded-md border border-white/10 bg-white/[0.035] px-1.5 backdrop-blur-xl lg:flex"
    >
      {navigationItems.map((item, index) => (
        <a
          aria-current={activeHref === item.href ? "page" : undefined}
          className="group relative isolate rounded-sm px-4 py-2.5 text-sm font-medium text-ink-300 outline-none transition duration-base ease-premium hover:text-white hover:[text-shadow:0_0_18px_rgb(55_230_255_/_0.55)] focus-visible:ring-2 focus-visible:ring-neon-blue"
          href={item.href}
          key={item.label}
          onClick={(event) => {
            if (item.href.startsWith("/")) return; // Default routing
            event.preventDefault();
            onNavigate(item.href);
          }}
        >
          {(() => {
            const isCurrent = activeHref === item.href || (index === 0 && activeHref === "");

            return (
              <>
                {isCurrent ? (
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-sm border border-neon-blue/30 bg-neon-blue/10 shadow-glow"
                    layoutId="active-desktop-navigation"
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { duration: 0.32, ease: [0.22, 1, 0.36, 1] }
                    }
                  />
                ) : null}
                <span className={cn("relative", isCurrent && "text-white")}>{item.label}</span>
                <span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 rounded-full bg-[linear-gradient(90deg,#00a3ff,#b45cff)] opacity-0 transition duration-base ease-premium group-hover:scale-x-100 group-hover:opacity-100" />
              </>
            );
          })()}
        </a>
      ))}
    </nav>
  );
}

function NavigationCta({ className }: { className?: string }) {
  return (
    <GlowButton 
      variant="primary" 
      href="/contact" 
      icon={ArrowRight} 
      iconPosition="right" 
      className={className}
    >
      Request Consultation
    </GlowButton>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const shouldReduceMotion = useReducedMotion();
  useLockBodyScroll(isOpen);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [closeMenu]);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 12);
      const currentSection = [...sectionIds].reverse().find((id) => {
        const element = document.getElementById(id);
        return element ? element.getBoundingClientRect().top <= 120 : false;
      });

      if (currentSection) {
        setActiveHref(`#${currentSection}`);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        scrollToAnchor(location.hash);
      }, 100);
    }
  }, [location.hash]);

  const handleNavigate = useCallback((href: string) => {
    if (href.startsWith("/")) {
      navigate(href);
      return;
    }
    
    if (location.pathname !== "/") {
      navigate(`/${href}`);
      return;
    }

    setActiveHref(href);
    scrollToAnchor(href);
  }, [location.pathname, navigate]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const handleViewportChange = () => {
      if (desktopQuery.matches || window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    handleViewportChange();
    desktopQuery.addEventListener("change", handleViewportChange);
    window.addEventListener("resize", handleViewportChange);

    return () => {
      desktopQuery.removeEventListener("change", handleViewportChange);
      window.removeEventListener("resize", handleViewportChange);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const focusableElements = menuRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    focusableElements?.[0]?.focus();
  }, [isOpen]);

  const handleMenuKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Tab") {
      return;
    }

    const focusableElements = Array.from(
      menuRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ) ?? [],
    );

    if (focusableElements.length === 0) {
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    }

    if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition duration-slow ease-premium",
        hasScrolled
          ? "border-neon-blue/25 bg-surface-base/70 shadow-[0_1px_24px_rgb(0_163_255_/_0.16)] backdrop-blur-2xl"
          : "border-white/0 bg-transparent backdrop-blur-0",
      )}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Logo />
          <DesktopMenu activeHref={activeHref} onNavigate={handleNavigate} />
          <div className="hidden items-center lg:flex">
            <NavigationCta />
          </div>
          <button
            aria-controls="mobile-navigation"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex size-11 items-center justify-center rounded-sm border border-neon-blue/25 bg-white/[0.06] text-ink-50 shadow-[0_0_24px_rgb(0_163_255_/_0.12)] outline-none transition duration-base ease-premium hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-neon-blue lg:hidden"
            onClick={() => setIsOpen((value) => !value)}
            ref={menuButtonRef}
            type="button"
          >
            {isOpen ? <X aria-hidden="true" size={18} /> : <Menu aria-hidden="true" size={18} />}
          </button>
        </div>
      </Container>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            aria-modal="true"
            className="fixed left-0 top-0 z-[-1] h-screen min-h-[100dvh] w-screen bg-surface-base/82 backdrop-blur-2xl lg:hidden"
            exit={{ opacity: 0, y: -8 }}
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8 }}
            onKeyDown={handleMenuKeyDown}
            ref={menuRef}
            role="dialog"
            transition={{ duration: shouldReduceMotion ? 0 : 0.26, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0 bg-aurora opacity-90" />
            <Container className="relative flex min-h-screen items-center pt-20">
              <nav aria-label="Mobile navigation" className="grid w-full gap-4 py-10">
                {navigationItems.map((item, index) => (
                  <motion.div
                    animate={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -18 }}
                    key={item.label}
                    transition={{
                      delay: shouldReduceMotion ? 0 : 0.06 * index,
                      duration: shouldReduceMotion ? 0 : 0.32,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <a
                      aria-current={activeHref === item.href ? "page" : undefined}
                      className={cn(
                        "block rounded-md border border-white/10 bg-white/[0.055] px-5 py-5 text-2xl font-semibold text-ink-100 outline-none transition duration-base ease-premium hover:border-neon-blue/30 hover:bg-white/[0.09] hover:text-white focus-visible:ring-2 focus-visible:ring-neon-blue",
                        activeHref === item.href || (index === 0 && activeHref === "")
                          ? "border-neon-blue/30 bg-neon-blue/10 text-white shadow-glow"
                          : "",
                      )}
                      href={item.href}
                      onClick={(event) => {
                        if (item.href.startsWith("/")) return; // default routing
                        event.preventDefault();
                        handleNavigate(item.href);
                        setIsOpen(false);
                      }}
                    >
                      {item.label}
                    </a>
                  </motion.div>
                ))}
                <motion.div
                  animate={{ opacity: 1, y: 0 }}
                  className="pt-4"
                  initial={{ opacity: 0, y: 12 }}
                  transition={{ delay: shouldReduceMotion ? 0 : 0.28, duration: shouldReduceMotion ? 0 : 0.32 }}
                >
                  <NavigationCta className="h-13 w-full text-base" />
                </motion.div>
              </nav>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
