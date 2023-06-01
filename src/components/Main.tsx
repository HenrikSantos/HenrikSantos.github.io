import Inicio from './Inicio';
import Sobre from './Sobre.tsx';
import Stack from './Stack.tsx';
import Projetos from './Projetos.tsx';
import Fomacao from './Fomacao.tsx';
export default function Main() {
	return (
		<main>
			<Inicio />
			<div className='mx-auto md:flex md:items-start md:gap-16 lg:w-8/12'>
				<Sobre />
				<div className='flex w-full flex-col space-y-10 border-[var(--emphasis)] px-7 pb-6 md:border-l'>
					<Stack />
					<Projetos />
					<Fomacao />
				</div>
			</div>
		</main>
	);
}
