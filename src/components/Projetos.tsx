
import ProjetoItem from "./ProjetoItem";
import { data } from "../assets/projetosData.json";

export default function Projetos() {
  return (
    <section className='mt-6'>
      <h1 className='text-4xl font-bold'>
				Projetos:
      </h1>
      {
        data.map((projeto) => 
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
    </section>
  );
}
