import { motion } from "framer-motion";
import Badge from "./Badge";

interface ExperienciaItemProps {
  nomeDaEmpresa: string;
  cargo: string;
  nivel: string;
  dataInicio: string;
  dataFim?: string;
  descricao: string;
  competencias: string[];
  index?: number;
}

export default function ExperienciaItem({
  nomeDaEmpresa,
  cargo,
  nivel,
  dataInicio,
  dataFim,
  descricao,
  competencias,
  index = 0,
}: ExperienciaItemProps) {
  return (
    <motion.div
      className="timeline-line relative"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="timeline-marker" />

      <h1 className="emphasis text-xl font-semibold sm:text-2xl">
        {nomeDaEmpresa}
      </h1>
      <h2 className="text-lg">{`${cargo}${nivel ? `, ${nivel}` : ""}`}</h2>
      <p className="mb-2 text-sm font-extralight text-text-primary/60">
        {`${dataInicio} - ${dataFim || "Presente"}`}
      </p>
      <p className="mb-3 leading-relaxed">{descricao}</p>
      <div className="flex flex-wrap gap-2">
        {competencias.map((competencia, i) => (
          <Badge
            key={competencia}
            name={competencia}
            className="h-5"
            animated
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.05 }}
            whileHover={{ scale: 1.1 }}
          />
        ))}
      </div>
    </motion.div>
  );
}
