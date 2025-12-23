import { buildBadgeUrl } from "../utils/badges";

interface ProjetoItemProps {
  img?: string;
  nome: string;
  descricao: string;
  repositorio?: string;
  stacks: string[];
  link?: string;
}

export default function ProjetoItem({
  img,
  nome,
  descricao,
  repositorio,
  stacks,
  link,
}: ProjetoItemProps) {
  return (
    <div
      className="secundary ml-3 rounded shadow"
      data-aos="fade-left"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1500"
    >
      {img && (
        <img
          src={`/static/images/${img}`}
          alt={`${nome}`}
          className="mx-auto w-auto rounded-t-md md:w-full"
        />
      )}
      <div className="px-5 pb-5 pt-3">
        <h1 className="emphasis text-2xl font-semibold">{nome}:</h1>
        <p className="my-2 tracking-tight">{descricao}</p>
        <div className="flex flex-wrap gap-2">
          {stacks.map((tec) => (
            <img
              key={tec}
              src={buildBadgeUrl(tec)}
              alt={tec}
              className="h-5"
            />
          ))}
        </div>
        <p className="mt-5 flex gap-3">
          {repositorio && (
            <a
              href={repositorio}
              target="_blank"
              rel="noreferrer"
              className="primary rounded border border-white/60 p-2 px-5 font-semibold hover:bg-[var(--emphasis)]"
            >
              Repositório
            </a>
          )}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="primary rounded border border-white/60 p-2 px-5 font-semibold hover:bg-[var(--emphasis)]"
            >
              Acessar
            </a>
          )}
        </p>
      </div>
    </div>
  );
}
