import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { href: "#inicio", label: "Início" },
  { href: "#stack", label: "Tecnologias" },
  { href: "#trajetoria", label: "Minha História" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#formacao", label: "Formação" },
  { href: "#frontend", label: "Projetos" },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href")?.substring(1);
    const targetElement = document.getElementById(targetId || "");

    if (targetElement) {
      const offset = window.innerHeight / 3 - targetElement.offsetHeight / 3;
      window.scrollTo({
        top: targetElement.offsetTop - offset,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <div className="fixed right-4 top-4 z-50 md:hidden">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--emphasis)]/90 shadow-lg backdrop-blur-sm"
        whileTap={{ scale: 0.9 }}
        aria-label="Menu de navegação"
      >
        <div className="flex h-5 w-6 flex-col justify-between">
          <motion.span
            className="h-0.5 w-full rounded-full bg-white"
            animate={{
              rotate: isOpen ? 45 : 0,
              y: isOpen ? 9 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="h-0.5 w-full rounded-full bg-white"
            animate={{
              opacity: isOpen ? 0 : 1,
              x: isOpen ? 20 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="h-0.5 w-full rounded-full bg-white"
            animate={{
              rotate: isOpen ? -45 : 0,
              y: isOpen ? -9 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.nav
              className="fixed right-0 top-0 flex h-full w-72 flex-col bg-[var(--primary)]/95 p-6 pt-20 shadow-2xl backdrop-blur-md"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <ul className="space-y-2">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={item.href}
                      onClick={scrollToSection}
                      className="block rounded-lg px-4 py-3 text-lg font-medium text-[#d5f6ff] transition-all hover:bg-[var(--emphasis)]/20 hover:pl-6"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto border-t border-white/10 pt-6">
                <p className="text-center text-sm text-[#d5f6ff]/60">
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
