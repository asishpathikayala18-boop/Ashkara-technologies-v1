import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export type TimelineItemProps = {
  title: string;
  description: string;
  icon?: React.ElementType;
  isActive?: boolean;
};

type TimelineProps = {
  items: TimelineItemProps[];
  className?: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Vertical Line */}
      <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-neon-blue/50 via-neon-violet/30 to-transparent md:left-1/2 md:-ml-px" />
      
      <div className="space-y-12">
        {items.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative flex items-center md:justify-between"
            >
              {/* Desktop layout: Left or Right content */}
              <div className={cn(
                "hidden md:block w-[calc(50%-3rem)]",
                !isEven && "order-1 text-right",
                isEven && "order-3"
              )}>
                {isEven ? (
                  <div className="pl-4">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/60">{item.description}</p>
                  </div>
                ) : (
                  <div className="pr-4">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/60">{item.description}</p>
                  </div>
                )}
              </div>

              {/* Center Icon */}
              <div className="z-10 flex size-16 shrink-0 items-center justify-center rounded-full border border-neon-blue/30 bg-[#0B1120] shadow-[0_0_15px_rgba(0,163,255,0.2)] md:order-2 md:mx-auto">
                <div className={cn(
                  "flex size-12 items-center justify-center rounded-full bg-white/5 transition-colors duration-500",
                  item.isActive && "bg-neon-blue/20"
                )}>
                  {item.icon ? (
                    <item.icon className="size-5 text-neon-cyan" />
                  ) : (
                    <span className="text-lg font-bold text-neon-cyan">{index + 1}</span>
                  )}
                </div>
              </div>

              {/* Mobile layout: Content always on right */}
              <div className="ml-6 md:hidden">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/60">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
