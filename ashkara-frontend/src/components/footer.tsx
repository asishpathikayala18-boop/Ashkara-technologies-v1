import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, ArrowRight } from "lucide-react";
import { Container } from "./container";
import { siteConfig } from "../config/site";
import { GlowButton } from "./ui/glow-button";

export function Footer() {
  return (
    <footer className="relative bg-[#040810] border-t border-white/5 pt-20 pb-10 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-neon-blue/10 blur-[120px] rounded-[100%]" />
      </div>

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2 text-2xl font-bold text-white mb-6 group">
              <div className="relative flex items-center justify-center size-8 rounded-lg bg-gradient-to-br from-neon-blue to-neon-violet overflow-hidden shadow-glow group-hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] transition-shadow transition duration-base ease-premium">
                <span className="text-white text-lg font-black font-sans z-10 tracking-tighter">A</span>
              </div>
              <span className="tracking-tight">{siteConfig.companyName}</span>
            </Link>
            <p className="text-white/60 mb-8 max-w-sm leading-relaxed">
              Pioneering the future of technology with premium engineering solutions. From artificial intelligence to custom electronics, we bring innovative ideas to life.
            </p>
            <div className="flex gap-4">
              <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="size-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-pink-500 hover:border-pink-500/50 hover:bg-pink-500/10 hover:-translate-y-1 transition-all duration-300 transition duration-base ease-premium">
                <Instagram className="size-5" />
              </a>
              <a href={`mailto:${siteConfig.email}`} className="size-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-neon-cyan hover:border-neon-cyan/50 hover:bg-neon-cyan/10 hover:-translate-y-1 transition-all duration-300 transition duration-base ease-premium">
                <Mail className="size-5" />
              </a>
              <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer" className="size-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-emerald-400 hover:border-emerald-400/50 hover:bg-emerald-400/10 hover:-translate-y-1 transition-all duration-300 transition duration-base ease-premium">
                <Phone className="size-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4 text-white/60">
              <li><Link to="/" className="hover:text-neon-cyan transition-colors flex items-center gap-2 group transition duration-base ease-premium"><ArrowRight className="size-3 text-neon-cyan/0 group-hover:text-neon-cyan transition-colors transition duration-base ease-premium" /> Home</Link></li>
              <li><Link to="/about" className="hover:text-neon-cyan transition-colors flex items-center gap-2 group transition duration-base ease-premium"><ArrowRight className="size-3 text-neon-cyan/0 group-hover:text-neon-cyan transition-colors transition duration-base ease-premium" /> About Us</Link></li>
              <li><Link to="/#project-vault" className="hover:text-neon-cyan transition-colors flex items-center gap-2 group transition duration-base ease-premium"><ArrowRight className="size-3 text-neon-cyan/0 group-hover:text-neon-cyan transition-colors transition duration-base ease-premium" /> Project Library</Link></li>
              <li><Link to="/#engineering-solutions" className="hover:text-neon-cyan transition-colors flex items-center gap-2 group transition duration-base ease-premium"><ArrowRight className="size-3 text-neon-cyan/0 group-hover:text-neon-cyan transition-colors transition duration-base ease-premium" /> Services</Link></li>
              <li><Link to="/faq" className="hover:text-neon-cyan transition-colors flex items-center gap-2 group transition duration-base ease-premium"><ArrowRight className="size-3 text-neon-cyan/0 group-hover:text-neon-cyan transition-colors transition duration-base ease-premium" /> FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-neon-cyan transition-colors flex items-center gap-2 group transition duration-base ease-premium"><ArrowRight className="size-3 text-neon-cyan/0 group-hover:text-neon-cyan transition-colors transition duration-base ease-premium" /> Contact</Link></li>
            </ul>
          </div>

          {/* Domains */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Engineering</h3>
            <ul className="space-y-4 text-white/60">
              <li><Link to="/projects?category=web-development" className="hover:text-neon-cyan transition-colors flex items-center gap-2 group transition duration-base ease-premium"><ArrowRight className="size-3 text-neon-cyan/0 group-hover:text-neon-cyan transition-colors transition duration-base ease-premium" /> Web Development</Link></li>
              <li><Link to="/projects?category=machine-learning" className="hover:text-neon-cyan transition-colors flex items-center gap-2 group transition duration-base ease-premium"><ArrowRight className="size-3 text-neon-cyan/0 group-hover:text-neon-cyan transition-colors transition duration-base ease-premium" /> Machine Learning</Link></li>
              <li><Link to="/projects?category=iot" className="hover:text-neon-cyan transition-colors flex items-center gap-2 group transition duration-base ease-premium"><ArrowRight className="size-3 text-neon-cyan/0 group-hover:text-neon-cyan transition-colors transition duration-base ease-premium" /> IoT & Embedded</Link></li>
              <li><Link to="/projects?category=android" className="hover:text-neon-cyan transition-colors flex items-center gap-2 group transition duration-base ease-premium"><ArrowRight className="size-3 text-neon-cyan/0 group-hover:text-neon-cyan transition-colors transition duration-base ease-premium" /> App Development</Link></li>
              <li><Link to="/projects?category=custom-software" className="hover:text-neon-cyan transition-colors flex items-center gap-2 group transition duration-base ease-premium"><ArrowRight className="size-3 text-neon-cyan/0 group-hover:text-neon-cyan transition-colors transition duration-base ease-premium" /> Custom Software</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4 text-white/60">
              <li className="flex items-start gap-3">
                <MapPin className="size-5 shrink-0 text-neon-blue mt-0.5" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="size-5 shrink-0 text-emerald-400 mt-0.5" />
                <span>{siteConfig.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="size-5 shrink-0 text-neon-cyan mt-0.5" />
                <span>{siteConfig.email}</span>
              </li>
            </ul>
            <div className="mt-8">
              <GlowButton href="/contact" variant="primary" className="w-full">
                Get a Quote
              </GlowButton>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>© {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors transition duration-base ease-premium">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors transition duration-base ease-premium">Terms & Conditions</Link>
            <Link to="/disclaimer" className="hover:text-white transition-colors transition duration-base ease-premium">Disclaimer</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
