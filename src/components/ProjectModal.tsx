import { motion, AnimatePresence } from "framer-motion";
import { buildBadgeUrl } from "../utils/badges";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    img?: string;
    nome: string;
    descricao: string;
    repositorio?: string;
    stacks: string[];
    link?: string;
  } | null;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-4 z-50 m-auto flex max-h-[90vh] max-w-3xl flex-col overflow-hidden rounded-xl border border-white/10 bg-[var(--primary)] shadow-2xl shadow-[var(--emphasis)]/10 backdrop-blur-md md:inset-10"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[var(--primary)]/80 text-[#d5f6ff] transition-colors hover:border-[var(--emphasis)] hover:text-[var(--emphasis)]"
              aria-label="Fechar modal"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {project.img && (
              <div className="relative h-64 w-full flex-shrink-0 overflow-hidden">
                <img
                  src={`/static/images/${project.img}`}
                  alt={project.nome}
                  className="h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)] to-transparent" />
              </div>
            )}

            <div className="flex-1 overflow-y-auto p-6">
              <h2 className="mb-3 text-3xl font-bold text-[var(--emphasis)]">
                {project.nome}
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-[#d5f6ff]/90">
                {project.descricao}
              </p>

              <div className="mb-6">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#d5f6ff]/60">
                  Tecnologias
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.stacks.map((tec) => (
                    <img
                      key={tec}
                      src={buildBadgeUrl(tec)}
                      alt={tec}
                      className="h-6"
                    />
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {project.repositorio && (
                  <motion.a
                    href={project.repositorio}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3 font-semibold text-[#d5f6ff] transition-colors hover:border-[var(--emphasis)] hover:bg-[var(--emphasis)]/20"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    Repositório
                  </motion.a>
                )}
                {project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-lg bg-[var(--emphasis)] px-5 py-3 font-semibold text-white transition-colors hover:bg-cyan-400"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Acessar Projeto
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
