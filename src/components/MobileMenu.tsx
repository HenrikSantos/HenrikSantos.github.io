import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useActiveSection } from "../hooks/useActiveSection";
import { useScrollToSection } from "../hooks/useScrollToSection";
import { MOBILE_NAV_ITEMS } from "../constants/navigation";
import Icon from "./icons/Icon";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection();
  const closeMenu = useCallback(() => setIsOpen(false), []);
  const scrollToSection = useScrollToSection(closeMenu);

  return (
    <div className="fixed right-4 top-4 z-50 md:hidden">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex size-12 items-center justify-center rounded-full bg-[var(--emphasis)]/90 shadow-lg backdrop-blur-sm"
        whileTap={{ scale: 0.9 }}
        aria-label="Menu de navegação"
      >
        <div className="flex h-5 w-6 flex-col justify-between">
          <motion.span
            className="h-0.5 w-full rounded-full bg-white"
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 9 : 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="h-0.5 w-full rounded-full bg-white"
            animate={{ opacity: isOpen ? 0 : 1, x: isOpen ? 20 : 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="h-0.5 w-full rounded-full bg-white"
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -9 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-primary/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />
            <motion.nav
              className="fixed right-0 top-0 flex h-full w-72 flex-col bg-[var(--primary)]/95 p-6 pt-20 shadow-2xl backdrop-blur-md"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <ul className="space-y-2">
                {MOBILE_NAV_ITEMS.map((item, index) => {
                  const isActive = activeSection === item.id;

                  return (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <a
                        href={item.href}
                        onClick={scrollToSection}
                        className={`flex items-center gap-3 rounded-lg px-4 py-3 text-lg font-medium transition-all hover:bg-[var(--emphasis)]/20 hover:pl-6 ${
                          isActive
                            ? "border-l-2 border-[var(--emphasis)] bg-[var(--emphasis)]/10 text-[var(--emphasis)]"
                            : "text-text-primary"
                        }`}
                      >
                        <span
                          className={`transition-opacity ${isActive ? "opacity-100" : "opacity-60"}`}
                        >
                          <Icon path={item.iconPath} className="size-5" />
                        </span>
                        {item.label}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
              <div className="mt-auto border-t border-white/10 pt-6">
                <p className="text-center text-sm text-text-primary/60">
                  Henrik Santos
                </p>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
