import ProjetoItem from "./ProjetoItem";
import { outrosProjetosData } from "../assets/outrosProjetosData.json";

export default function OutrosProjetos() {
  return (
    <section id="outros">
      <h1 className="mb-1 text-4xl font-bold">Outros Projetos:</h1>
      <div className="flex flex-col space-y-8">
        {outrosProjetosData.map((projeto) => (
          <ProjetoItem
            key={projeto.id}
            nome={projeto.nome}
            link={projeto.link}
            descricao={projeto.descricao}
            repositorio={projeto.repositorio}
            stacks={projeto.stacks}
          />
        ))}
      </div>
    </section>
  );
}
