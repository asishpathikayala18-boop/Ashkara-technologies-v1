import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowDown, Check, X, Shield, Cloud, Zap, Maximize2, Code2 } from "lucide-react";
import { projectData, type Project } from "../data/project-data";
import { Container } from "../components/container";
import { GlassCard } from "../components/ui/glass-card";
import { TechLogo } from "../components/ui/tech-logo";
import { GlowButton } from "../components/ui/glow-button";
import { CTAButton } from "../components/ui/cta-button";
import { GlowBadge } from "../components/ui/glow-badge";
import { cn } from "../utils/cn";
import { siteConfig } from "../config/site";
import { SEO } from "../components/SEO";

// Generate features based on category
const getFeaturesForCategory = (category: string) => {
  const baseFeatures = ["Authentication & Security", "Responsive UI Design", "REST API Integration", "Admin Dashboard"];
  if (category.includes("AI") || category.includes("Machine Learning") || category.includes("Data Science")) {
    return ["AI Predictive Modeling", "Data Visualization", "Automated Reporting", "NLP Processing", ...baseFeatures];
  }
  if (category.includes("IoT") || category.includes("Electronics")) {
    return ["Real-time Sensor Tracking", "Hardware Integration", "WebSocket Comm", "Low Latency Updates", ...baseFeatures];
  }
  if (category.includes("Cloud") || category.includes("DevOps")) {
    return ["Serverless Architecture", "Docker Containerization", "CI/CD Pipeline", "Auto-scaling Support", ...baseFeatures];
  }
  return ["Real-time Analytics", "Database Optimization", "Modular Architecture", ...baseFeatures];
};

const getRoleForTech = (tech: string) => {
  const t = tech.toLowerCase();
  if (["react", "next.js", "vue", "tailwind", "html", "css"].some(x => t.includes(x))) return "Frontend Framework";
  if (["node", "express", "python", "django", "fastapi", "spring"].some(x => t.includes(x))) return "Backend Server";
  if (["mongo", "postgres", "sql", "redis", "firebase"].some(x => t.includes(x))) return "Database";
  if (["aws", "docker", "kubernetes", "cloud", "vercel"].some(x => t.includes(x))) return "Infrastructure";
  if (["tensor", "keras", "pytorch", "nlp", "scikit"].some(x => t.includes(x))) return "AI / ML Engine";
  if (["arduino", "raspberry", "esp32", "mqtt", "sensors"].some(x => t.includes(x))) return "Hardware / IoT";
  return "Core Technology";
};

export function ProjectDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const found = projectData.find(p => p.id === id);
    if (found) {
      setProject(found);
    } else {
      navigate("/");
    }
  }, [id, navigate]);

  if (!project) return <div className="min-h-screen bg-[#040810]" />;

  const features = getFeaturesForCategory(project.category).slice(0, 8);
  const relatedProjects = projectData.filter(p => p.category === project.category && p.id !== project.id).slice(0, 4);

  const architectureFlow = ["Frontend UI", "REST API", "Backend Logic", "Database", "Analytics", "Deployment"];
  const whatsappMessage = encodeURIComponent(`Hi, I am interested in building the project: "${project.title}"`);

  const faqs = [
    { q: "Can this project be customized?", a: "Yes, our projects are built with modular architecture, allowing easy customization of features, UI, and backend logic to suit your specific requirements." },
    { q: "Will source code be provided?", a: "Absolutely. You receive the complete, well-commented source code for all components (frontend, backend, and hardware if applicable)." },
    { q: "Is documentation included?", a: "Yes, comprehensive documentation including setup guides, API references, and architecture diagrams are provided." },
    { q: "Can deployment support be added?", a: "Yes, we offer deployment support to help you host the project on platforms like AWS, Vercel, or Heroku." },
  ];

  const galleryImages = [
    project.bannerImage,
    "/images/engineering/artificial-intelligence.webp", // Mock additional images
    "/images/engineering/cloud-computing.webp",
  ];

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#040810] min-h-screen pt-32 pb-24 relative overflow-hidden text-white font-sans selection:bg-cyan-500/30">
      <SEO 
        title={`${project.title} | Engineering Project`}
        description={project.description}
        url={`/projects/${project.id}`}
        image={project.bannerImage}
      />
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,163,255,0.05),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-radial-grid bg-[length:32px_32px] opacity-[0.1]" />
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 -z-10">
          <img src={project.bannerImage} alt="" className="w-full h-full object-cover opacity-20 blur-md" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#040810]/60 via-[#040810]/90 to-[#040810]" />
        </div>
        
        <Container>
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm text-white/50 mb-8 backdrop-blur-md bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
              <Link to="/" className="hover:text-neon-cyan transition-colors transition duration-base ease-premium">Home</Link>
              <span>/</span>
              <Link to="/#project-vault" className="hover:text-neon-cyan transition-colors transition duration-base ease-premium">Projects</Link>
              <span>/</span>
              <span className="text-white/90">{project.category}</span>
            </nav>

            <GlowBadge icon={Code2} className="mb-6">
              {project.category}
            </GlowBadge>

            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8 drop-shadow-glow">
              {project.title}
            </h1>

            <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
              {project.technologyLogos.map((tech) => (
                <div key={tech} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
                  <TechLogo technology={tech} showLabel={false} iconClassName="size-5" />
                  <span className="text-sm font-medium text-white">{tech}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <CTAButton
                href={`${siteConfig.whatsapp}?text=${whatsappMessage}`}
                target="_blank"
                className="w-full sm:w-auto h-14 px-8 text-lg"
                icon={ArrowRight}
                iconPosition="right"
              >
                Start My Project
              </CTAButton>
              {project.previewType !== "gallery" && (
                <GlowButton variant="secondary" className="w-full sm:w-auto h-14 px-8 text-lg">
                  Live Preview
                </GlowButton>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="py-24 relative">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Project Overview</h2>
            <p className="text-white/60 text-lg leading-relaxed">{project.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Problem Statement", desc: `Traditional approaches in ${project.category.toLowerCase()} face significant efficiency and accuracy challenges, requiring modern intervention.`, icon: Shield, color: "text-red-400" },
              { title: "Solution Overview", desc: `An automated, highly scalable system utilizing ${project.technologyLogos.slice(0, 2).join(" and ")} to streamline operations and reduce manual effort.`, icon: Zap, color: "text-neon-cyan" },
              { title: "Real World Applications", desc: `Directly applicable in enterprise ${project.engineeringBranch.toLowerCase()} environments, research facilities, and production systems.`, icon: Cloud, color: "text-neon-blue" },
              { title: "Expected Outcomes", desc: "Significant reduction in processing time, enhanced data accuracy, and a robust scalable foundation for future expansion.", icon: Check, color: "text-neon-violet" },
            ].map((item, i) => (
              <GlassCard key={i} variant="feature" className="p-8 group shadow-[0_0_20px_rgba(59,130,246,0.05)] hover:shadow-glow hover:border-neon-cyan/40 transition duration-base ease-premium">
                <div className={cn("size-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mb-6 group-hover:scale-110 transition-transform", item.color)}>
                  <item.icon className="size-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>

      {/* ARCHITECTURE WORKFLOW */}
      <section className="py-24 bg-[#080D18] border-y border-white/5">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Project Architecture</h2>
            <p className="text-white/60">The visual workflow and data pipeline of the system.</p>
          </div>

          <div className="max-w-5xl mx-auto relative">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0">
              {architectureFlow.map((step, i) => (
                <div key={step} className="flex flex-col lg:flex-row items-center relative z-10 w-full lg:w-auto">
                  <div className="flex items-center justify-center h-16 px-6 rounded-xl bg-[#0B1120] border border-neon-cyan/20 shadow-[0_0_15px_rgba(34,211,238,0.1)] text-white font-bold whitespace-nowrap min-w-[140px]">
                    {step}
                  </div>
                  {i < architectureFlow.length - 1 && (
                    <div className="flex items-center justify-center h-10 w-10 lg:w-16 lg:h-auto text-neon-cyan/50">
                      <ArrowRight className="hidden lg:block size-6 animate-pulse" />
                      <ArrowDown className="block lg:hidden size-6 animate-pulse" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* Connecting line background desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-neon-blue/0 via-neon-cyan/30 to-neon-violet/0 -translate-y-1/2 z-0" />
          </div>
        </Container>
      </section>

      {/* FEATURES */}
      <section className="py-24 relative">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Core Features</h2>
            <p className="text-white/60">Key modules and capabilities included in the source code.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {features.map((feature, i) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-neon-cyan/30 transition-all duration-300 transition duration-base ease-premium"
              >
                <div className="size-8 shrink-0 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center text-neon-cyan">
                  <Check className="size-4" />
                </div>
                <span className="text-white/90 font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* TECHNOLOGY STACK */}
      <section className="py-24 bg-[#080D18] border-y border-white/5">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Technology Stack</h2>
            <p className="text-white/60">Industry-standard tools powering this project.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {project.technologyLogos.map((tech) => (
              <GlassCard key={tech} variant="feature" className="flex flex-col items-center justify-center p-6 group">
                <TechLogo technology={tech} showLabel={false} iconClassName="size-12 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-white font-bold text-center">{tech}</span>
                <span className="text-white/50 text-xs text-center mt-1 uppercase tracking-wider">{getRoleForTech(tech)}</span>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>

      {/* ENGINEERING GALLERY */}
      <section className="py-24 relative">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Engineering Gallery</h2>
            <p className="text-white/60">Preview the interface and system outputs.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {galleryImages.map((img, i) => (
              <div 
                key={i} 
                className={cn("relative group rounded-xl overflow-hidden cursor-pointer bg-white/5 border border-white/10 aspect-video", i === 0 && "md:col-span-2 lg:col-span-2 aspect-auto")}
                onClick={() => setLightboxImage(img)}
              >
                <img src={img} alt="Gallery view" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 transition duration-base ease-premium" onError={(e) => { e.currentTarget.style.display = "none"; }} />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px] transition duration-base ease-premium">
                  <Maximize2 className="size-8 text-white drop-shadow-glass" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* DELIVERABLES & HIGHLIGHTS */}
      <section className="py-24 bg-[#080D18] border-y border-white/5">
        <Container>
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold text-white mb-8">What You Receive</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.deliverables.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-[#0B1120] border border-neon-cyan/20 shadow-[0_0_10px_rgba(34,211,238,0.05)]">
                    <div className="size-6 rounded-full bg-neon-cyan/20 flex items-center justify-center shrink-0">
                      <Check className="size-3.5 text-neon-cyan" />
                    </div>
                    <span className="text-white/90 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-white mb-8">Project Highlights</h2>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between p-4 rounded-xl bg-[#0B1120] border border-white/10">
                  <span className="text-white/60">Engineering Category</span>
                  <span className="text-neon-cyan font-bold text-right">{project.category}</span>
                </div>
                <div className="flex justify-between p-4 rounded-xl bg-[#0B1120] border border-white/10">
                  <span className="text-white/60">Technology Count</span>
                  <span className="text-white font-bold">{project.technologyLogos.length} Core Tech</span>
                </div>
                <div className="flex justify-between p-4 rounded-xl bg-[#0B1120] border border-white/10">
                  <span className="text-white/60">GitHub Repository</span>
                  <span className="text-emerald-400 font-bold">{project.githubSupport ? "Included" : "N/A"}</span>
                </div>
                <div className="flex justify-between p-4 rounded-xl bg-[#0B1120] border border-white/10">
                  <span className="text-white/60">Deployment Support</span>
                  <span className="text-emerald-400 font-bold">{project.deploymentSupport ? "Included" : "N/A"}</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 relative max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <GlassCard key={i} variant="default" className="overflow-hidden p-0 rounded-xl hover:border-white/20 transition-colors transition duration-base ease-premium">
              <button 
                className="w-full text-left px-6 py-5 flex items-center justify-between outline-none focus-visible:bg-white/5 transition-colors"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span className="font-bold text-white text-lg">{faq.q}</span>
                <ArrowDown className={cn("size-5 text-neon-cyan transition-transform duration-300", openFaq === i && "rotate-180")} />
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-0 text-white/60 leading-relaxed border-t border-white/5 mt-2 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* RELATED PROJECTS */}
      {relatedProjects.length > 0 && (
        <section className="py-24 bg-[#080D18] border-t border-white/5">
          <Container>
            <h2 className="text-3xl font-bold text-white mb-12">Related Projects</h2>
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              {relatedProjects.map((rel) => (
                <Link key={rel.id} to={`/projects/${rel.id}`} className="block h-full group">
                  <GlassCard variant="feature" className="h-full p-0 overflow-hidden">
                    <div className="aspect-video relative overflow-hidden bg-ink-900">
                      <img src={rel.bannerImage} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 transition duration-base ease-premium" onError={(e) => { e.currentTarget.style.display = "none"; }} />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{rel.title}</h3>
                      <p className="text-sm text-white/50 mb-4">{rel.engineeringBranch}</p>
                      <div className="flex items-center text-neon-cyan text-sm font-semibold group-hover:translate-x-1 transition-transform transition duration-base ease-premium">
                        View Project <ArrowRight className="size-4 ml-1" />
                      </div>
                    </div>
                  </GlassCard>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* FINAL CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,163,255,0.1),transparent_70%)]" />
        <Container>
          <div className="max-w-4xl mx-auto text-center p-12 rounded-3xl border border-neon-blue/30 bg-[#0B1120]/80 backdrop-blur-xl shadow-[0_0_50px_rgba(59,130,246,0.15)] relative overflow-hidden">
            <div className="absolute inset-0 bg-radial-grid bg-[length:24px_24px] opacity-10" />
            <h2 className="relative z-10 text-4xl md:text-5xl font-bold text-white mb-6">Ready to Build Your Engineering Project?</h2>
            <p className="relative z-10 text-xl text-white/60 mb-10 max-w-2xl mx-auto">Get the complete source code, deployment support, and dedicated documentation.</p>
            <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-4">
              <CTAButton
                href={`${siteConfig.whatsapp}?text=${whatsappMessage}`}
                target="_blank"
                className="h-14 px-8 text-lg w-full sm:w-auto"
                icon={ArrowRight}
                iconPosition="right"
              >
                Start My Project
              </CTAButton>
              <GlowButton
                href="/contact"
                variant="outline"
                className="h-14 px-8 text-lg w-full sm:w-auto"
              >
                Request Consultation
              </GlowButton>
            </div>
          </div>
        </Container>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-12 cursor-zoom-out"
            onClick={() => setLightboxImage(null)}
          >
            <button className="absolute top-6 right-6 size-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors transition duration-base ease-premium">
              <X className="size-6" />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              src={lightboxImage} alt="Fullscreen preview" 
              className="max-w-full max-h-full object-contain rounded-lg border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
