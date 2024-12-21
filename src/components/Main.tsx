import Inicio from "./Inicio";
import Sobre from "./Sobre";
import Stack from "./Stack";
import Projetos from "./Projetos";
import Fomacao from "./Fomacao";
import Experiencias from "./Experiencias";

export default function Main() {
  return (
    <main>
      <Inicio />
      <div className="mx-auto md:flex md:items-start md:gap-16 lg:w-8/12">
        <Sobre />
        <div className="flex w-full flex-col space-y-5 border-[var(--emphasis)] px-7 pb-6 md:border-l">
          <Stack />
          <Experiencias />
          <Fomacao />
          <Projetos />
        </div>
      </div>
    </main>
  );
}
