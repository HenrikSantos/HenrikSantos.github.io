import ProjetoItem from "./ProjetoItem";
import { backendData } from "../assets/backendData.json";

export default function ProjetosBackend() {
  return(
    <>
      <h1 className='text-4xl font-bold' id="backend">Projetos Back-end</h1>
      {
        backendData.map((projeto) => 
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
