import { motion } from "framer-motion";
import { useActiveSection } from "../hooks/useActiveSection";
import { useScrollToSection } from "../hooks/useScrollToSection";
import { HEADER_NAV_ITEMS } from "../constants/navigation";
import Icon from "./icons/Icon";

export default function Header() {
  const activeSection = useActiveSection();
  const scrollToSection = useScrollToSection();

  return (
    <motion.header
      className="top-0 z-40 hidden w-full border-b border-white/5 bg-[var(--primary)]/80 backdrop-blur-md md:sticky md:block md:border-none md:bg-transparent md:py-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto flex w-[90%] items-center justify-between 3xl:w-8/12">
        <motion.div className="flex justify-between" whileHover={{ scale: 1.02 }}>
          <a
            href="#inicio"
            onClick={scrollToSection}
            className="flex gap-3 text-4xl font-bold transition-colors hover:text-[var(--emphasis)]"
          >
            Henrik Santos
          </a>
        </motion.div>

        <nav className="mt-0 flex min-h-full flex-row justify-end gap-1 text-lg font-normal">
          {HEADER_NAV_ITEMS.map((item, index) => {
            const isActive = activeSection === item.id;

            return (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={scrollToSection}
                className={`group relative my-[0.30rem] flex items-center gap-2 rounded-lg p-[0.35rem] px-3 font-semibold tracking-wider transition-colors ${
                  isActive
                    ? "text-[var(--emphasis)]"
                    : "text-text-primary hover:text-[var(--accent-blue)]"
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="opacity-70 transition-opacity group-hover:opacity-100">
                  <Icon path={item.iconPath} />
                </span>
                <span>{item.label}</span>

                <motion.span
                  className="absolute inset-x-3 bottom-0 h-[2px] origin-left bg-[var(--emphasis)]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                <span className="absolute inset-x-3 bottom-0 h-[2px] origin-left scale-x-0 bg-[var(--emphasis)]/50 transition-transform duration-300 group-hover:scale-x-100" />
              </motion.a>
            );
          })}
        </nav>
      </div>
    </motion.header>
  );
}
