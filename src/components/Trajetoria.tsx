import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { variants } from "../utils/animations";
import Icon from "./icons/Icon";
import timelineData from "../assets/trajetoriaData.json";

type IconType = "education" | "work" | "tech";

interface TimelineItem {
  period: string;
  title: string;
  description: string;
  technologies?: string[];
  icon: IconType;
}

const iconPaths: Record<IconType, string> = {
  education:
    "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
  work: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  tech: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
};

function TechBadge({ tech }: { tech: string }) {
  return (
    <motion.span
      className="inline-block rounded-full bg-[var(--emphasis)]/20 px-3 py-1 text-sm font-medium text-[var(--emphasis)] transition-colors hover:bg-[var(--emphasis)]/30"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {tech}
    </motion.span>
  );
}

export default function Trajetoria() {
  return (
    <section id="trajetoria">
      <AnimatedSection>
        <h1 className="mb-8">
          <span className="text-3xl font-semibold sm:text-4xl">
            Minha História
          </span>
        </h1>
      </AnimatedSection>

      <div className="relative ml-4">
        <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-[var(--emphasis)] via-[var(--emphasis)]/50 to-transparent" />

        <motion.div
          variants={variants.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {(timelineData as TimelineItem[]).map((item, index) => (
            <motion.div
              key={index}
              className="relative mb-8 pl-12"
              variants={variants.fadeInLeft}
            >
              <motion.div
                className="absolute left-0 flex size-9 items-center justify-center rounded-full border-2 border-[var(--emphasis)] bg-[var(--primary)] text-[var(--emphasis)]"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <Icon path={iconPaths[item.icon]} className="size-5" />
              </motion.div>

              <motion.div
                className="glass-card p-5"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[var(--emphasis)]/10 px-3 py-1 text-sm font-medium text-[var(--emphasis)]">
                    {item.period}
                  </span>
                  <h2 className="text-lg font-semibold text-white sm:text-xl">
                    {item.title}
                  </h2>
                </div>

                <p className="leading-relaxed text-gray-300">
                  {item.description}
                </p>

                {item.technologies && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <TechBadge key={tech} tech={tech} />
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
