import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  Cpu,
  Database,
  Wifi,
  Rocket,
  Activity,
  MessageCircle,
  PhoneCall,
  Instagram,
  Mail
} from "lucide-react";
import { useEffect, useState } from "react";
import { Container } from "../components/container";
import { GlowEffect } from "../components/glow-effect";
import { GradientText } from "../components/gradient-text";
import { Section } from "../components/section";
import { GlowButton } from "../components/ui/glow-button";
import { CTAButton } from "../components/ui/cta-button";
import { GlowBadge } from "../components/ui/glow-badge";
import { fadeUp, staggerContainer } from "../animations/transitions";
import { siteConfig } from "../config/site";
import { cn } from "../utils/cn";

const rotatingTitles = [
  "AI Projects",
  "MERN Stack",
  "IoT Systems",
  "Machine Learning",
  "Cyber Security",
  "Cloud Computing",
  "ECE Projects",
  "EEE Projects",
  "Mechanical Projects",
  "Civil Projects",
  "Android Development",
] as const;

const heroStats = [
  "Growing Project Library",
  "Multiple Engineering Domains",
  "Modern Technology Stack",
  "Documentation & Deployment Support",
] as const;

function PhoenixBackground() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgb(0_163_255/0.18),transparent_30rem),radial-gradient(circle_at_82%_20%,rgb(139_92_246/0.16),transparent_32rem),linear-gradient(135deg,#020611_0%,#061326_48%,#050816_100%)]" />
      <motion.div
        animate={shouldReduceMotion ? undefined : { backgroundPosition: ["0px 0px", "64px 37px"] }}
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(30deg, rgb(55 230 255 / 0.18) 12%, transparent 12.5%, transparent 87%, rgb(55 230 255 / 0.18) 87.5%), linear-gradient(150deg, rgb(55 230 255 / 0.18) 12%, transparent 12.5%, transparent 87%, rgb(55 230 255 / 0.18) 87.5%), linear-gradient(30deg, rgb(55 230 255 / 0.18) 12%, transparent 12.5%, transparent 87%, rgb(55 230 255 / 0.18) 87.5%), linear-gradient(150deg, rgb(55 230 255 / 0.18) 12%, transparent 12.5%, transparent 87%, rgb(55 230 255 / 0.18) 87.5%)",
          backgroundPosition: "0 0, 0 0, 32px 56px, 32px 56px",
          backgroundSize: "64px 112px",
        }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      />
      <div className="absolute left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-blue/10 blur-3xl" />
    </div>
  );
}



function AnimatedHeading() {
  const words = ["Build", "Projects", "That"];

  return (
    <h1 className="mt-7 text-balance text-[clamp(2.5rem,5.5vw,5rem)] font-semibold leading-[0.92] text-ink-50 lg:text-left">
      <span className="block">
        {words.map((word, index) => (
          <motion.span
            animate={{ opacity: 1, y: 0 }}
            className="mr-4 inline-block"
            initial={{ opacity: 0, y: 28 }}
            key={word}
            transition={{ delay: index * 0.08, duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
            {index < words.length - 1 ? " " : ""}
          </motion.span>
        ))}
        {" "}
      </span>
      <motion.span
        animate={{ opacity: 1, y: 0 }}
        className="block"
        initial={{ opacity: 0, y: 28 }}
        transition={{ delay: 0.28, duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
      >
        <GradientText>Build Careers.</GradientText>
      </motion.span>
    </h1>
  );
}

function RotatingTitle() {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;
    const intervalId = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % rotatingTitles.length);
    }, 3000);
    return () => window.clearInterval(intervalId);
  }, [shouldReduceMotion]);

  return (
    <span className="inline-flex min-h-8 items-center overflow-hidden align-bottom text-neon-cyan sm:min-h-10">
      <AnimatePresence mode="wait">
        <motion.span
          animate={{ opacity: 1, y: 0 }}
          className="inline-block"
          exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -16 }}
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          key={rotatingTitles[activeIndex]}
          transition={{ duration: shouldReduceMotion ? 0 : 0.36, ease: [0.22, 1, 0.36, 1] }}
        >
          {rotatingTitles[activeIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}



function HeroStats() {
  return (
    <dl className="grid gap-3 sm:grid-cols-2 lg:text-left mt-8">
      {heroStats.map((stat) => (
        <motion.div
          className="rounded-md border border-white/10 bg-white/[0.055] p-4 shadow-glass backdrop-blur-xl transition duration-base ease-premium hover:border-neon-blue/40 hover:bg-white/[0.08]"
          key={stat}
          whileHover={{ y: -3 }}
        >
          <dt className="sr-only">Platform capability</dt>
          <dd className="text-sm font-semibold text-ink-50">{stat}</dd>
        </motion.div>
      ))}
    </dl>
  );
}

// ---- MONITOR BOOT SEQUENCE ----

function MonitorBootSequence({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const sequence = [
      setTimeout(() => setStep(1), 400),
      setTimeout(() => setStep(2), 800),
      setTimeout(() => setStep(3), 1200),
      setTimeout(() => setStep(4), 1600),
      setTimeout(() => onComplete(), 2000),
    ];
    return () => sequence.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <motion.div className="size-full bg-black flex flex-col items-center justify-center font-mono text-xs text-white/70 relative">
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <div className="size-1.5 rounded-full bg-neon-blue shadow-[0_0_8px_#00a3ff] animate-pulse" />
        <span>SYS_PWR</span>
      </div>
      
      <AnimatePresence>
        {step >= 1 && (
          <motion.img 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            src="/brand/ashkara-logo.svg" 
            className="size-16 mb-8 opacity-80" 
            alt="AshKara" 
          />
        )}
      </AnimatePresence>
      
      <div className="flex flex-col items-start w-64 space-y-2">
        {step >= 1 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{">"} Initializing AshKara Command Center...</motion.div>}
        {step >= 2 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{">"} Loading Engineering Modules...</motion.div>}
        {step >= 3 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{">"} Connecting AI Systems...</motion.div>}
        {step >= 4 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-neon-cyan">{">"} System Ready.</motion.div>}
      </div>
    </motion.div>
  );
}

// ---- SLIDESHOW COMPONENTS ----

function SlideWelcome() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="size-full flex flex-col items-center justify-center bg-radial-grid bg-[length:32px_32px] opacity-90 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,163,255,0.1)_0%,transparent_70%)]" />
      <div className="relative size-28 mb-6 z-10">
        <div className="absolute inset-0 rounded-full border border-neon-blue/30 animate-[spin_6s_linear_infinite]" />
        <div className="absolute inset-2 rounded-full border border-neon-cyan/20 border-dashed animate-[spin_8s_linear_infinite_reverse]" />
        <img src="/brand/ashkara-logo.svg" className="absolute inset-5" alt="AshKara Logo" />
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight z-10 drop-shadow-glass">AshKara Command Center</h2>
      <p className="text-neon-cyan font-mono text-[10px] sm:text-xs tracking-widest z-10">ENGINEERING_THE_FUTURE // ONLINE</p>
      
      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end z-10">
        <div className="space-y-2">
          <div className="h-1 w-24 bg-neon-blue rounded-full shadow-[0_0_10px_#00a3ff]" />
          <div className="h-1 w-16 bg-white/20 rounded-full" />
        </div>
        <div className="text-[10px] text-white/50 font-mono text-right leading-relaxed">
          MEM: 14.2TB / 20.0TB<br/>
          CPU: 12% // ACTIVE
        </div>
      </div>
    </motion.div>
  );
}

function SlideAI() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="size-full bg-ink-950 p-4 sm:p-6 flex flex-col sm:flex-row gap-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.1)_0%,transparent_50%)]" />
      
      <div className="w-full sm:w-2/5 flex flex-col justify-between relative z-10 bg-black/40 border border-white/10 rounded-lg p-4 backdrop-blur-md">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Cpu className="size-4 text-neon-purple" />
            <h3 className="text-neon-purple font-mono text-[10px] font-bold tracking-widest">AI_CORE_V4</h3>
          </div>
          <h2 className="text-xl font-bold text-white mb-2">Artificial Intelligence</h2>
          <p className="text-white/60 text-[10px] leading-relaxed">Neural network inference and unstructured data prediction dashboard.</p>
        </div>
        
        <div className="space-y-3 mt-4">
          <div>
            <div className="flex justify-between text-[10px] text-white/80 mb-1"><span>Prediction Conf</span><span className="text-neon-cyan">99.4%</span></div>
            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div className="h-full bg-neon-purple" initial={{ width: "0%" }} animate={{ width: "99.4%" }} transition={{ duration: 1.5, ease: "easeOut" }} />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-[10px] text-white/80 mb-1"><span>GPU Activity</span><span className="text-neon-cyan">87%</span></div>
            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div className="h-full bg-neon-cyan" initial={{ width: "0%" }} animate={{ width: "87%" }} transition={{ duration: 1.5, ease: "easeOut" }} />
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex-1 relative z-10 flex items-center justify-center p-4">
        {/* Network Graph Vis */}
        <div className="relative size-full max-w-[200px] max-h-[200px]">
          <svg viewBox="0 0 100 100" className="size-full overflow-visible">
            {/* Connections */}
            <motion.line x1="50" y1="20" x2="20" y2="50" stroke="#8b5cf6" strokeWidth="0.5" strokeOpacity="0.4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
            <motion.line x1="50" y1="20" x2="80" y2="50" stroke="#8b5cf6" strokeWidth="0.5" strokeOpacity="0.4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.2 }} />
            <motion.line x1="20" y1="50" x2="50" y2="80" stroke="#37e6ff" strokeWidth="0.5" strokeOpacity="0.4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.4 }} />
            <motion.line x1="80" y1="50" x2="50" y2="80" stroke="#37e6ff" strokeWidth="0.5" strokeOpacity="0.4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.6 }} />
            <motion.line x1="20" y1="50" x2="80" y2="50" stroke="#8b5cf6" strokeWidth="0.5" strokeOpacity="0.2" />
            
            {/* Nodes */}
            <circle cx="50" cy="20" r="3" fill="#8b5cf6" className="animate-pulse" />
            <circle cx="20" cy="50" r="3" fill="#37e6ff" />
            <circle cx="80" cy="50" r="3" fill="#37e6ff" />
            <circle cx="50" cy="80" r="4" fill="#00a3ff" className="animate-pulse" />
          </svg>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8px] font-mono text-white/40">EPOCH 402</div>
        </div>
      </div>
    </motion.div>
  );
}

function SlideIoT() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="size-full bg-ink-950 p-4 sm:p-6 flex flex-col-reverse sm:flex-row gap-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(52,211,153,0.1)_0%,transparent_50%)]" />
      
      <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-3 relative z-10">
        <div className="border border-white/10 bg-black/40 rounded-lg p-3 flex flex-col justify-between backdrop-blur-md">
          <div className="text-[9px] text-white/50 font-mono flex justify-between"><span>NODE_1</span><span className="text-emerald-400">ON</span></div>
          <div className="text-xl font-bold text-emerald-400">24.2°C</div>
          <div className="h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
            <motion.div className="h-full bg-emerald-400" animate={{ width: ["40%", "60%", "40%"] }} transition={{ duration: 4, repeat: Infinity }} />
          </div>
        </div>
        <div className="border border-white/10 bg-black/40 rounded-lg p-3 flex flex-col justify-between backdrop-blur-md">
          <div className="text-[9px] text-white/50 font-mono flex justify-between"><span>NODE_2</span><span className="text-emerald-400">ON</span></div>
          <div className="text-xl font-bold text-emerald-400">42% Hum</div>
          <div className="h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
            <motion.div className="h-full bg-emerald-400" animate={{ width: ["70%", "85%", "70%"] }} transition={{ duration: 5, repeat: Infinity }} />
          </div>
        </div>
        <div className="col-span-2 border border-white/10 bg-black/40 rounded-lg p-3 relative overflow-hidden backdrop-blur-md flex items-center justify-between">
          <div className="absolute inset-0 bg-radial-grid bg-[length:12px_12px] opacity-20" />
          <div className="relative z-10 flex flex-col gap-1">
            <span className="text-neon-cyan font-mono text-[9px]">MQTT_BROKER_SYNC</span>
            <span className="text-xs font-medium text-white">Global Sensor Array Active</span>
          </div>
          <Wifi className="relative z-10 size-5 text-emerald-400 animate-pulse" />
        </div>
      </div>
      
      <div className="w-full sm:w-2/5 flex flex-col justify-center relative z-10 p-4 border border-white/10 bg-black/40 rounded-lg backdrop-blur-md">
        <div className="flex items-center gap-2 mb-3">
          <Activity className="size-4 text-emerald-400" />
          <h3 className="text-emerald-400 font-mono text-[10px] font-bold tracking-widest">IOT_EDGE</h3>
        </div>
        <h2 className="text-xl font-bold text-white mb-2">Internet of Things</h2>
        <p className="text-white/60 text-[10px] leading-relaxed">Real-time telemetry, embedded systems logic, and global edge-node synchronization.</p>
      </div>
    </motion.div>
  );
}

function SlideCloud() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="size-full bg-ink-950 p-6 relative overflow-hidden flex flex-col sm:flex-row gap-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,163,255,0.08)_0%,transparent_80%)]" />
      
      <div className="w-full sm:w-1/3 relative z-10 flex flex-col justify-center border border-white/10 bg-black/40 rounded-lg p-4 backdrop-blur-md h-full">
        <div className="flex items-center gap-2 mb-3">
          <Database className="size-4 text-neon-blue" />
          <h3 className="text-neon-blue font-mono text-[10px] font-bold tracking-widest">AWS_PIPELINE</h3>
        </div>
        <h2 className="text-xl font-bold text-white mb-2">Cloud Computing</h2>
        <p className="text-white/60 text-[10px] leading-relaxed mb-4">Scalable serverless infrastructure, load balancing, and global traffic routing.</p>
        
        <div className="mt-auto space-y-2">
          <div className="flex justify-between items-center text-[9px] font-mono text-white/50 border-b border-white/10 pb-1">
            <span>TRAFFIC</span>
            <span className="text-neon-cyan text-xs">24.5k Req/s</span>
          </div>
          <div className="flex justify-between items-center text-[9px] font-mono text-white/50 border-b border-white/10 pb-1">
            <span>UPTIME</span>
            <span className="text-emerald-400 text-xs">99.99%</span>
          </div>
        </div>
      </div>
      
      <div className="flex-1 relative z-10 border border-white/10 bg-black/40 rounded-lg backdrop-blur-md overflow-hidden p-4 flex items-center justify-center">
        <div className="relative w-full max-w-[200px] aspect-video">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 size-8 rounded border border-white/20 bg-white/5 flex items-center justify-center text-[8px] font-mono shadow-glass">LB</div>
          <div className="absolute left-1/2 top-0 -translate-x-1/2 size-8 rounded border border-neon-blue/30 bg-neon-blue/10 flex items-center justify-center text-[8px] font-mono shadow-[0_0_10px_rgba(0,163,255,0.2)]">API_1</div>
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 size-8 rounded border border-neon-blue/30 bg-neon-blue/10 flex items-center justify-center text-[8px] font-mono shadow-[0_0_10px_rgba(0,163,255,0.2)]">API_2</div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 size-8 rounded border border-neon-purple/30 bg-neon-purple/10 flex items-center justify-center text-[8px] font-mono shadow-[0_0_10px_rgba(139,92,246,0.2)]">DB</div>
          
          <svg className="absolute inset-0 size-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path d="M 15 50 Q 30 50 50 20" fill="none" stroke="#00a3ff" strokeWidth="0.5" strokeDasharray="2 2" animate={{ strokeDashoffset: [10, 0] }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} />
            <motion.path d="M 15 50 Q 30 50 50 80" fill="none" stroke="#00a3ff" strokeWidth="0.5" strokeDasharray="2 2" animate={{ strokeDashoffset: [10, 0] }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} />
            <motion.path d="M 50 20 Q 70 50 85 50" fill="none" stroke="#8b5cf6" strokeWidth="0.5" strokeDasharray="2 2" animate={{ strokeDashoffset: [10, 0] }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} />
            <motion.path d="M 50 80 Q 70 50 85 50" fill="none" stroke="#8b5cf6" strokeWidth="0.5" strokeDasharray="2 2" animate={{ strokeDashoffset: [10, 0] }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

function SlideMechanical() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="size-full bg-ink-950 p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(55,230,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(55,230,255,0.03)_1px,transparent_1px)] bg-[length:20px_20px]" />
      
      <div className="w-full sm:w-2/5 relative z-10 border border-white/10 bg-black/40 rounded-lg p-4 backdrop-blur-md h-full flex flex-col justify-center">
        <h2 className="text-xl font-bold text-white mb-2">Mechanical Systems</h2>
        <p className="text-white/60 text-[10px] mb-6 leading-relaxed">Advanced CAD rendering, thermal flow analysis, and precision rotational physics modeling.</p>
        
        <div className="space-y-3">
          <div className="bg-white/5 border border-white/10 rounded p-2 flex justify-between items-center">
            <span className="text-[9px] text-white/50 tracking-wider">TORQUE (Nm)</span>
            <span className="font-mono text-neon-cyan text-sm">420.5</span>
          </div>
          <div className="bg-white/5 border border-white/10 rounded p-2 flex justify-between items-center">
            <span className="text-[9px] text-white/50 tracking-wider">RPM MAX</span>
            <span className="font-mono text-neon-cyan text-sm">3450</span>
          </div>
        </div>
      </div>
      
      <div className="flex-1 relative z-10 flex items-center justify-center border border-white/10 bg-black/40 rounded-lg backdrop-blur-md h-full w-full">
        <div className="relative size-32 sm:size-40">
          <motion.div className="absolute inset-0 rounded-full border border-white/20 border-dashed" animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} />
          <motion.div className="absolute inset-4 rounded-full border-[4px] border-neon-cyan/40 border-t-transparent" animate={{ rotate: -360 }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} />
          <motion.div className="absolute inset-10 rounded-full border-[2px] border-neon-blue/60 border-b-transparent" animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} />
          <div className="absolute inset-16 rounded-full border border-white/30 flex items-center justify-center bg-white/5">
            <div className="size-1.5 bg-neon-cyan rounded-full shadow-[0_0_8px_#37e6ff]" />
          </div>
          
          <div className="absolute top-1/2 -right-6 -translate-y-1/2 h-px w-10 bg-neon-cyan/50" />
          <div className="absolute -right-16 top-1/2 -translate-y-1/2 text-[8px] text-neon-cyan font-mono">AXIS_X_ALIGN</div>
        </div>
      </div>
    </motion.div>
  );
}

function SlideCivil() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="size-full bg-ink-950 p-4 sm:p-6 flex flex-col-reverse sm:flex-row gap-4 relative overflow-hidden">
      <div className="absolute inset-0 border-[0.5px] border-white/[0.03] bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:16px_16px]" />
      
      <div className="flex-1 relative z-10 flex items-center justify-center border border-white/10 bg-black/40 rounded-lg backdrop-blur-md p-4">
        {/* Structural Graph */}
        <div className="relative w-full max-w-[200px] h-24 border-b-2 border-white/20 flex items-end justify-between px-2 pb-1">
          {Array.from({length: 8}).map((_, i) => (
            <motion.div key={i} className="w-4 bg-neon-blue/40 border border-neon-blue/60 rounded-t-sm relative" animate={{ height: [`${30 + Math.random()*50}%`, `${30 + Math.random()*50}%`] }} transition={{ duration: 3, repeat: Infinity, repeatType: "mirror", delay: i*0.2 }}>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[6px] font-mono text-neon-cyan">P{i}</div>
            </motion.div>
          ))}
          <motion.div className="absolute top-4 left-0 w-full h-px bg-red-500/50 border-t border-dashed border-red-500" />
          <div className="absolute top-1 left-2 text-[6px] font-mono text-red-400">STRESS LIMIT</div>
        </div>
      </div>
      
      <div className="w-full sm:w-2/5 flex flex-col justify-center relative z-10 border border-white/10 bg-black/40 rounded-lg p-4 backdrop-blur-md h-full">
        <h2 className="text-xl font-bold text-white mb-2">Civil Engineering</h2>
        <p className="text-white/60 text-[10px] mb-4 leading-relaxed">Structural analysis, material stress testing, and sustainable urban planning blueprints.</p>
        
        <div className="bg-neon-blue/10 border border-neon-blue/20 rounded p-2">
          <div className="text-[8px] text-neon-blue uppercase tracking-widest font-bold mb-1">Max Deflection</div>
          <div className="text-sm font-mono text-white">2.44 mm <span className="text-emerald-400 text-[8px]">PASS</span></div>
        </div>
      </div>
    </motion.div>
  );
}

const slogans = [
  "Build the Future.",
  "Every Project Begins with One Decision.",
  "Innovation Starts with Curiosity.",
  "Create What Others Imagine.",
  "Small Progress Creates Extraordinary Engineers."
];

function SlideVision() {
  const [sloganIndex, setSloganIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSloganIndex((i) => (i + 1) % slogans.length);
    }, 4000); // Change slogan faster than the slide itself to see a couple during 7s
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="size-full bg-[linear-gradient(135deg,rgb(4_8_20),rgb(16_19_43))] p-8 flex flex-col items-center justify-center relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,163,255,0.05)_0%,transparent_60%)]" />
      
      <AnimatePresence mode="wait">
        <motion.h2 
          key={sloganIndex}
          initial={{ opacity: 0, filter: "blur(4px)", y: 10 }} 
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }} 
          exit={{ opacity: 0, filter: "blur(4px)", y: -10 }} 
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-cyan relative z-10 drop-shadow-sm max-w-sm"
        >
          {slogans[sloganIndex]}
        </motion.h2>
      </AnimatePresence>
      
      <div className="absolute bottom-6 flex gap-1.5">
        {slogans.map((_, i) => (
          <div key={i} className={cn("h-1 rounded-full transition-all duration-500", i === sloganIndex ? "w-4 bg-neon-cyan" : "w-1 bg-white/20")} />
        ))}
      </div>
    </motion.div>
  );
}

function LiveSlideshow() {
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % 7);
    }, 7000);
    return () => clearInterval(timer);
  }, []);
  
  return (
    <AnimatePresence mode="wait">
      {index === 0 && <SlideWelcome key="0" />}
      {index === 1 && <SlideAI key="1" />}
      {index === 2 && <SlideIoT key="2" />}
      {index === 3 && <SlideCloud key="3" />}
      {index === 4 && <SlideMechanical key="4" />}
      {index === 5 && <SlideCivil key="5" />}
      {index === 6 && <SlideVision key="6" />}
    </AnimatePresence>
  );
}

function CurvedUltrawideMonitor() {
  const [isBooted, setIsBooted] = useState(false);

  return (
    <div className="relative w-full max-w-[800px] mt-8 lg:mt-0 ml-auto">
      {/* Screen frame (Premium matte black with brushed metal feel) */}
      <div className="relative z-20 aspect-[21/9] sm:aspect-[21/10] w-full rounded-[1.5rem] sm:rounded-[2rem] border-[8px] sm:border-[12px] border-zinc-900 bg-zinc-950 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_40px_rgba(0,163,255,0.25),inset_0_0_1px_rgba(55,230,255,0.5)] overflow-hidden">
        {/* Soft reflection on bezel */}
        <div className="absolute inset-0 pointer-events-none rounded-[0.8rem] sm:rounded-[1.2rem] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),inset_0_-1px_1px_rgba(0,0,0,0.8)] z-30" />
        
        {/* Inner bezel and Screen */}
        <div className="absolute inset-0 rounded-[0.8rem] sm:rounded-[1.2rem] border border-black bg-black overflow-hidden shadow-[inset_0_0_40px_rgba(0,163,255,0.1)]">
          {isBooted ? <LiveSlideshow /> : <MonitorBootSequence onComplete={() => setIsBooted(true)} />}
        </div>
      </div>
      
      {/* Screen ambient glow projecting outwards */}
      <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-[3rem] bg-neon-cyan/5 blur-3xl pointer-events-none" />
      
      {/* Monitor Stand/Neck */}
      <div className="absolute z-10 top-[calc(100%-0.5rem)] left-1/2 -translate-x-1/2 w-12 sm:w-20 h-10 sm:h-16 bg-gradient-to-b from-zinc-800 to-zinc-950 border-x border-white/10" />
      
      {/* Monitor Base */}
      <div className="absolute z-0 top-[calc(100%+2rem)] sm:top-[calc(100%+3.5rem)] left-1/2 -translate-x-1/2 w-40 sm:w-64 h-2 sm:h-3 rounded-full bg-zinc-900 border-t border-white/20 shadow-[0_10px_20px_rgba(0,0,0,0.8)]" />
      
      {/* Desk Surface / Ground Light (Glossy reflection) */}
      <div className="absolute z-0 top-[calc(100%+2.5rem)] sm:top-[calc(100%+3.5rem)] left-1/2 -translate-x-1/2 w-[130%] h-32 bg-gradient-to-t from-neon-blue/10 to-transparent blur-2xl rounded-[100%] pointer-events-none" />
      <div className="absolute z-0 top-[calc(100%+3rem)] sm:top-[calc(100%+4.5rem)] left-1/2 -translate-x-1/2 w-[80%] h-12 bg-neon-cyan/10 blur-xl rounded-[100%] pointer-events-none" />
      
      {/* PCB / Electronics Base */}
      <div className="absolute z-10 top-[calc(100%+4rem)] sm:top-[calc(100%+6.5rem)] left-1/2 -translate-x-[45%] w-80 h-32 opacity-60 mix-blend-screen scale-50 sm:scale-75 origin-top skew-x-[-20deg] rotate-[8deg]">
        <svg viewBox="0 0 100 50" className="absolute inset-0 w-full h-full text-neon-blue/40">
          <motion.path d="M10,25 L30,25 L40,10 L70,10 L80,30 L90,30" fill="none" stroke="currentColor" strokeWidth="0.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity }} />
          <motion.path d="M20,40 L40,40 L50,20 L80,20 L95,45" fill="none" stroke="#8b5cf6" strokeWidth="0.5" strokeOpacity="0.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }} />
          <circle cx="40" cy="10" r="1.5" className="fill-neon-cyan animate-pulse" />
          <circle cx="80" cy="30" r="1" className="fill-emerald-400 animate-pulse" />
          <circle cx="50" cy="20" r="1" className="fill-neon-purple animate-pulse" />
        </svg>
      </div>

      {/* Minimal Keyboard & Mouse */}
      <div className="absolute z-20 top-[calc(100%+3.5rem)] sm:top-[calc(100%+6rem)] left-1/2 -translate-x-[40%] flex gap-6 sm:gap-10 items-center scale-50 sm:scale-75 origin-top">
        {/* Keyboard */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-neon-blue/30 blur-xl rounded-lg group-hover:bg-neon-cyan/40 transition-colors duration-500 transition duration-base ease-premium" />
          <div className="w-72 h-20 rounded-md border-t border-l border-white/20 border-b border-r border-black/40 bg-zinc-900 skew-x-[-20deg] rotate-[8deg] shadow-[5px_5px_15px_rgba(0,0,0,0.8),inset_0_0_10px_rgba(255,255,255,0.05)] flex flex-col p-2 gap-1.5 relative z-10 transform-gpu">
            {Array.from({length: 4}).map((_, i) => (
              <div key={i} className="flex-1 flex gap-1.5">
                {Array.from({length: 12}).map((_, j) => (
                  <div key={j} className="flex-1 rounded-[2px] bg-zinc-800 border-t border-l border-white/10 border-b border-r border-black/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] relative overflow-hidden">
                     {/* RGB Key glow */}
                     <div className="absolute inset-0 opacity-40 bg-gradient-to-br from-neon-cyan to-neon-purple mix-blend-color-dodge" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        
        {/* Mouse */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-neon-cyan/30 blur-xl rounded-full group-hover:bg-neon-blue/40 transition-colors duration-500 transition duration-base ease-premium" />
          <div className="w-14 h-24 rounded-[2rem] border-t border-l border-white/20 border-b border-r border-black/40 bg-zinc-900 skew-x-[-20deg] rotate-[8deg] shadow-[5px_5px_15px_rgba(0,0,0,0.8),inset_0_0_10px_rgba(255,255,255,0.05)] relative z-10 flex flex-col items-center py-3 transform-gpu">
            {/* RGB Outline */}
            <div className="absolute inset-0 rounded-[2rem] border border-neon-cyan/30 shadow-[inset_0_0_8px_rgba(55,230,255,0.2)] pointer-events-none" />
            <div className="w-1.5 h-4 rounded-full bg-neon-cyan shadow-[0_0_8px_#37e6ff] animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ScrollIndicator() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-neon-cyan lg:flex">
      <div className="flex h-9 w-5 justify-center rounded-full border border-neon-blue/35 bg-white/[0.04] p-1 shadow-glow">
        <motion.span
          animate={{ opacity: [0.2, 1, 0.2], y: [0, 14, 0] }}
          className="size-1 rounded-full bg-neon-cyan"
          transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity }}
        />
      </div>
      <span className="h-8 w-px bg-[linear-gradient(180deg,#37e6ff,transparent)]" />
    </div>
  );
}

export function HeroSection() {
  return (
    <Section
      className="min-h-screen scroll-mt-20 overflow-hidden pt-28 sm:pt-32 relative"
      id="home"
      spacing="normal"
    >
      <PhoenixBackground />
      <GlowEffect className="-left-28 top-24 size-80" />
      <GlowEffect className="-right-24 bottom-12 size-96 bg-neon-violet/20" />
      
      <Container>
        <div className="grid lg:grid-cols-[1fr,1.2fr] gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Content */}
          <motion.div
            animate="visible"
            className="flex flex-col items-center lg:items-start text-center lg:text-left z-10"
            initial="hidden"
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp}>
              <GlowBadge icon={Rocket}>
                India's Premium Engineering Project Platform
              </GlowBadge>
            </motion.div>
            <motion.div variants={fadeUp}>
              <AnimatedHeading />
            </motion.div>
            <motion.p variants={fadeUp} className="mt-6 min-h-8 text-lead font-medium text-ink-200">
              Premium builds for <RotatingTitle />
            </motion.p>
            <motion.p variants={fadeUp} className="mt-5 text-body text-ink-300 max-w-xl">
              Build industry-level engineering projects with complete source code, documentation,
              GitHub guidance, deployment support, and modern technologies for students across
              Computer Science, Electronics, Electrical, Mechanical, Civil, IoT and Artificial Intelligence.
            </motion.p>
            
            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap items-center" id="contact">
              <CTAButton href="/contact" icon={Rocket}>
                Start My Project
              </CTAButton>
              <GlowButton href={siteConfig.whatsapp} icon={MessageCircle} variant="secondary">
                Request Consultation
              </GlowButton>
              <GlowButton href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} icon={PhoneCall} variant="outline">
                Build With AshKara
              </GlowButton>
            </motion.div>
            
            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-ink-300">
              <a className="inline-flex items-center gap-2 rounded-sm outline-none transition hover:text-white focus-visible:ring-2 focus-visible:ring-neon-blue transition duration-base ease-premium" href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}>
                <PhoneCall aria-hidden="true" className="size-4 text-neon-cyan" />
                {siteConfig.phone}
              </a>
              <a className="inline-flex items-center gap-2 rounded-sm outline-none transition hover:text-white focus-visible:ring-2 focus-visible:ring-neon-blue transition duration-base ease-premium" href={siteConfig.instagram} rel="noreferrer" target="_blank">
                <Instagram aria-hidden="true" className="size-4 text-neon-cyan" />
                @ashkaratechnologies
              </a>
              <a className="inline-flex items-center gap-2 rounded-sm outline-none transition hover:text-white focus-visible:ring-2 focus-visible:ring-neon-blue transition duration-base ease-premium" href={`mailto:${siteConfig.email}`}>
                <Mail aria-hidden="true" className="size-4 text-neon-cyan" />
                {siteConfig.email}
              </a>
            </motion.div>
            
            <motion.div variants={fadeUp} className="w-full mt-4 max-w-xl">
              <HeroStats />
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Monitor */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }} className="w-full flex items-center justify-center lg:justify-end z-10">
            <CurvedUltrawideMonitor />
          </motion.div>
          
        </div>
      </Container>
      <ScrollIndicator />
    </Section>
  );
}
