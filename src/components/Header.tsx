
const Header = function () {

  return (
    <header className="top-0 z-10 hidden md:sticky md:mx-auto md:flex md:w-8/12 md:items-center md:justify-between md:px-0 md:py-4 md:align-middle md:backdrop-blur-sm"
    >
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
      <nav
        className={`
					mt-0
					flex min-h-full w-8/12 flex-row justify-end gap-5 px-3 text-lg font-normal
				`}
      >
        <a className="my-[0.30rem] rounded p-[0.35rem] font-semibold tracking-wider hover:bg-[#383838]/50" href="#stack">
					Tech Stack
        </a>
        <a className="my-[0.30rem] rounded p-[0.35rem] font-semibold tracking-wider hover:bg-[#383838]/50" href="#formacao">
					Formação
        </a>
        <a className="my-[0.30rem] rounded p-[0.35rem] font-semibold tracking-wider hover:bg-[#383838]/50" href="#frontend">
					Front-end
        </a>
        <a className="my-[0.30rem] rounded p-[0.35rem] font-semibold tracking-wider hover:bg-[#383838]/50" href="#backend">
					Back-end
        </a>
        <a className="my-[0.30rem] rounded p-[0.35rem] font-semibold tracking-wider hover:bg-[#383838]/50" href="#outros">
					Outros
        </a>
      </nav>
    </header>
  );
};

export default Header;
