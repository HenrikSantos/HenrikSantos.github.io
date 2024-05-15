import ProjetoItem from "./ProjetoItem";
import { outrosProjetosData } from "../assets/outrosProjetosData.json";

export default function ProjetosBackend() {
  return(
    <>
      <h1 className='text-4xl font-bold' id="outros">Outros Projetos</h1>
      {
        outrosProjetosData.map((projeto) => 
          <ProjetoItem 
            key={projeto.id}
            nome={projeto.nome}
            link={projeto.link}
            descricao={projeto.descricao}
            repositorio={projeto.repositorio}
            stacks={projeto.stacks}
          />
        )
      }
    </>
  );
}
