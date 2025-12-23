import { motion } from "framer-motion";

const Header = function () {
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
    { href: "#stack", label: "Tecnologias" },
    { href: "#trajetoria", label: "Minha História" },
    { href: "#experiencia", label: "Experiência" },
    { href: "#formacao", label: "Formação" },
    { href: "#frontend", label: "Projetos" },
  ];

  return (
    <motion.header
      className="top-0 z-40 hidden border-b border-white/5 bg-[var(--primary)]/80 backdrop-blur-md md:sticky md:mx-auto md:flex md:w-8/12 md:items-center md:justify-between md:border-none md:bg-transparent md:px-0 md:py-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex justify-between"
        whileHover={{ scale: 1.02 }}
      >
        <a
          href="#inicio"
          onClick={scrollToSection}
          className="flex gap-3 text-4xl font-bold transition-colors hover:text-[var(--emphasis)]"
        >
          Henrik Santos
        </a>
      </motion.div>

      <nav className="mt-0 flex min-h-full w-8/12 flex-row justify-end gap-1 px-3 text-lg font-normal">
        {navItems.map((item, index) => (
          <motion.a
            key={item.href}
            href={item.href}
            onClick={scrollToSection}
            className="relative my-[0.30rem] rounded-lg p-[0.35rem] px-3 font-semibold tracking-wider text-[#d5f6ff] transition-colors hover:text-[var(--emphasis)]"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.label}
          </motion.a>
        ))}
      </nav>
    </motion.header>
  );
};

export default Header;
