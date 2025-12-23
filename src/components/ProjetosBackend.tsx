import ProjetoItem from "./ProjetoItem";
import { backendData } from "../assets/backendData.json";

export default function ProjetosBackend() {
  return (
    <section id="backend">
      <h1 className="mb-1 text-4xl font-bold">Projetos Backend:</h1>
      <div className="flex flex-col space-y-8">
        {backendData.map((projeto) => (
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
