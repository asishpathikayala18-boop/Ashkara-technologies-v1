import { useEffect } from "react";
import { Zap, Target, Shield, Rocket, Heart, ArrowRight } from "lucide-react";
import { Container } from "../components/container";
import { SectionHeading } from "../components/ui/section-heading";
import { GlowBadge } from "../components/ui/glow-badge";
import { GlassCard } from "../components/ui/glass-card";
import { Timeline, type TimelineItemProps } from "../components/ui/timeline";
import { TechLogo } from "../components/ui/tech-logo";
import { GlowButton } from "../components/ui/glow-button";
import { CTAButton } from "../components/ui/cta-button";
import { StatCard } from "../components/ui/stat-card";
import { SEO } from "../components/SEO";

export function AboutPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const timelineData: TimelineItemProps[] = [
    {
      title: "2022 - The Genesis",
      description: "AshKara Technologies was founded with a mission to bridge the gap between academic learning and industry requirements."
    },
    {
      title: "2023 - Expanding Horizons",
      description: "Launched our first suite of custom engineering solutions for IoT and Web Development."
    },
    {
      title: "2024 - 100+ Projects Delivered",
      description: "Successfully delivered over 100+ high-quality engineering projects to students and innovators worldwide."
    },
    {
      title: "2025 - The Future",
      description: "Scaling our AI and Cloud engineering capabilities to build the next generation of technological solutions.",
      isActive: true
    }
  ];

  const technologies = [
    "React", "Node.js", "Python", "TensorFlow",
    "AWS", "Docker", "MongoDB", "Arduino",
    "Raspberry Pi", "Flutter"
  ];

  return (
    <div className="min-h-screen bg-[#040810] selection:bg-neon-cyan/30 selection:text-white pt-24 pb-12">
      <SEO title="About Us" description="Learn about AshKara Technologies." url="/about" />
    
      {/* Dynamic Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,163,255,0.05),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-radial-grid bg-[length:32px_32px] opacity-[0.1]" />
      </div>

      <Container>
        {/* HERO SECTION */}
        <section className="py-20 text-center max-w-4xl mx-auto">
          <GlowBadge 
            icon={Target}
            className="mb-6 mx-auto"
          >
            About AshKara
          </GlowBadge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 drop-shadow-glow tracking-tight">
            Pioneering the Future of Engineering
          </h1>
          <p className="text-xl text-white/60 leading-relaxed max-w-2xl mx-auto">
            We are a team of passionate engineers, designers, and innovators dedicated to building premium technology solutions that empower the next generation.
          </p>
        </section>

        {/* STATS */}
        <section className="py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16 max-w-5xl mx-auto px-4">
            <StatCard value="150+" label="Projects Delivered" glowColor="cyan" />
            <StatCard value="12+" label="Engineering Domains" glowColor="blue" />
            <StatCard value="98%" label="Success Rate" glowColor="violet" />
            <StatCard value="24/7" label="Support Available" glowColor="cyan" />
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="py-24">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <GlassCard variant="project" className="p-8 md:p-12 relative overflow-hidden group border-white/10 hover:border-neon-cyan/40 transition duration-base ease-premium">
              <div className="size-14 rounded-full bg-neon-cyan/10 flex items-center justify-center mb-8 border border-neon-cyan/20">
                <Target className="size-7 text-neon-cyan" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-white/60 text-lg leading-relaxed">
                To bridge the gap between academia and industry by providing state-of-the-art, production-ready engineering projects that help students and professionals excel in their careers.
              </p>
            </GlassCard>

            <GlassCard variant="project" className="p-8 md:p-12 border-white/10 hover:border-neon-violet/40 transition duration-base ease-premium">
              <div className="size-14 rounded-full bg-neon-violet/10 flex items-center justify-center mb-8 border border-neon-violet/20">
                <Rocket className="size-7 text-neon-violet" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-white/60 text-lg leading-relaxed">
                To become the global standard for engineering excellence, creating an ecosystem where complex technical concepts are transformed into accessible, beautiful, and functional software.
              </p>
            </GlassCard>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="py-24 border-y border-white/5 bg-[#080D18]/50">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide our engineering process."
            gradient="blue"
            align="center"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Premium Quality", desc: "We never compromise on the quality of our code or design.", icon: Shield, color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20" },
              { title: "Constant Innovation", desc: "Always exploring the latest technologies and architectures.", icon: Zap, color: "text-neon-cyan", bg: "bg-neon-cyan/10", border: "border-neon-cyan/20" },
              { title: "Total Transparency", desc: "Clear communication and well-documented deliverables.", icon: Target, color: "text-neon-blue", bg: "bg-neon-blue/10", border: "border-neon-blue/20" },
              { title: "Dedicated Support", desc: "We stand by our work and support our clients post-delivery.", icon: Heart, color: "text-pink-500", bg: "bg-pink-500/10", border: "border-pink-500/20" },
            ].map((value, i) => (
              <GlassCard key={i} variant="feature" className="p-8 text-center group">
                <div className={`size-16 mx-auto rounded-2xl ${value.bg} ${value.border} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className={`size-8 ${value.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-white/60">{value.desc}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* TIMELINE */}
        <section className="py-32">
          <SectionHeading
            title="Our Journey"
            subtitle="The evolution of AshKara Technologies."
            gradient="violet"
            align="center"
          />
          <div className="max-w-3xl mx-auto mt-16">
            <Timeline items={timelineData} />
          </div>
        </section>

        {/* TECH ECOSYSTEM */}
        <section className="py-24 border-y border-white/5 bg-[#080D18]/50">
          <SectionHeading
            title="Our Technology Ecosystem"
            subtitle="The tools and frameworks we use to build the future."
            gradient="cyan"
            align="center"
          />
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto mt-12">
            {technologies.map((tech) => (
              <GlassCard key={tech} variant="project" className="flex flex-col items-center justify-center p-6 group border-white/10 hover:border-emerald-400/40 transition duration-base ease-premium">
                <TechLogo technology={tech} showLabel={false} iconClassName="size-12 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-white font-bold text-center">{tech}</span>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-32 relative text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,163,255,0.1),transparent_70%)] pointer-events-none" />
          <GlassCard variant="feature" className="max-w-4xl mx-auto p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-radial-grid bg-[length:24px_24px] opacity-10" />
            <h2 className="relative z-10 text-4xl md:text-5xl font-bold text-white mb-6">Ready to start your journey?</h2>
            <p className="relative z-10 text-xl text-white/60 mb-10 max-w-2xl mx-auto">Let's collaborate to build your next major engineering project.</p>
            <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-4">
              <CTAButton
                href="/contact"
                className="h-14 px-8 text-lg w-full sm:w-auto"
                icon={ArrowRight}
                iconPosition="right"
              >
                Contact Us Today
              </CTAButton>
              <GlowButton
                href="/#project-vault"
                variant="outline"
                className="h-14 px-8 text-lg w-full sm:w-auto"
              >
                Explore Projects
              </GlowButton>
            </div>
          </GlassCard>
        </section>
      </Container>
    </div>
  );
}
