import ProjetoItem from "./ProjetoItem";
import { frontendData } from "../assets/frontendData.json";

export default function ProjetosFrontend() {
  return(
    <>
      <h1 className='text-4xl font-bold' id="frontend">Projetos Front-end</h1>
      {
        frontendData.map((projeto) => 
          <ProjetoItem 
            key={projeto.id}
            img={projeto.img}
            nome={projeto.nome}
            descricao={projeto.descricao}
            repositorio={projeto.repositorio}
            stacks={projeto.stacks}
            link={projeto.link}
          />
        )
      }
    </>);
}
