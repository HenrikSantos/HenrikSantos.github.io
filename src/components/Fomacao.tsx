import NovaFormacao from './NovaFormacao';
import { data } from './formacaoData.json';

export default function Fomacao() {
	return (
		<section id='formacao' className='my-6'>
			<h1 className='text-4xl font-bold'>Formação:</h1>
			<div className='flex flex-col space-y-5'>
				{
					data.map((formacao) => (
						<NovaFormacao
							key={`${formacao.nomeInstituicao + formacao.diploma}`}
							areaDeEstudo={formacao.areaDeEstudo}
							nomeInstituicao={formacao.nomeInstituicao}
							diploma={formacao.diploma}
							dataInicio={formacao.dataInicio}
							dataFim={formacao.dataFim}
							competencias={formacao.competencias}
						/>
					))
				}
			</div>
		</section>
	);
}
