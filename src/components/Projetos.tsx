import ProjetosFrontend from "./ProjetosFrontend";
import ProjetosBackend from "./ProjetosBackend";
import OutrosProjetos from "./OutrosProjetos";

export default function Projetos() {
  return (
    <section className="space-y-5">
      <ProjetosFrontend />
      <ProjetosBackend />
      <OutrosProjetos />
    </section>
  );
}
