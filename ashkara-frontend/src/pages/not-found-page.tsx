import { SEO } from "../components/SEO";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "../components/container";
import { GlowButton } from "../components/ui/glow-button";
import { AlertCircle, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export function NotFoundPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#040810] selection:bg-neon-cyan/30 selection:text-white flex items-center justify-center pt-24 pb-20">
      <SEO title="Page Not Found" description="404 - Page not found." url="/not-found" />
    
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,163,255,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-radial-grid bg-[length:32px_32px] opacity-[0.1]" />
      </div>

      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-neon-cyan/20 blur-2xl rounded-full" />
              <div className="size-24 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(0,163,255,0.2)]">
                <AlertCircle className="size-12 text-neon-cyan" />
              </div>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 mb-4"
          >
            404
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold text-white mb-6"
          >
            System Not Found
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-white/60 mb-10 max-w-md mx-auto text-lg"
          >
            The engineering module you are looking for has been moved, deleted, or does not exist in this sector.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <GlowButton href="/" icon={ArrowLeft} variant="primary">
              Return to Base
            </GlowButton>
            <Link to="/contact" className="text-white/60 hover:text-white transition-colors text-sm font-medium transition duration-base ease-premium">
              Report an Issue
            </Link>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
