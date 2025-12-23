import ProjetoItem from "./ProjetoItem";
import { frontendData } from "../assets/frontendData.json";

export default function ProjetosFrontend() {
  return (
    <>
      <h1 className="mb-1 text-4xl font-bold" id="frontend">
        Projetos Frontend:
      </h1>
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
    </>
  );
}
