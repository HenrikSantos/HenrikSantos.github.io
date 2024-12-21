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

  const Navbar = () => {
    return (
      <nav
        className="
          mt-0 flex min-h-full w-8/12 flex-row justify-end gap-5 px-3 text-lg font-normal
        "
      >
        {[
          { href: "#stack", label: "Tech Stack" },
          { href: "#experiencia", label: "Experiência" },
          { href: "#formacao", label: "Formação" },
          { href: "#frontend", label: "Projetos" },
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={scrollToSection}
            className="my-[0.30rem] rounded p-[0.35rem] font-semibold tracking-wider hover:bg-[#383838]/50"
          >
            {item.label}
          </a>
        ))}
      </nav>
    );
  };

  return (
    <header className="top-0 z-10 hidden md:sticky md:mx-auto md:flex md:w-8/12 md:items-center md:justify-between md:px-0 md:py-4 md:align-middle md:backdrop-blur-sm">
      <div className="flex justify-between">
        <a
          href="#inicio"
          className="
						flex gap-3
						text-4xl font-bold
					"
        >
          Henrik Santos
        </a>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
