import ProjetoItem from "./ProjetoItem";
import { frontendData } from "../assets/frontendData.json";

export default function ProjetosFrontend() {
  return (
    <section id="frontend">
      <h1 className="mb-1 text-4xl font-bold">Projetos Frontend:</h1>
      <div className="flex flex-col space-y-8">
        {frontendData.map((projeto) => (
          <ProjetoItem
            key={projeto.id}
            img={projeto.img}
            nome={projeto.nome}
            descricao={projeto.descricao}
            repositorio={projeto.repositorio}
            stacks={projeto.stacks}
            link={projeto.link}
          />
        ))}
      </div>
    </section>
  );
}
