import ExperienciaItem from "./ExperienciaItem";
import { data } from "../assets/experiencia.json";

export default function Experiencia() {
  return (
    <section id="experiencia" className="my-6">
      <h1 className="text-4xl font-bold">Experiência profissional:</h1>
      <div className="flex flex-col space-y-5">
        {data.map((experiencia) => (
          <ExperienciaItem
            key={`${experiencia.nomeDaEmpresa}-${experiencia.cargo}`}
            {...experiencia}
          />
        ))}
      </div>
    </section>
  );
}
