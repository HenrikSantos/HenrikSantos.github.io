import FormacaoItem from "./FormacaoItem";
import AnimatedSection from "./AnimatedSection";
import { data } from "../assets/formacaoData.json";

export default function Fomacao() {
  return (
    <section id="formacao">
      <AnimatedSection>
        <h1 className="mb-4 text-4xl font-bold">Formação:</h1>
      </AnimatedSection>
      <div className="ml-3 flex flex-col space-y-8">
        {data.map((formacao, index) => (
          <FormacaoItem
            key={`${formacao.nomeInstituicao + formacao.diploma}`}
            areaDeEstudo={formacao.areaDeEstudo}
            nomeInstituicao={formacao.nomeInstituicao}
            diploma={formacao.diploma}
            dataInicio={formacao.dataInicio}
            dataFim={formacao.dataFim}
            competencias={formacao.competencias}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
