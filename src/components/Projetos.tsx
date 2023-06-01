import NovoProjeto from './NovoProjeto';
import { data } from './projetosData.json';

export default function Projetos() {
	return (
		<section className='mt-6'>
			<h1 className='text-4xl font-bold'>
				Projetos:
			</h1>
			{
				data.map((projeto) => (
					<NovoProjeto 
						key={projeto.id}
						img={projeto.img}
						nome={projeto.nome}
						descricao={projeto.descricao}
						repositorio={projeto.repositorio}
						stacks={projeto.stacks}
						link={projeto.link}
					/>
				))
			}
		</section>
	);
}
