import {
  ArrowRight,
  BrainCircuit,
  CircuitBoard,
  FileText,
  Github,
  Globe2,
  GraduationCap,
  Layers3,
  Presentation,
  RadioTower,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "../components/container";
import { Section } from "../components/section";
import { TechLogo } from "../components/ui/tech-logo";
import { GlowButton } from "../components/ui/glow-button";
import { SectionHeading } from "../components/ui/section-heading";
import { cn } from "../utils/cn";

type SolutionTone = "cyan" | "violet" | "blue" | "emerald" | "amber" | "rose";

type Solution = {
  title: string;
  description: string;
  technologies: string[];
  icon: LucideIcon;
  supportIcon: LucideIcon;
  tone: SolutionTone;
  image: string;
  href: string;
};

const solutions: Solution[] = [
  {
    title: "Final Year Project Development",
    description: "Structured academic project builds with modern architecture, clean interfaces, and presentation-ready outcomes.",
    technologies: ["React", "Python", "IoT", "Cloud"],
    icon: GraduationCap,
    supportIcon: Layers3,
    tone: "cyan",
    image: "/images/solutions/final-year-project.webp",
    href: "/?category=All#project-vault",
  },
  {
    title: "AI & Machine Learning Solutions",
    description: "Intelligent systems for prediction, automation, computer vision, data analysis, and practical model workflows.",
    technologies: ["Python", "TensorFlow", "OpenCV", "NLP"],
    icon: BrainCircuit,
    supportIcon: CircuitBoard,
    tone: "violet",
    image: "/images/solutions/ai-machine-learning.webp",
    href: "/?category=Artificial+Intelligence#project-vault",
  },
  {
    title: "Full Stack Web Applications",
    description: "Portfolio-grade web applications with refined UI, scalable frontend structure, API-ready flows, and deployment paths.",
    technologies: ["React", "Node", "MongoDB", "Tailwind"],
    icon: Globe2,
    supportIcon: Rocket,
    tone: "blue",
    image: "/images/solutions/full-stack.webp",
    href: "/?category=MERN+Stack#project-vault",
  },
  {
    title: "IoT & Embedded Systems",
    description: "Sensor-driven hardware concepts with dashboards, automation logic, embedded controllers, and connected workflows.",
    technologies: ["ESP32", "Arduino", "MQTT", "Sensors"],
    icon: RadioTower,
    supportIcon: CircuitBoard,
    tone: "emerald",
    image: "/images/solutions/iot-embedded.webp",
    href: "/?category=Internet+of+Things#project-vault",
  },
  {
    title: "Documentation & Presentation Support",
    description: "Professional documentation, diagrams, reports, and presentation structure for clear academic communication.",
    technologies: ["Reports", "Diagrams", "Slides", "Research"],
    icon: FileText,
    supportIcon: Presentation,
    tone: "amber",
    image: "/images/solutions/documentation.webp",
    href: "/?category=All#project-vault",
  },
  {
    title: "GitHub & Deployment Guidance",
    description: "Repository setup, clean project handoff, deployment preparation, and guidance for sharing work professionally.",
    technologies: ["GitHub", "Vercel", "CI/CD", "Readme"],
    icon: Github,
    supportIcon: Rocket,
    tone: "rose",
    image: "/images/solutions/github-deployment.webp",
    href: "/?category=All#project-vault",
  },
];

const toneStyles: Record<
  SolutionTone,
  {
    glow: string;
    icon: string;
    surface: string;
    line: string;
    gradient: string;
  }
> = {
  cyan: {
    glow: "group-hover:shadow-[0_0_48px_rgb(55_230_255_/_0.22)]",
    icon: "border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan",
    surface: "from-neon-cyan/22 via-neon-blue/10 to-transparent",
    line: "from-transparent via-neon-cyan to-transparent",
    gradient: "from-neon-cyan via-neon-blue to-neon-violet",
  },
  violet: {
    glow: "group-hover:shadow-[0_0_48px_rgb(139_92_246_/_0.24)]",
    icon: "border-neon-violet/30 bg-neon-violet/10 text-neon-violet",
    surface: "from-neon-violet/24 via-neon-blue/10 to-transparent",
    line: "from-transparent via-neon-violet to-transparent",
    gradient: "from-neon-violet via-neon-blue to-neon-cyan",
  },
  blue: {
    glow: "group-hover:shadow-[0_0_48px_rgb(0_163_255_/_0.24)]",
    icon: "border-neon-blue/30 bg-neon-blue/10 text-neon-blue",
    surface: "from-neon-blue/24 via-neon-cyan/10 to-transparent",
    line: "from-transparent via-neon-blue to-transparent",
    gradient: "from-neon-blue via-neon-cyan to-neon-violet",
  },
  emerald: {
    glow: "group-hover:shadow-[0_0_48px_rgb(16_185_129_/_0.2)]",
    icon: "border-emerald-300/30 bg-emerald-300/10 text-emerald-200",
    surface: "from-emerald-300/20 via-neon-cyan/10 to-transparent",
    line: "from-transparent via-emerald-300 to-transparent",
    gradient: "from-emerald-200 via-neon-cyan to-neon-blue",
  },
  amber: {
    glow: "group-hover:shadow-[0_0_48px_rgb(251_191_36_/_0.18)]",
    icon: "border-amber-200/30 bg-amber-200/10 text-amber-100",
    surface: "from-amber-200/18 via-neon-blue/8 to-transparent",
    line: "from-transparent via-amber-200 to-transparent",
    gradient: "from-amber-100 via-neon-cyan to-neon-blue",
  },
  rose: {
    glow: "group-hover:shadow-[0_0_48px_rgb(244_114_182_/_0.18)]",
    icon: "border-rose-200/30 bg-rose-200/10 text-rose-100",
    surface: "from-rose-200/18 via-neon-violet/12 to-transparent",
    line: "from-transparent via-rose-200 to-transparent",
    gradient: "from-rose-100 via-neon-violet to-neon-cyan",
  },
};

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

const panelVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function SolutionsBackground() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#030711_0%,#061326_48%,#050816_100%)]" />
      <motion.div
        animate={shouldReduceMotion ? undefined : { backgroundPosition: ["0px 0px", "48px 48px"] }}
        className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgb(55_230_255_/_0.14)_1px,transparent_1px),linear-gradient(90deg,rgb(139_92_246_/_0.13)_1px,transparent_1px)] [background-size:48px_48px]"
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      />
      <svg className="absolute inset-0 h-full w-full opacity-[0.14]" role="presentation" viewBox="0 0 1200 820">
        <path d="M80 185H260V118H438V242H638V154H850V284H1110" fill="none" stroke="#37e6ff" strokeWidth="1.2" />
        <path d="M120 642H320V520H510V602H724V468H930V560H1100" fill="none" stroke="#8b5cf6" strokeWidth="1.1" />
        <path d="M260 118V520M638 154V468M930 284V560" fill="none" stroke="#00a3ff" strokeWidth="0.9" />
        {[80, 260, 438, 638, 850, 1110, 120, 320, 510, 724, 930, 1100].map((cx, index) => (
          <circle
            cx={cx}
            cy={[185, 118, 242, 154, 284, 284, 642, 520, 602, 468, 560, 560][index]}
            fill={index % 2 === 0 ? "#37e6ff" : "#8b5cf6"}
            key={`${cx}-${index}`}
            r="3.8"
          />
        ))}
      </svg>
      {Array.from({ length: 20 }, (_, index) => (
        <motion.span
          animate={shouldReduceMotion ? undefined : { opacity: [0.18, 0.7, 0.18], y: [0, -16, 0] }}
          className="absolute size-1 rounded-full bg-neon-cyan/70"
          key={index}
          style={{
            left: `${6 + ((index * 19) % 88)}%`,
            top: `${12 + ((index * 23) % 76)}%`,
          }}
          transition={{ delay: index * 0.12, duration: 4.8 + (index % 4), ease: "easeInOut", repeat: Infinity }}
        />
      ))}
      <div className="absolute left-[-16rem] top-24 h-[36rem] w-[36rem] rounded-full bg-neon-blue/14 blur-3xl" />
      <div className="absolute bottom-[-18rem] right-[-10rem] h-[42rem] w-[42rem] rounded-full bg-neon-violet/14 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-[24rem] w-[58rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-cyan/8 blur-3xl" />
    </div>
  );
}

function SolutionBanner({ solution }: { solution: Solution }) {
  const tone = toneStyles[solution.tone];

  return (
    <div className="relative h-48 overflow-hidden rounded-md border border-white/10 bg-ink-950/58 shadow-inner">
      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-40 z-10", tone.surface)} />
      <img
        alt={`${solution.title} banner`}
        className="absolute inset-0 h-full w-full object-cover transition duration-slow ease-premium group-hover:scale-105 transition duration-base ease-premium"
        loading="lazy"
        src={solution.image}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-ink-950 via-transparent to-transparent opacity-60" />
    </div>
  );
}

function SolutionPanel({ solution, index }: { solution: Solution; index: number }) {
  const shouldReduceMotion = useReducedMotion();
  const tone = toneStyles[solution.tone];

  return (
    <motion.article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] p-3 shadow-glass backdrop-blur-xl outline-none transition duration-base ease-premium hover:-translate-y-2 hover:border-neon-blue/35 focus-within:border-neon-blue/45 focus-within:shadow-glow",
        tone.glow,
      )}
      initial="hidden"
      transition={{ duration: shouldReduceMotion ? 0 : 0.55, delay: shouldReduceMotion ? 0 : index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      variants={panelVariants}
      viewport={{ amount: 0.22, once: true }}
      whileInView="visible"
    >
      <span className="pointer-events-none absolute inset-0 rounded-lg opacity-0 transition duration-slow ease-premium group-hover:opacity-100 transition duration-base ease-premium">
        <span className={cn("absolute inset-x-6 top-0 h-px bg-gradient-to-r", tone.line)} />
        <span className={cn("absolute inset-x-6 bottom-0 h-px bg-gradient-to-r", tone.line)} />
      </span>
      <SolutionBanner solution={solution} />
      <div className="flex flex-1 flex-col p-3 pt-6">
        <h3 className="text-xl font-semibold leading-tight text-white">{solution.title}</h3>
        <p className="mt-3 text-sm leading-6 text-ink-300">{solution.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {solution.technologies.map((technology) => (
            <div key={technology} className="flex items-center justify-center size-8 rounded-md bg-white/5 border border-white/10 group-hover:border-neon-blue/20 transition duration-base ease-premium">
              <TechLogo technology={technology} showLabel={false} iconClassName="size-5" />
            </div>
          ))}
        </div>
        <GlowButton
          href={solution.href}
          variant="outline"
          className={cn("mt-6 h-11 w-fit", tone.icon)}
          icon={ArrowRight}
          iconPosition="right"
        >
          <span className={cn("bg-gradient-to-r bg-clip-text text-transparent", tone.gradient)}>Learn More</span>
        </GlowButton>
      </div>
    </motion.article>
  );
}

export function EngineeringSolutionsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section
      aria-labelledby="engineering-solutions-title"
      className="scroll-mt-20 overflow-hidden py-24 sm:py-30"
      id="engineering-solutions"
    >
      <SolutionsBackground />
      <Container>
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-3xl text-center"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeading
            title="Engineering Solutions"
            subtitle="Premium Build Support"
            gradient="violet"
            align="center"
          >
            Modern engineering solutions designed to help students build professional academic and portfolio projects using current technologies.
          </SectionHeading>
        </motion.div>

        <motion.div
          className="mt-14 grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3"
          initial="hidden"
          variants={sectionVariants}
          viewport={{ amount: 0.12, once: true }}
          whileInView="visible"
        >
          {solutions.map((solution, index) => (
            <SolutionPanel index={index} key={solution.title} solution={solution} />
          ))}
        </motion.div>
      </Container>
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,#37e6ff,#8b5cf6,transparent)] shadow-glow" />
    </Section>
  );
}
