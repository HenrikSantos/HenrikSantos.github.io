import { motion } from "framer-motion";
import { buildBadgeUrl } from "../utils/badges";

interface ProjetoItemProps {
  img?: string;
  nome: string;
  descricao: string;
  repositorio?: string;
  stacks: string[];
  link?: string;
  index?: number;
  onClick?: () => void;
  featured?: boolean;
}

export default function ProjetoItem({
  img,
  nome,
  descricao,
  repositorio,
  stacks,
  link,
  index = 0,
  onClick,
  featured = false,
}: ProjetoItemProps) {
  return (
    <motion.div
      className={`group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-[var(--emphasis)]/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-[var(--emphasis)]/10 ${featured ? "md:col-span-2 md:row-span-2" : ""}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      {img && (
        <div className="relative h-48 w-full overflow-hidden">
          <motion.img
            src={`/static/images/${img}`}
            alt={nome}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)] via-transparent to-transparent" />
        </div>
      )}

      <div className="p-5">
        <h1 className="mb-2 text-xl font-bold text-[var(--emphasis)] transition-colors group-hover:text-cyan-300">
          {nome}
        </h1>
        <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-[#d5f6ff]/80">
          {descricao}
        </p>

        <div className="mb-4 flex flex-wrap gap-1.5">
          {stacks.slice(0, 5).map((tec) => (
            <motion.img
              key={tec}
              src={buildBadgeUrl(tec)}
              alt={tec}
              className="h-5"
              whileHover={{ scale: 1.1 }}
            />
          ))}
          {stacks.length > 5 && (
            <span className="flex h-5 items-center rounded-full bg-white/10 px-2 text-xs text-[#d5f6ff]/60">
              +{stacks.length - 5}
            </span>
          )}
        </div>

        <div className="flex gap-2">
          {repositorio && (
            <motion.a
              href={repositorio}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm font-medium text-[#d5f6ff] backdrop-blur-sm transition-all hover:border-[var(--emphasis)] hover:bg-[var(--emphasis)]/20"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              Código
            </motion.a>
          )}
          {link && (
            <motion.a
              href={link}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 rounded-lg bg-[var(--emphasis)] px-3 py-2 text-sm font-medium text-white transition-all hover:bg-cyan-400"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Demo
            </motion.a>
          )}
        </div>
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[var(--emphasis)]/5 via-transparent to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.div>
  );
}
