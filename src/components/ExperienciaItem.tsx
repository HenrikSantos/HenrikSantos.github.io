interface ExperienciaItemProps {
  nomeDaEmpresa: string;
  cargo: string;
  nivel: string;
  dataInicio: string;
  dataFim?: string;
  descricao: string;
  competencias: string[];
}

export default function ExperienciaItem({
  nomeDaEmpresa,
  cargo,
  nivel,
  dataInicio,
  dataFim,
  descricao,
  competencias,
}: ExperienciaItemProps) {
  return (
    <div
      data-aos="fade-left"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1500"
    >
      <h1 className="emphasis text-2xl">{nomeDaEmpresa}</h1>
      <h2>{`${cargo}${nivel ? `, ${nivel}` : ""}`}</h2>
      <p className="text-sm font-extralight">{`${dataInicio} - ${
        dataFim || "Presente"
      }`}</p>
      <p>{descricao}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {competencias.map((competencia) => (
          <span
            key={competencia}
            className="rounded-xl border border-[var(--emphasis)] px-2 text-sm font-extralight hover:cursor-pointer hover:bg-[var(--primary)]"
          >
            {competencia}
          </span>
        ))}
      </div>
    </div>
  );
}
