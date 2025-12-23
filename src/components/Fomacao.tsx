import FormacaoItem from "./FormacaoItem";
import { data } from "../assets/formacaoData.json";

export default function Fomacao() {
  return (
    <section id="formacao">
      <h1 className="mb-1 text-4xl font-bold">Formação:</h1>
      <div className="ml-3 flex flex-col space-y-5">
        {data.map((formacao) => (
          <FormacaoItem
            key={`${formacao.nomeInstituicao + formacao.diploma}`}
            areaDeEstudo={formacao.areaDeEstudo}
            nomeInstituicao={formacao.nomeInstituicao}
            diploma={formacao.diploma}
            dataInicio={formacao.dataInicio}
            dataFim={formacao.dataFim}
            competencias={formacao.competencias}
          />
        ))}
      </div>
    </section>
  );
}
