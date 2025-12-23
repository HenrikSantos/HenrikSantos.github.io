import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  {
    href: "#inicio",
    label: "Início",
    icon: (
      <svg
        className="size-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    href: "#stack",
    label: "Tecnologias",
    icon: (
      <svg
        className="size-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    href: "#trajetoria",
    label: "Minha História",
    icon: (
      <svg
        className="size-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
  {
    href: "#experiencia",
    label: "Experiência",
    icon: (
      <svg
        className="size-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    href: "#formacao",
    label: "Formação",
    icon: (
      <svg
        className="size-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
        />
      </svg>
    ),
  },
  {
    href: "#frontend",
    label: "Projetos",
    icon: (
      <svg
        className="size-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
        />
      </svg>
    ),
  },
  {
    href: "#contato",
    label: "Contato",
    icon: (
      <svg
        className="size-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("inicio");

  // Intersection Observer para detectar seção ativa
  useEffect(() => {
    const sections = [
      "inicio",
      "stack",
      "trajetoria",
      "experiencia",
      "formacao",
      "frontend",
      "contato",
    ];

    const observers: IntersectionObserver[] = [];

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(sectionId);
              }
            });
          },
          {
            rootMargin: "-30% 0px -70% 0px",
          }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

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
        className="bg-[var(--emphasis)]/90 flex size-12 items-center justify-center rounded-full shadow-lg backdrop-blur-sm"
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
              className="bg-[var(--primary)]/95 fixed right-0 top-0 flex h-full w-72 flex-col p-6 pt-20 shadow-2xl backdrop-blur-md"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <ul className="space-y-2">
                {menuItems.map((item, index) => {
                  const isActive = activeSection === item.href.substring(1);

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
                        className={`hover:bg-[var(--emphasis)]/20 flex items-center gap-3 rounded-lg px-4 py-3 text-lg font-medium transition-all hover:pl-6 ${
                          isActive
                            ? "bg-[var(--emphasis)]/10 border-l-2 border-[var(--emphasis)] text-[var(--emphasis)]"
                            : "text-[#d5f6ff]"
                        }`}
                      >
                        <span
                          className={`transition-opacity ${isActive ? "opacity-100" : "opacity-60"}`}
                        >
                          {item.icon}
                        </span>
                        {item.label}
                      </a>
                    </motion.li>
                  );
                })}
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
