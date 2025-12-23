import ExperienciaItem from "./ExperienciaItem";
import AnimatedSection from "./AnimatedSection";
import { data } from "../assets/experiencia.json";

export default function Experiencia() {
  return (
    <section id="experiencia">
      <AnimatedSection>
        <h1 className="mb-4 text-4xl font-bold">Experiência profissional:</h1>
      </AnimatedSection>
      <div className="ml-3 flex flex-col space-y-8">
        {data.map((experiencia, index) => (
          <ExperienciaItem
            key={`${experiencia.nomeDaEmpresa}-${experiencia.cargo}`}
            {...experiencia}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
