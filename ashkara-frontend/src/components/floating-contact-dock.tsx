import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Mail, Instagram, X, MessageSquarePlus } from "lucide-react";
import { siteConfig } from "../config/site";
import { cn } from "../utils/cn";

export function FloatingContactDock() {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  const links = [
    { name: "WhatsApp", icon: MessageCircle, href: siteConfig.whatsapp, color: "text-emerald-400", bgHover: "hover:bg-emerald-400/20", borderHover: "hover:border-emerald-400/40" },
    { name: "Email", icon: Mail, href: `mailto:${siteConfig.email}`, color: "text-neon-cyan", bgHover: "hover:bg-neon-cyan/20", borderHover: "hover:border-neon-cyan/40" },
    { name: "Instagram", icon: Instagram, href: siteConfig.instagram, color: "text-pink-500", bgHover: "hover:bg-pink-500/20", borderHover: "hover:border-pink-500/40" },
  ];

  return (
    <>
      {/* DESKTOP DOCK (Hidden on Mobile) */}
      <div 
        className="hidden md:flex fixed bottom-6 right-6 z-50 items-end justify-end"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div 
          className="flex flex-col-reverse items-end gap-3"
          animate={{ height: "auto" }}
        >
          {/* Main Trigger Button */}
          <div className="flex items-center justify-center size-14 rounded-full bg-[#0B1120] border border-white/20 shadow-glow cursor-pointer hover:scale-105 transition-transform z-10 transition duration-base ease-premium">
            <MessageSquarePlus className="size-6 text-white" />
          </div>

          {/* Expanded Actions */}
          <AnimatePresence>
            {isHovered && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-3 mb-2"
              >
                {links.slice().reverse().map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      "flex items-center gap-3 pr-4 pl-3 py-2 rounded-full bg-[#0B1120] border border-white/10 backdrop-blur-md transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5)] group hover:-translate-x-1",
                      link.borderHover, link.bgHover
                    )}
                  >
                    <div className="flex items-center justify-center size-8 rounded-full bg-white/5">
                      <link.icon className={cn("size-4", link.color)} />
                    </div>
                    <span className="text-sm font-bold text-white whitespace-nowrap">{link.name}</span>
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* MOBILE FAB (Hidden on Desktop) */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isOpenMobile && (
            <>
              {/* Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm -z-10"
                onClick={() => setIsOpenMobile(false)}
              />
              
              {/* Menu Items */}
              <motion.div 
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                className="absolute bottom-20 right-0 flex flex-col items-end gap-4"
              >
                {links.slice().reverse().map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 pr-5 pl-4 py-3 rounded-full bg-[#0B1120] border border-white/20 shadow-2xl active:scale-95"
                  >
                    <span className="text-base font-bold text-white">{link.name}</span>
                    <link.icon className={cn("size-5", link.color)} />
                  </motion.a>
                ))}
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <button 
          onClick={() => setIsOpenMobile(!isOpenMobile)}
          className={cn(
            "flex items-center justify-center size-14 rounded-full border border-white/20 shadow-glow transition-transform duration-300 active:scale-90 outline-none",
            isOpenMobile ? "bg-white/10" : "bg-gradient-to-r from-neon-blue to-neon-violet"
          )}
        >
          {isOpenMobile ? (
            <X className="size-6 text-white" />
          ) : (
            <MessageSquarePlus className="size-6 text-white" />
          )}
        </button>
      </div>
    </>
  );
}
