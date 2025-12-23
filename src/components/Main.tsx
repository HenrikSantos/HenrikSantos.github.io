import Inicio from "./Inicio";
import Sobre from "./Sobre";
import Stack from "./Stack";
import Trajetoria from "./Trajetoria";
import Projetos from "./Projetos";
import Fomacao from "./Fomacao";
import Experiencias from "./Experiencias";
import Contato from "./Contato";

export default function Main() {
  return (
    <main>
      <Inicio />
      <div className="mx-auto md:flex md:items-start md:gap-16 lg:w-8/12">
        <Sobre />
        <div className="flex w-full flex-col space-y-12 border-[var(--emphasis)] px-10 pb-6 md:border-l">
          <Trajetoria />
          <Stack />
          <Experiencias />
          <Fomacao />
          <Projetos />
          <Contato />
        </div>
      </div>
    </main>
  );
}
