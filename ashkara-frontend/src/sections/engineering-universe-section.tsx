import {
  Battery,
  Check,
  CheckCircle2,
  Signal,
  Sparkles,
  Wifi,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import { Container } from "../components/container";
import { Section } from "../components/section";
import { GlowIcon } from "../components/ui/glow-icon";
import { TechLogo } from "../components/ui/tech-logo";
import { GlassCard } from "../components/ui/glass-card";
import { fadeUp, staggerContainer } from "../animations/transitions";
import { cn } from "../utils/cn";

type Technology = {
  name: string;
  logoPath: string;
};

type OrbitType = "inner" | "middle" | "outer";

type Domain = {
  id: string;
  name: string;
  iconPath: string;
  imagePath: string;
  orbit: OrbitType;
  angle: number; // static starting angle
  radius: number; // in cqi (percentage of parent)
  description: string;
  technologies: Technology[];
  projects: string[];
  industryApplications: string[];
  careerOpportunities: string[];
};

const domains: Domain[] = [
  // INNER ORBIT (Fastest)
  {
    id: "ai",
    orbit: "inner",
    angle: 0,
    radius: 14,
    name: "Artificial Intelligence",
    iconPath: "/icons/engineering/artificial-intelligence.svg",
    imagePath: "/images/engineering/artificial-intelligence.webp",
    description: "Design intelligent systems that reason, classify, recommend, and automate complex workflows.",
    technologies: [
      { name: "Python", logoPath: "/logos/python.svg" },
      { name: "TensorFlow", logoPath: "/logos/tensorflow.svg" },
      { name: "NumPy", logoPath: "/logos/numpy.svg" },
    ],
    projects: ["AI Resume Analyzer", "Vision Detector", "Smart Recommendation"],
    industryApplications: ["Healthcare", "Finance", "Retail", "Security"],
    careerOpportunities: ["AI Engineer", "ML Researcher", "Data Scientist"]
  },
  {
    id: "ds",
    orbit: "inner",
    angle: 90,
    radius: 14,
    name: "Data Science",
    iconPath: "/icons/engineering/data-science.svg",
    imagePath: "/images/engineering/data-science.webp",
    description: "Extract insights from complex datasets using advanced analytics, statistical modeling, and visualization.",
    technologies: [
      { name: "Python", logoPath: "/logos/python.svg" },
      { name: "Pandas", logoPath: "/logos/pandas.svg" },
      { name: "NumPy", logoPath: "/logos/numpy.svg" },
    ],
    projects: ["Sales Dashboard", "Customer Segmentation", "Predictive Maintenance"],
    industryApplications: ["E-commerce", "Marketing", "Finance", "Logistics"],
    careerOpportunities: ["Data Analyst", "Data Scientist", "BI Developer"]
  },
  {
    id: "ml",
    orbit: "inner",
    angle: 180,
    radius: 14,
    name: "Machine Learning",
    iconPath: "/icons/engineering/robotics.svg",
    imagePath: "/images/engineering/robotics.webp",
    description: "Build predictive models with structured data, evaluation pipelines, and practical deployment paths.",
    technologies: [
      { name: "Python", logoPath: "/logos/python.svg" },
      { name: "TensorFlow", logoPath: "/logos/tensorflow.svg" },
      { name: "Pandas", logoPath: "/logos/pandas.svg" },
    ],
    projects: ["Price Predictor", "Disease Classifier", "Fraud Detection"],
    industryApplications: ["Finance", "Healthcare", "Automotive", "Retail"],
    careerOpportunities: ["ML Engineer", "Data Scientist", "AI Developer"]
  },
  {
    id: "mern",
    orbit: "inner",
    angle: 270,
    radius: 14,
    name: "MERN Stack",
    iconPath: "/logos/react.svg",
    imagePath: "/images/engineering/mern-stack.webp",
    description: "Develop full-stack web applications using MongoDB, Express.js, React, and Node.js.",
    technologies: [
      { name: "React", logoPath: "/logos/react.svg" },
      { name: "Node.js", logoPath: "/logos/nodejs.svg" },
      { name: "MongoDB", logoPath: "/logos/mongodb.svg" },
      { name: "Tailwind", logoPath: "/logos/tailwindcss.svg" },
    ],
    projects: ["E-commerce Platform", "Social Network", "Task Manager"],
    industryApplications: ["SaaS", "Media", "Retail", "Enterprise"],
    careerOpportunities: ["Full Stack Developer", "Frontend Engineer", "Backend Engineer"]
  },

  // MIDDLE ORBIT (Medium Speed)
  {
    id: "android",
    orbit: "middle",
    angle: 45,
    radius: 22,
    name: "Android",
    iconPath: "/icons/engineering/android.svg",
    imagePath: "/images/engineering/android-development.webp",
    description: "Create native and cross-platform mobile applications for the Android ecosystem.",
    technologies: [
      { name: "Android", logoPath: "/logos/android.svg" },
      { name: "Java", logoPath: "/logos/java.svg" },
      { name: "Flutter", logoPath: "/logos/flutter.svg" },
    ],
    projects: ["Fitness Tracker", "Delivery App", "Smart Wallet"],
    industryApplications: ["Consumer Tech", "Delivery", "Fintech", "Health"],
    careerOpportunities: ["Mobile Developer", "Android Engineer", "App Designer"]
  },
  {
    id: "iot",
    orbit: "middle",
    angle: 135,
    radius: 22,
    name: "IoT",
    iconPath: "/icons/engineering/cloud.svg",
    imagePath: "/images/engineering/internet-of-things.webp",
    description: "Connect devices, sensors, dashboards, and automation flows into real-world embedded systems.",
    technologies: [
      { name: "Arduino", logoPath: "/logos/arduino.svg" },
      { name: "C++", logoPath: "/logos/cpp-svgrepo-com.svg" },
      { name: "AWS", logoPath: "/logos/aws.svg" },
    ],
    projects: ["Smart Home", "Weather Station", "Water Monitoring"],
    industryApplications: ["Agriculture", "Manufacturing", "Smart Cities", "Logistics"],
    careerOpportunities: ["IoT Engineer", "Embedded Developer", "Hardware Engineer"]
  },
  {
    id: "cloud",
    orbit: "middle",
    angle: 225,
    radius: 22,
    name: "Cloud Computing",
    iconPath: "/icons/engineering/cloud.svg",
    imagePath: "/images/engineering/cloud-computing.webp",
    description: "Create cloud-ready projects with deployment, storage, APIs, monitoring, and scalable workflows.",
    technologies: [
      { name: "AWS", logoPath: "/logos/aws.svg" },
      { name: "Firebase", logoPath: "/logos/firebase.svg" },
      { name: "GitHub", logoPath: "/logos/github.svg" },
    ],
    projects: ["Cloud Dashboard", "Serverless API", "File Platform"],
    industryApplications: ["Enterprise", "SaaS", "Fintech", "E-commerce"],
    careerOpportunities: ["Cloud Engineer", "DevOps Engineer", "Solutions Architect"]
  },
  {
    id: "cyber",
    orbit: "middle",
    angle: 315,
    radius: 22,
    name: "Cyber Security",
    iconPath: "/icons/engineering/cybersecurity.svg",
    imagePath: "/images/engineering/cyber-security.webp",
    description: "Explore secure systems, threat detection, ethical analysis, and defensive engineering projects.",
    technologies: [
      { name: "Python", logoPath: "/logos/python.svg" },
      { name: "AWS", logoPath: "/logos/aws.svg" },
    ],
    projects: ["Phishing Detector", "Password Auditor", "Log Analyzer"],
    industryApplications: ["Finance", "Defense", "Corporate", "IT Services"],
    careerOpportunities: ["Security Analyst", "Penetration Tester", "Cyber Engineer"]
  },

  // OUTER ORBIT (Slowest Speed)
  {
    id: "ece",
    orbit: "outer",
    angle: 15,
    radius: 30,
    name: "ECE",
    iconPath: "/icons/engineering/electronics.svg",
    imagePath: "/images/engineering/electronics-communication.webp",
    description: "Prototype electronic systems with embedded logic, signal processing, and hardware interfaces.",
    technologies: [
      { name: "Arduino", logoPath: "/logos/arduino.svg" },
      { name: "C++", logoPath: "/logos/cpp-svgrepo-com.svg" },
    ],
    projects: ["Signal Monitor", "RFID System", "Gesture Robot"],
    industryApplications: ["Telecom", "Automotive", "Aerospace", "Consumer Electronics"],
    careerOpportunities: ["Electronics Engineer", "Embedded Engineer", "Design Engineer"]
  },
  {
    id: "eee",
    orbit: "outer",
    angle: 105,
    radius: 30,
    name: "EEE",
    iconPath: "/icons/engineering/electrical.svg",
    imagePath: "/images/engineering/electrical-engineering.webp",
    description: "Engineer power, control, energy monitoring, and electrical automation project systems.",
    technologies: [
      { name: "Arduino", logoPath: "/logos/arduino.svg" },
    ],
    projects: ["Energy Meter", "Load Controller", "Solar Tracker"],
    industryApplications: ["Energy", "Manufacturing", "Automotive", "Construction"],
    careerOpportunities: ["Electrical Engineer", "Control Engineer", "Power Engineer"]
  },
  {
    id: "mechanical",
    orbit: "outer",
    angle: 195,
    radius: 30,
    name: "Mechanical",
    iconPath: "/icons/engineering/mechanical.svg",
    imagePath: "/images/engineering/mechanical-engineering.webp",
    description: "Model, simulate, and present mechanical systems with automation-ready engineering thinking.",
    technologies: [
      { name: "Python", logoPath: "/logos/python.svg" },
    ],
    projects: ["Robotic Arm", "Gearbox Model", "Thermal Study"],
    industryApplications: ["Automotive", "Aerospace", "Manufacturing", "Robotics"],
    careerOpportunities: ["Mechanical Engineer", "Design Engineer", "Robotics Engineer"]
  },
  {
    id: "civil",
    orbit: "outer",
    angle: 285,
    radius: 30,
    name: "Civil",
    iconPath: "/icons/engineering/civil.svg",
    imagePath: "/images/engineering/civil-engineering.webp",
    description: "Develop blueprint-inspired planning, structural analysis, and sustainability project concepts.",
    technologies: [
      { name: "AutoCAD", logoPath: "/logos/autocad.svg" },
    ],
    projects: ["Smart Parking", "Structural Plan", "Water Network"],
    industryApplications: ["Construction", "Urban Planning", "Transportation", "Environment"],
    careerOpportunities: ["Civil Engineer", "Structural Engineer", "Urban Planner"]
  }
];

const ORBIT_CONFIG = {
  inner: { duration: 45, radius: 20, borderClass: "border-white/10" },
  middle: { duration: 70, radius: 33, borderClass: "border-white/5 border-dashed" },
  outer: { duration: 95, radius: 46, borderClass: "border-white/5" }
} as const;

function MobileEngineeringUniverse({ 
  selectedDomain, 
  setSelectedDomain,
  domains
}: { 
  selectedDomain: Domain | null, 
  setSelectedDomain: (d: Domain | null) => void,
  domains: Domain[]
}) {
  return (
    <div className="relative w-full max-w-[360px] aspect-square mx-auto flex md:hidden items-center justify-center my-8">
      {/* Central Core */}
      <button
        className="absolute z-40 flex size-20 items-center justify-center rounded-full bg-black shadow-[0_0_60px_rgba(0,163,255,0.5)] transition-transform active:scale-95 outline-none"
        onClick={() => setSelectedDomain(null)}
        title="AshKara Core"
      >
        <div className="absolute inset-0 rounded-full border border-neon-blue/30 animate-[spin_4s_linear_infinite]" />
        <div className="absolute inset-[-8px] rounded-full border border-neon-cyan/20 border-dashed animate-[spin_5s_linear_infinite_reverse]" />
        <div className="absolute inset-[-15px] rounded-full bg-neon-cyan/5 blur-xl animate-pulse" />
        {/* Subtle mobile particles */}
        <div className="absolute inset-[-10px] rounded-full border border-transparent border-t-neon-cyan/40 animate-[spin_2s_linear_infinite]" />
        <img src="/brand/ashkara-logo.svg" alt="AshKara Core" className="size-12 drop-shadow-glow relative z-10" />
      </button>

      {/* Domain Nodes in 2 Rings */}
      {domains.map((domain, index) => {
        const isSelected = selectedDomain?.id === domain.id;
        
        // Arrange first 4 in inner ring, remaining 8 in outer ring
        const isInner = index < 4;
        const ringIndex = isInner ? index : index - 4;
        const totalInRing = isInner ? 4 : 8;
        
        // Radii for mobile
        const radius = isInner ? 85 : 155; 
        
        // Calculate angle (starting from top, clockwise)
        const angleOffset = isInner ? -90 : -90 + (360 / 16); 
        const angleDegrees = angleOffset + (ringIndex * (360 / totalInRing));
        const angleRads = (angleDegrees * Math.PI) / 180;
        
        const x = Math.cos(angleRads) * radius;
        const y = Math.sin(angleRads) * radius;

        return (
          <button
            key={domain.id}
            onClick={() => setSelectedDomain(domain)}
            className={cn(
              "absolute left-1/2 top-1/2 flex flex-col items-center justify-center transition-all duration-300 outline-none z-20 active:scale-95",
              isSelected ? "z-30" : "z-20"
            )}
            style={{
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
            }}
          >
            {/* Connection line to center when selected */}
            {isSelected && (
              <div 
                className="absolute top-1/2 left-1/2 h-[1px] bg-gradient-to-r from-neon-cyan to-transparent origin-left -z-10"
                style={{ 
                  width: `${radius}px`,
                  transform: `translateY(-50%) rotate(${angleDegrees + 180}deg)`
                }}
              />
            )}
            
            <GlowIcon
              isSelected={isSelected}
              size="md"
              className={cn("bg-ink-950/40 backdrop-blur-md shadow-[0_4px_10px_rgba(0,0,0,0.4)] border-white/20", isSelected ? "scale-110" : "")}
            >
              <img 
                src={domain.iconPath} 
                alt={domain.name}
                className={cn(
                  "size-7 relative z-10 transition-all duration-300",
                  isSelected ? "brightness-[2.5] contrast-[1.2] drop-shadow-[0_0_15px_rgba(55,230,255,1)]" : "brightness-[2] contrast-[1.1]"
                )}
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
            </GlowIcon>
            
            <span className={cn(
              "absolute top-full mt-1.5 text-[9px] font-bold text-center leading-tight tracking-wider uppercase w-20 transition-all duration-300",
              isSelected ? "text-neon-cyan drop-shadow-[0_0_5px_rgba(55,230,255,0.8)]" : "text-white/70"
            )}>
              {domain.name}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <span suppressHydrationWarning className="text-[0.65rem] font-medium text-white/80 tracking-wide w-12 text-center">
      {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
    </span>
  );
}

function DefaultWelcomeScreen() {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="flex h-full flex-col items-center px-6 pt-10 text-center"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0, y: 10 }}
    >
      <div className="relative mb-6 size-28">
        <div className="absolute inset-0 rounded-full border border-neon-blue/20 animate-[spin_4s_linear_infinite]" />
        <div className="absolute inset-2 rounded-full border border-neon-cyan/20 animate-[spin_3s_linear_infinite_reverse]" />
        <div className="absolute inset-4 rounded-full border border-neon-violet/10 animate-[spin_6s_linear_infinite]" />
        <img alt="AshKara Core" className="absolute inset-6 object-contain animate-pulse drop-shadow-glow" src="/brand/ashkara-logo.svg" />
        
        {/* Ambient Particles */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute size-1 rounded-full bg-neon-cyan shadow-[0_0_10px_#37e6ff]"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.8, 0.2],
              x: [0, (Math.random() - 0.5) * 40, 0],
              y: [0, (Math.random() - 0.5) * 40, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
            style={{
              left: '50%',
              top: '50%',
              marginLeft: -2,
              marginTop: -2,
            }}
          />
        ))}
      </div>
      <h3 className="mb-2 text-2xl font-bold tracking-tight text-white">Engineering Universe</h3>
      <p className="mb-8 text-sm text-ink-300">Explore Industry-Level Engineering Domains</p>

      <GlassCard variant="default" className="mb-6 w-full p-5 text-left">
        <p className="mb-3 text-xs font-bold uppercase text-neon-cyan tracking-wider">System Capabilities</p>
        <ul className="space-y-3">
          <li className="flex items-center gap-3 text-sm text-white/90">
            <CheckCircle2 className="size-4 text-neon-blue drop-shadow-[0_0_8px_rgba(0,163,255,0.6)]" /> 12 Engineering Domains
          </li>
          <li className="flex items-center gap-3 text-sm text-white/90">
            <CheckCircle2 className="size-4 text-neon-blue drop-shadow-[0_0_8px_rgba(0,163,255,0.6)]" /> Modern Technology Stack
          </li>
          <li className="flex items-center gap-3 text-sm text-white/90">
            <CheckCircle2 className="size-4 text-neon-blue drop-shadow-[0_0_8px_rgba(0,163,255,0.6)]" /> 150+ Project Architecture
          </li>
        </ul>
      </GlassCard>

      <div className="mt-auto flex animate-pulse items-center justify-center gap-2 text-xs font-mono text-neon-cyan/70 pb-4">
        <div className="size-1.5 rounded-full bg-neon-cyan shadow-[0_0_8px_#37e6ff]" />
        Waiting for Engineering Module...
      </div>
    </motion.div>
  );
}

function DomainScreen({ domain }: { domain: Domain }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, x: -20, transition: { duration: 0.2 } }}
      variants={staggerContainer}
      className="flex flex-col pb-6"
    >
      <motion.div variants={fadeUp} className="px-4">
        <div className="relative h-44 w-full overflow-hidden rounded-[1.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/10 bg-ink-900">
          <img
            alt={domain.name}
            className="h-full w-full object-cover"
            src={domain.imagePath}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
        </div>
      </motion.div>

      <motion.div variants={fadeUp} className="relative z-10 -mt-10 px-6">
        <div className="mb-4 flex size-16 items-center justify-center rounded-xl border border-white/20 bg-ink-900/90 shadow-glass backdrop-blur-xl overflow-hidden">
          <img alt={`${domain.name} icon`} className="size-8 drop-shadow-glow" src={domain.iconPath} 
            onError={(e) => {
               e.currentTarget.src = "/brand/ashkara-logo.svg";
            }}
          />
        </div>
        <h2 className="text-2xl font-bold leading-tight text-white">{domain.name}</h2>
        <p className="mt-2 text-sm leading-relaxed text-white/70">{domain.description}</p>
      </motion.div>

      <div className="mt-6 space-y-7 px-6">
        {/* Technology Stack */}
        <motion.div variants={fadeUp}>
          <h4 className="mb-3 text-[10px] font-bold uppercase tracking-widest text-neon-cyan">Technology Stack</h4>
          <div className="flex flex-wrap gap-2">
            {domain.technologies.map((tech) => (
              <div
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white shadow-glass backdrop-blur-md hover:border-white/20 transition-colors transition duration-base ease-premium"
                key={tech.name}
              >
                <TechLogo technology={tech.name} showLabel={false} iconClassName="size-4" />
                {tech.name}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Example Projects */}
        <motion.div variants={fadeUp}>
          <h4 className="mb-3 text-[10px] font-bold uppercase tracking-widest text-neon-cyan">Example Projects</h4>
          <div className="grid grid-cols-1 gap-2">
            {domain.projects.map((proj) => (
              <div
                className="rounded-lg border border-white/10 bg-gradient-to-r from-white/[0.05] to-transparent px-4 py-2.5 text-sm font-medium text-white shadow-glass"
                key={proj}
              >
                {proj}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Industry Applications & Careers */}
        <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="mb-3 text-[10px] font-bold uppercase tracking-widest text-neon-cyan">Industries</h4>
            <div className="flex flex-wrap gap-1.5">
              {domain.industryApplications.map((ind) => (
                <span
                  className="rounded bg-neon-blue/10 border border-neon-blue/30 px-2 py-1 text-[10px] font-semibold text-neon-blue shadow-[0_0_8px_rgba(0,163,255,0.2)]"
                  key={ind}
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-3 text-[10px] font-bold uppercase tracking-widest text-neon-cyan">Careers</h4>
            <ul className="space-y-2">
              {domain.careerOpportunities.map((car) => (
                <li
                  className="flex items-center gap-2 text-xs font-medium text-white/80 before:size-1 before:rounded-full before:bg-white/40"
                  key={car}
                >
                  {car}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Build With AshKara */}
        <GlassCard variant="feature" className="p-5">
          <h4 className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-white">
            <Sparkles className="size-4 text-neon-cyan animate-pulse" /> Build With AshKara
          </h4>
          <div className="grid grid-cols-2 gap-y-3 gap-x-2">
            {[
              "Source Code",
              "Documentation",
              "PPT",
              "GitHub Repo",
              "Deployment",
              "Tech Report",
              "Viva Prep",
              "Guidance",
            ].map((item) => (
              <div className="flex items-center gap-2 text-xs text-white font-medium" key={item}>
                <div className="flex size-4 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-500/50">
                  <Check className="size-2.5 shrink-0 text-emerald-400" />
                </div>
                {item}
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </motion.div>
  );
}

function AshKaraOS({ selectedDomain }: { selectedDomain: Domain | null }) {
  const [isLoading, setIsLoading] = useState(false);
  const [displayDomain, setDisplayDomain] = useState<Domain | null>(selectedDomain);

  // Handle 300ms transition
  useEffect(() => {
    if (selectedDomain?.id !== displayDomain?.id) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setDisplayDomain(selectedDomain);
        setIsLoading(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [selectedDomain, displayDomain]);

  return (
    <div className="relative mx-auto flex h-[820px] w-full max-w-[380px] flex-col overflow-hidden rounded-[3rem] border-[8px] border-ink-950 bg-ink-950 shadow-[0_30px_60px_rgba(0,0,0,0.7),inset_0_0_20px_rgba(255,255,255,0.05)] ring-1 ring-white/20">
      {/* Android Status Bar */}
      <div className="absolute inset-x-0 top-0 z-50 flex items-center justify-between px-6 pt-3 pb-2 bg-gradient-to-b from-ink-950/90 to-transparent">
        <LiveClock />
        <div className="h-6 w-28 rounded-full bg-black/90 shadow-inner border border-white/5 backdrop-blur-md flex items-center justify-between px-2">
           <div className="size-2 rounded-full bg-white/20" />
           <div className="size-2 rounded-full bg-white/20" />
        </div> {/* Dynamic Island */}
        <div className="flex items-center gap-1.5 text-white/90 w-12 justify-end">
          <Signal className="size-3.5" />
          <Wifi className="size-3.5" />
          <Battery className="size-3.5" />
        </div>
      </div>

      {/* OS Content Area */}
      <div className="relative flex-1 overflow-y-auto overflow-x-hidden pt-14 scrollbar-hide">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              animate={{ opacity: 1 }}
              className="flex h-full flex-col items-center justify-center gap-4 text-neon-blue"
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              key="loading"
              transition={{ duration: 0.15 }}
            >
              <div className="relative size-12">
                <div className="absolute inset-0 rounded-full border-2 border-neon-blue/30 border-t-neon-blue animate-spin" />
                <div className="absolute inset-2 rounded-full border-2 border-neon-cyan/20 border-b-neon-cyan animate-[spin_1.5s_linear_infinite_reverse]" />
              </div>
              <p className="text-xs font-mono tracking-widest uppercase">Loading Engineering Module...</p>
            </motion.div>
          ) : !displayDomain ? (
            <DefaultWelcomeScreen key="welcome" />
          ) : (
            <DomainScreen domain={displayDomain} key={displayDomain.id} />
          )}
        </AnimatePresence>
      </div>
      
      {/* Home Indicator line */}
      <div className="absolute bottom-2 left-1/2 w-32 -translate-x-1/2 h-1.5 rounded-full bg-white/30" />
    </div>
  );
}

export function EngineeringUniverseSection() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedDomain, setSelectedDomain] = useState<Domain | null>(null);

  // Group domains by orbit
  const innerDomains = useMemo(() => domains.filter((d) => d.orbit === "inner"), []);
  const middleDomains = useMemo(() => domains.filter((d) => d.orbit === "middle"), []);
  const outerDomains = useMemo(() => domains.filter((d) => d.orbit === "outer"), []);

  return (
    <Section
      aria-labelledby="engineering-universe-title"
      className="overflow-hidden py-24 sm:py-32 relative"
      id="engineering-universe"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgb(139_92_246/0.08),transparent_50%),radial-gradient(ellipse_at_bottom,rgb(0_163_255/0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-radial-grid bg-[length:32px_32px] opacity-[0.15]" />
        
        {/* Subtle Star Particles */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          {Array.from({ length: 40 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute rounded-full bg-white animate-pulse"
              style={{
                width: Math.random() > 0.5 ? 2 : 1,
                height: Math.random() > 0.5 ? 2 : 1,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.4 + 0.1,
                animationDuration: `${Math.random() * 4 + 2}s`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <Container>
        <div className="mb-16 text-center lg:text-left">
          <p className="text-eyebrow font-semibold uppercase text-neon-cyan">Engineering Universe</p>
          <h2
            className="mt-3 text-4xl font-semibold leading-tight text-white sm:text-5xl"
            id="engineering-universe-title"
          >
            Explore The Core
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-12 lg:gap-8 min-h-[820px]">
          
          {/* Left Side: Orbit System (Tablet & Desktop) / Static Grid (Mobile) */}
          <div className="relative flex-1 w-full flex flex-col items-center justify-center min-h-[500px] lg:min-h-full">
            
            {/* Mobile Grid View */}
            <MobileEngineeringUniverse 
              selectedDomain={selectedDomain} 
              setSelectedDomain={setSelectedDomain} 
              domains={domains} 
            />

            {/* Desktop & Tablet Orbit View */}
            <div 
              className="hidden md:flex relative w-full max-w-[600px] aspect-square rounded-full items-center justify-center transition-transform duration-300 md:scale-90 lg:scale-100"
              style={{ containerType: 'inline-size' }}
            >
              
              {/* Static Orbit Rings Backgrounds */}
              <svg className="absolute inset-0 size-full pointer-events-none" viewBox="0 0 100 100" style={{ filter: 'drop-shadow(0 0 2px rgba(34,211,238,0.2))' }}>
                <defs>
                  <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22D3EE" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r={ORBIT_CONFIG.outer.radius} fill="none" stroke="url(#orbitGrad)" strokeWidth="0.15" className="opacity-[0.16]" />
                <circle cx="50" cy="50" r={ORBIT_CONFIG.middle.radius} fill="none" stroke="url(#orbitGrad)" strokeWidth="0.15" className="opacity-[0.22]" />
                <circle cx="50" cy="50" r={ORBIT_CONFIG.inner.radius} fill="none" stroke="url(#orbitGrad)" strokeWidth="0.15" className="opacity-30" />
              </svg>

              {/* Central Core */}
              <button
                className="absolute z-40 flex size-[150px] items-center justify-center rounded-full bg-ink-950/60 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.8),inset_0_0_20px_rgba(55,230,255,0.15)] transition-transform duration-500 hover:scale-105 outline-none group border border-white/10 transition duration-base ease-premium"
                onClick={() => setSelectedDomain(null)}
                title="Return to AshKara OS Home"
              >
                {/* Core Rings (Rotating Energy Rings) */}
                <div className="absolute inset-[-15px] rounded-full border border-neon-blue/30 group-hover:border-neon-blue/60 transition-colors duration-500 animate-[spin_4s_linear_infinite] transition duration-base ease-premium" />
                <div className="absolute inset-[-30px] rounded-full border-[2px] border-neon-cyan/20 border-dashed animate-[spin_6s_linear_infinite_reverse]" />
                <div className="absolute inset-[-45px] rounded-full border border-neon-violet/20 animate-[spin_8s_linear_infinite]" />
                
                {/* Breathing Glow & Energy Pulse */}
                <div className="absolute inset-[-60px] rounded-full bg-neon-cyan/10 blur-3xl animate-[pulse_5s_ease-in-out_infinite]" />
                <div className="absolute inset-0 rounded-full bg-neon-blue/30 blur-2xl animate-[pulse_3s_ease-in-out_infinite]" />
                
                {/* Pulsing Halo */}
                <div className="absolute inset-[-6px] rounded-full border border-neon-cyan/40 animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]" />
                
                {/* Particle Emitter (Subtle Energy Animation) */}
                <div className="absolute inset-[-40px] rounded-full border border-transparent border-t-neon-cyan/50 animate-[spin_2.5s_linear_infinite]" />
                <div className="absolute inset-[-25px] rounded-full border border-transparent border-b-neon-blue/50 animate-[spin_2s_linear_infinite_reverse]" />
                
                {/* Glass Core Overlay */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-md" />
                
                <img src="/brand/ashkara-logo.svg" alt="AshKara Core" className="size-20 drop-shadow-[0_0_25px_rgba(255,255,255,1)] relative z-10" />
              </button>

              {/* Multi-Ring Orbits */}
              {[
                { type: "inner", domains: innerDomains, config: ORBIT_CONFIG.inner, zIndex: 30 },
                { type: "middle", domains: middleDomains, config: ORBIT_CONFIG.middle, zIndex: 20 },
                { type: "outer", domains: outerDomains, config: ORBIT_CONFIG.outer, zIndex: 10 },
              ].map(({ type, domains: ringDomains, config, zIndex }) => (
                <motion.div
                  key={type}
                  animate={shouldReduceMotion ? undefined : { rotate: 360 }}
                  className={`absolute inset-0 pointer-events-none z-${zIndex}`}
                  transition={{ duration: config.duration, ease: "linear", repeat: Infinity }}
                >
                  
                  {/* Glowing Connection Beam */}
                  {selectedDomain && selectedDomain.orbit === type && (
                    <motion.div
                       initial={{ width: 0, opacity: 0 }}
                       animate={{ width: `${config.radius}cqi`, opacity: 1 }}
                       transition={{ duration: 0.4, ease: "easeOut" }}
                       className="absolute left-1/2 top-1/2 h-[2px] origin-left bg-gradient-to-r from-neon-blue to-neon-cyan shadow-[0_0_15px_rgba(55,230,255,1)] z-20"
                       style={{ transform: `rotate(${selectedDomain.angle}deg)` }}
                    />
                  )}

                  {ringDomains.map((domain) => {
                    const isSelected = selectedDomain?.id === domain.id;
                    
                    // Outward label positioning based on angle
                    const getLabelStyle = (angle: number) => {
                      const base = { position: 'absolute' as const, width: '120px', transition: 'all 300ms' };
                      if (angle === 0 || angle === 15 || angle === 45 || angle === 315) {
                        return { ...base, left: 'calc(100% + 16px)', top: '50%', transform: 'translateY(-50%)', textAlign: 'left' as const };
                      }
                      if (angle === 180 || angle === 195 || angle === 135 || angle === 225) {
                        return { ...base, right: 'calc(100% + 16px)', top: '50%', transform: 'translateY(-50%)', textAlign: 'right' as const };
                      }
                      if (angle === 90 || angle === 105) {
                        return { ...base, top: 'calc(100% + 16px)', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' as const };
                      }
                      if (angle === 270 || angle === 285) {
                        return { ...base, bottom: 'calc(100% + 16px)', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' as const };
                      }
                      return { ...base, top: 'calc(100% + 16px)', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' as const };
                    };

                    return (
                      <motion.button
                        key={domain.id}
                        animate={shouldReduceMotion ? undefined : { rotate: -360 }}
                        transition={{ duration: config.duration, ease: "linear", repeat: Infinity }}
                        className={cn(
                          "absolute left-1/2 top-1/2 outline-none pointer-events-auto group",
                          isSelected ? "z-30" : "z-20"
                        )}
                        style={{
                          marginLeft: "-36px",
                          marginTop: "-36px",
                          x: `calc(${Math.cos((domain.angle * Math.PI) / 180)} * ${config.radius}cqi)`,
                          y: `calc(${Math.sin((domain.angle * Math.PI) / 180)} * ${config.radius}cqi)`,
                        }}
                        onClick={() => setSelectedDomain(domain)}
                        title={domain.name}
                      >
                        <GlowIcon 
                          isSelected={isSelected} 
                          size="lg" 
                          className="bg-ink-950/40 backdrop-blur-md shadow-[0_4px_15px_rgba(0,0,0,0.4)] border-white/20"
                        >
                          <img 
                            src={domain.iconPath} 
                            className={cn(
                              "size-9 relative z-10 transition-all duration-300", 
                              isSelected ? "brightness-[2.5] contrast-[1.2] drop-shadow-[0_0_20px_rgba(55,230,255,1)]" : "brightness-[2] contrast-[1.1] group-hover:brightness-[2.5] group-hover:drop-shadow-[0_0_15px_rgba(55,230,255,0.8)]"
                            )}
                            alt={domain.name}
                            onError={(e) => {
                               e.currentTarget.style.display = "none";
                            }}
                          />
                        </GlowIcon>
                        {/* Domain Name Label */}
                        <div 
                          className={cn(
                            "text-[11px] font-bold tracking-widest uppercase drop-shadow-glass",
                            isSelected ? "text-neon-cyan drop-shadow-[0_0_8px_rgba(55,230,255,0.8)]" : "text-white/80 group-hover:text-white"
                          )}
                          style={getLabelStyle(domain.angle)}
                        >
                          {domain.name}
                        </div>
                      </motion.button>
                    );
                  })}
                </motion.div>
              ))}
              
            </div>
          </div>

          {/* Right Side: AshKara OS */}
          <div className="w-full lg:w-[420px] shrink-0 flex justify-center z-20 pb-16 lg:pb-0">
            <AshKaraOS selectedDomain={selectedDomain} />
          </div>
          
        </div>
      </Container>
    </Section>
  );
}
