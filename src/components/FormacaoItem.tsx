
interface FormacaoItemProps {
	nomeInstituicao: string,
	areaDeEstudo: string,
	diploma?: string,
	dataInicio: string,
	dataFim?: string,
	competencias: string[]
}

export default function FormacaoItem({
  nomeInstituicao,
  diploma,
  areaDeEstudo,
  competencias,
  dataInicio,
  dataFim,
}: FormacaoItemProps) {
  return (
    <div data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-duration="1500">
      <h1 className='emphasis text-2xl'>{nomeInstituicao}</h1>
      <h2>{`${diploma}, ${areaDeEstudo}`}</h2>
      <p className='text-sm font-extralight'>{`${dataInicio} - ${dataFim}`}</p>
      <div className='mt-3 flex flex-wrap gap-2'>
        {competencias.map((competencia) => 
          <span key={competencia} className='rounded-xl border border-[var(--emphasis)] px-2 text-sm font-extralight hover:cursor-pointer hover:bg-[var(--primary)]'>{competencia}</span>
        )}
      </div>
    </div>
  );
}
