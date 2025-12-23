import { motion } from "framer-motion";
import { buildBadgeUrl } from "../utils/badges";

interface FormacaoItemProps {
  nomeInstituicao: string;
  areaDeEstudo: string;
  diploma?: string;
  dataInicio: string;
  dataFim?: string;
  competencias: string[];
  index?: number;
}

export default function FormacaoItem({
  nomeInstituicao,
  diploma,
  areaDeEstudo,
  competencias,
  dataInicio,
  dataFim,
  index = 0,
}: FormacaoItemProps) {
  return (
    <motion.div
      className="relative border-l-2 border-[var(--emphasis)]/30 pl-6"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-[var(--emphasis)] bg-[var(--primary)]" />

      <h1 className="emphasis text-2xl font-semibold">{nomeInstituicao}</h1>
      <h2 className="text-lg">{`${diploma}, ${areaDeEstudo}`}</h2>
      <p className="mb-2 text-sm font-extralight text-[#d5f6ff]/60">
        {`${dataInicio} - ${dataFim}`}
      </p>
      <div className="flex flex-wrap gap-2">
        {competencias.map((competencia, i) => (
          <motion.img
            key={competencia}
            src={buildBadgeUrl(competencia)}
            alt={competencia}
            className="h-5"
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
