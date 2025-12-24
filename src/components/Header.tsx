import { motion } from "framer-motion";
import { useActiveSection } from "../hooks/useActiveSection";

const Header = function () {
  const activeSection = useActiveSection();

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
  };

  const navItems = [
    {
      href: "#trajetoria",
      label: "Minha História",
      icon: (
        <svg
          className="size-4"
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
      href: "#stack",
      label: "Tecnologias",
      icon: (
        <svg
          className="size-4"
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
      href: "#experiencia",
      label: "Experiência",
      icon: (
        <svg
          className="size-4"
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
          className="size-4"
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
          className="size-4"
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
          className="size-4"
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

  return (
    <motion.header
      className="bg-[var(--primary)]/80 top-0 z-40 hidden border-b border-white/5 backdrop-blur-md md:sticky md:mx-auto md:flex md:w-8/12 md:items-center md:justify-between md:border-none md:bg-transparent md:px-0 md:py-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
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
        {navItems.map((item, index) => {
          const isActive = activeSection === item.href.substring(1);

          return (
            <motion.a
              key={item.href}
              href={item.href}
              onClick={scrollToSection}
              className={`group relative my-[0.30rem] flex items-center gap-2 rounded-lg p-[0.35rem] px-3 font-semibold tracking-wider transition-colors ${
                isActive
                  ? "text-[var(--emphasis)]"
                  : "text-[#d5f6ff] hover:text-[var(--emphasis)]"
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="opacity-70 transition-opacity group-hover:opacity-100">
                {item.icon}
              </span>
              <span>{item.label}</span>

              {/* Underline animado */}
              <motion.span
                className="absolute inset-x-3 bottom-0 h-[2px] origin-left bg-[var(--emphasis)]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isActive ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />

              {/* Underline no hover */}
              <span className="bg-[var(--emphasis)]/50 absolute inset-x-3 bottom-0 h-[2px] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </motion.a>
          );
        })}
      </nav>
    </motion.header>
  );
};

export default Header;
