import { SEO } from "../components/SEO";
import { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MessageCircle, Instagram, Send, ArrowDown, Zap, ArrowRight } from "lucide-react";
import { Container } from "../components/container";
import { GlassCard } from "../components/ui/glass-card";
import { GlowIcon } from "../components/ui/glow-icon";
import { GlowButton } from "../components/ui/glow-button";
import { GlowBadge } from "../components/ui/glow-badge";
import { SectionHeading } from "../components/ui/section-heading";
import { siteConfig } from "../config/site";
import { cn } from "../utils/cn";
import { apiClient } from "../services/api/client";

export function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    branch: "",
    category: "",
    title: "",
    description: "",
    requirements: "",
    deliveryDate: "",
  });

  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: "", text: "" });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const constructWhatsAppMessage = () => {
    return encodeURIComponent(
      `Hello AshKara Technologies,\n\nI'm interested in building an engineering project.\n\n*Name:* ${formData.fullName}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Engineering Branch:* ${formData.branch}\n*Project Category:* ${formData.category}\n*Project Title:* ${formData.title}\n*Description:* ${formData.description}\n*Requirements:* ${formData.requirements}\n*Preferred Date:* ${formData.deliveryDate || "Not specified"}\n\nPlease share more information.`
    );
  };



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage({ type: "", text: "" });

    try {
      await apiClient.post("/inquiries", {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        engineeringBranch: formData.branch,
        category: formData.category || "General",
        project: formData.title || "Custom Project",
        description: formData.description + 
          (formData.requirements ? `\n\nRequirements: ${formData.requirements}` : "") + 
          (formData.deliveryDate ? `\n\nPreferred Date: ${formData.deliveryDate}` : "")
      });
      setSubmitMessage({ type: "success", text: "Inquiry submitted successfully! Our team will contact you soon." });
      setFormData({
        fullName: "", email: "", phone: "", branch: "", category: "", title: "", description: "", requirements: "", deliveryDate: ""
      });
    } catch (error: any) {
      setSubmitMessage({ 
        type: "error", 
        text: error.response?.data?.message || "Failed to submit inquiry. Please try again or use WhatsApp." 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppInstead = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(`${siteConfig.whatsapp}?text=${constructWhatsAppMessage()}`, "_blank");
  };

  const faqs = [
    { q: "How do I place an order?", a: "To place an order, fill out the inquiry form above or contact us directly via WhatsApp. We will schedule a consultation to discuss your specific requirements before starting development." },
    { q: "How long does project development take?", a: "Development time depends on the complexity of the project. Standard software projects typically take 1-3 weeks, while complex IoT or AI systems may require 3-6 weeks. We will provide an exact timeline during consultation." },
    { q: "Can projects be customized?", a: "Yes, all our projects are built with a modular architecture, allowing easy customization of features, UI, and backend logic to suit your specific requirements." },
    { q: "Will source code be provided?", a: "Absolutely. You receive the complete, well-commented source code for all components including frontend, backend, and hardware if applicable." },
    { q: "Do you provide documentation?", a: "Yes, comprehensive documentation including setup guides, API references, architecture diagrams, and presentation materials are provided." },
    { q: "Do you provide deployment support?", a: "Yes, we offer full deployment support to help you host your project on platforms like AWS, Vercel, Heroku, and others." },
    { q: "Can I request a completely custom project?", a: "Yes! If you have a unique idea that isn't listed in our Project Library, simply describe it in the inquiry form and our engineers will build it from scratch." },
  ];

  return (
    <div className="min-h-screen bg-[#040810] selection:bg-neon-cyan/30 selection:text-white pt-24 pb-12">
      <SEO title="Contact Us" description="Get in touch with AshKara Technologies." url="/contact" />
    
      {/* Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,163,255,0.05),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-radial-grid bg-[length:32px_32px] opacity-[0.1]" />
      </div>

      <Container>
        {/* HERO SECTION */}
        <section className="py-16 text-center max-w-4xl mx-auto">
          <GlowBadge 
            icon={Zap}
            className="mb-6 mx-auto"
          >
            Contact AshKara
          </GlowBadge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-glow">Let's Build Your Next Engineering Project</h1>
          <p className="text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
            Whether you are a student looking for a major project, a researcher needing custom software, or an innovator building a startup, contact our engineering team to bring your ideas to life.
          </p>
        </section>

        {/* CONTACT CARDS */}
        <section className="pb-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Email Card */}
            <GlassCard variant="project" className="flex flex-col items-center justify-center p-8 group text-center border-white/10 hover:border-neon-cyan/40 transition duration-base ease-premium">
              <GlowIcon icon={Mail} glowColor="cyan" size="lg" className="mb-6 group-hover:scale-110 transition duration-base ease-premium" />
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-sm text-white/60 mb-6 truncate w-full px-2" title={siteConfig.email}>{siteConfig.email}</p>
              <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 text-neon-cyan font-bold text-sm group-hover:translate-x-1 transition-transform transition duration-base ease-premium">
                Send Email <ArrowRight className="size-4" />
              </a>
            </GlassCard>

            {/* WhatsApp Card */}
            <GlassCard variant="project" className="flex flex-col items-center justify-center p-8 group text-center border-white/10 hover:border-emerald-400/40 transition duration-base ease-premium">
              <GlowIcon icon={MessageCircle} glowColor="cyan" size="lg" className="mb-6 group-hover:scale-110 !border-emerald-400/20 data-[selected=false]:group-hover:border-emerald-400/50 transition duration-base ease-premium" />
              <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
              <p className="text-sm text-white/60 mb-6">{siteConfig.phone}</p>
              <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-emerald-400 font-bold text-sm group-hover:translate-x-1 transition-transform transition duration-base ease-premium">
                Chat Now <ArrowRight className="size-4" />
              </a>
            </GlassCard>

            {/* Phone Card */}
            <GlassCard variant="project" className="flex flex-col items-center justify-center p-8 group text-center border-white/10 hover:border-neon-blue/40 transition duration-base ease-premium">
              <GlowIcon icon={Phone} glowColor="blue" size="lg" className="mb-6 group-hover:scale-110 transition duration-base ease-premium" />
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-sm text-white/60 mb-6">{siteConfig.phone}</p>
              <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="inline-flex items-center gap-2 text-neon-blue font-bold text-sm group-hover:translate-x-1 transition-transform transition duration-base ease-premium">
                Call Now <ArrowRight className="size-4" />
              </a>
            </GlassCard>

            {/* Instagram Card */}
            <GlassCard variant="project" className="flex flex-col items-center justify-center p-8 group text-center border-white/10 hover:border-pink-500/40 transition duration-base ease-premium">
              <GlowIcon icon={Instagram} glowColor="violet" size="lg" className="mb-6 group-hover:scale-110 !border-pink-500/20 data-[selected=false]:group-hover:border-pink-500/50 transition duration-base ease-premium" />
              <h3 className="text-xl font-bold text-white mb-2">Instagram</h3>
              <p className="text-sm text-white/60 mb-6">@ashkaratechnologies</p>
              <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-pink-500 font-bold text-sm group-hover:translate-x-1 transition-transform transition duration-base ease-premium">
                Follow Us <ArrowRight className="size-4" />
              </a>
            </GlassCard>
          </div>
        </section>

        {/* INQUIRY FORM */}
        <section className="pb-24">
          <GlassCard variant="feature" className="max-w-4xl mx-auto p-6 md:p-12">
            <div className="absolute inset-0 bg-radial-grid bg-[length:24px_24px] opacity-[0.03]" />
            <div className="relative z-10">
              <SectionHeading
                title="Project Inquiry Form"
                subtitle=""
                gradient="cyan"
                align="center"
              >
                Provide the details of your project and our team will get back to you.
              </SectionHeading>

              {submitMessage.text && (
                <div className={cn(
                  "mb-6 p-4 rounded-xl border text-center font-medium",
                  submitMessage.type === "success" 
                    ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" 
                    : "bg-red-500/10 border-red-500/20 text-red-400"
                )}>
                  {submitMessage.text}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Full Name *</label>
                    <input required type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors transition duration-base ease-premium" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Email Address *</label>
                    <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors transition duration-base ease-premium" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Phone Number *</label>
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors transition duration-base ease-premium" placeholder="+91 9876543210" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Engineering Branch *</label>
                    <select required name="branch" value={formData.branch} onChange={handleChange} className="w-full h-12 px-4 rounded-xl bg-[#0B1120] border border-white/10 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors appearance-none transition duration-base ease-premium">
                      <option value="" disabled>Select Branch</option>
                      <option value="Computer Science">Computer Science</option>
                      <option value="Electronics & Communication">Electronics & Communication</option>
                      <option value="Electrical Engineering">Electrical Engineering</option>
                      <option value="Mechanical Engineering">Mechanical Engineering</option>
                      <option value="Civil Engineering">Civil Engineering</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Project Category</label>
                    <select name="category" value={formData.category} onChange={handleChange} className="w-full h-12 px-4 rounded-xl bg-[#0B1120] border border-white/10 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors appearance-none transition duration-base ease-premium">
                      <option value="" disabled>Select Category</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Machine Learning / AI">Machine Learning / AI</option>
                      <option value="Internet of Things (IoT)">Internet of Things (IoT)</option>
                      <option value="Android App Development">Android App Development</option>
                      <option value="Cloud Computing">Cloud Computing</option>
                      <option value="Data Science">Data Science</option>
                      <option value="Custom Software">Custom Software</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Project Title (If known)</label>
                    <input type="text" name="title" value={formData.title} onChange={handleChange} className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors transition duration-base ease-premium" placeholder="E.g., Smart Healthcare System" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Project Description *</label>
                  <textarea required name="description" value={formData.description} onChange={handleChange} rows={4} className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors resize-none transition duration-base ease-premium" placeholder="Describe what the project should do..." />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Additional Requirements</label>
                  <textarea name="requirements" value={formData.requirements} onChange={handleChange} rows={3} className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors resize-none transition duration-base ease-premium" placeholder="Specific technologies, hardware, documentation needs, etc." />
                </div>

                <div className="space-y-2 md:w-1/2">
                  <label className="text-sm font-medium text-white/80">Preferred Delivery Date (Optional)</label>
                  <input type="date" name="deliveryDate" value={formData.deliveryDate} onChange={handleChange} className="w-full h-12 px-4 rounded-xl bg-[#0B1120] border border-white/10 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors [color-scheme:dark] transition duration-base ease-premium" />
                </div>

                <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-end border-t border-white/10">
                  <GlowButton 
                    type="button" 
                    onClick={handleWhatsAppInstead} 
                    variant="outline"
                    className="border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/10 focus-visible:ring-emerald-500 transition duration-base ease-premium"
                    icon={MessageCircle}
                  >
                    WhatsApp Instead
                  </GlowButton>
                  <GlowButton 
                    type="submit" 
                    variant="primary"
                    icon={Send}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                  </GlowButton>
                </div>
              </form>
            </div>
          </GlassCard>
        </section>

        {/* FAQ SECTION */}
        <section className="pb-24 max-w-3xl mx-auto">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle=""
            gradient="blue"
            align="center"
          />
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <GlassCard key={i} variant="default" className="overflow-hidden hover:border-white/20 transition-colors p-0 rounded-xl transition duration-base ease-premium">
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
      </Container>
    </div>
  );
}
