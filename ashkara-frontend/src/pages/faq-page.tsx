import { SEO } from "../components/SEO";
import { useEffect, useState } from "react";
import { Container } from "../components/container";
import { SectionHeading } from "../components/ui/section-heading";
import { GlassCard } from "../components/ui/glass-card";
import { GlowButton } from "../components/ui/glow-button";
import { ChevronDown, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "../config/site";

const faqs = [
  {
    question: "Do you provide complete source code and documentation?",
    answer: "Yes, every project includes the complete source code, a detailed project report (documentation), an execution guide, and a PowerPoint presentation (PPT) tailored for your academic or industrial needs."
  },
  {
    question: "Can I request custom modifications to an existing project?",
    answer: "Absolutely! We specialize in custom engineering solutions. You can request specific features, UI changes, or entirely new functionalities to be added to any project."
  },
  {
    question: "How do I deploy the project once it's complete?",
    answer: "We provide full deployment support. Depending on the project, we can deploy it on cloud platforms like AWS, Vercel, Heroku, or Firebase, and provide you with a live URL."
  },
  {
    question: "What technologies do you use?",
    answer: "We use modern, industry-standard technologies including React, Next.js, Node.js, Python, TensorFlow for AI/ML, Flutter for mobile, and various IoT platforms."
  },
  {
    question: "Do you offer technical support or guidance for viva/presentations?",
    answer: "Yes, we ensure you understand the project architecture and code flow. We provide technical guidance to help you confidently present the project and answer viva questions."
  },
  {
    question: "How long does it take to develop a custom project?",
    answer: "Delivery time varies based on the project's complexity. Standard projects are delivered within a few days, while complex custom solutions might take 2-4 weeks. We always agree on a timeline before starting."
  }
];

export function FAQPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#040810] selection:bg-neon-cyan/30 selection:text-white pt-24 pb-20">
      <SEO title="FAQ" description="Frequently Asked Questions about our services." url="/faq" />
    
      {/* Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,163,255,0.05),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-radial-grid bg-[length:32px_32px] opacity-[0.1]" />
      </div>

      <Container>
        <section className="py-12 md:py-20">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Support & Information"
            gradient="cyan"
            align="center"
          >
            Find answers to common questions about our engineering projects, delivery process, and support services.
          </SectionHeading>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <GlassCard 
                key={index} 
                variant="default"
                className="overflow-hidden border-white/10 transition-colors hover:border-neon-cyan/30 transition duration-base ease-premium"
              >
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between outline-none focus-visible:bg-white/5"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="font-semibold text-lg text-white pr-8">{faq.question}</span>
                  <ChevronDown 
                    className={`size-5 text-neon-cyan shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} 
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 pt-2 text-white/70 leading-relaxed border-t border-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
            <p className="text-white/60 mb-8 max-w-md mx-auto">
              Our engineering team is ready to help you with your specific project requirements.
            </p>
            <GlowButton
              href={`${siteConfig.whatsapp}?text=Hi, I have a question regarding a project.`}
              target="_blank"
              icon={MessageCircle}
              variant="primary"
            >
              Chat With Us
            </GlowButton>
          </div>
        </section>
      </Container>
    </div>
  );
}
