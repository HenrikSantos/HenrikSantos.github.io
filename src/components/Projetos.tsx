import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjetoItem from "./ProjetoItem";
import ProjectModal from "./ProjectModal";
import AnimatedSection from "./AnimatedSection";
import { frontendData } from "../assets/frontendData.json";
import { backendData } from "../assets/backendData.json";
import { outrosProjetosData } from "../assets/outrosProjetosData.json";

type ProjectType = "todos" | "frontend" | "backend" | "outros";

interface Project {
  id: number;
  nome: string;
  descricao: string;
  repositorio?: string;
  link?: string;
  img?: string;
  stacks: string[];
  type: ProjectType;
}

const allProjects: Project[] = [
  ...frontendData.map((p) => ({ ...p, type: "frontend" as const })),
  ...backendData.map((p) => ({ ...p, type: "backend" as const })),
  ...outrosProjetosData.map((p) => ({ ...p, type: "outros" as const })),
];

const filters: { label: string; value: ProjectType }[] = [
  { label: "Todos", value: "todos" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "Outros", value: "outros" },
];

export default function Projetos() {
  const [activeFilter, setActiveFilter] = useState<ProjectType>("todos");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "todos") return allProjects;
    return allProjects.filter((p) => p.type === activeFilter);
  }, [activeFilter]);

  return (
    <section id="frontend" className="space-y-6">
      <AnimatedSection>
        <h1 className="mb-6 text-4xl font-bold">Projetos</h1>

        <div className="mb-8 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <motion.button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeFilter === filter.value
                  ? "text-white"
                  : "text-[#d5f6ff]/70 hover:text-[#d5f6ff]"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeFilter === filter.value && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 rounded-full bg-[var(--emphasis)]"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10">{filter.label}</span>
            </motion.button>
          ))}
        </div>
      </AnimatedSection>

      <motion.div
        layout
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((projeto, index) => (
            <motion.div
              key={`${projeto.type}-${projeto.id}`}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProjetoItem
                img={projeto.img}
                nome={projeto.nome}
                descricao={projeto.descricao}
                repositorio={projeto.repositorio}
                stacks={projeto.stacks}
                link={projeto.link}
                index={index}
                onClick={() => setSelectedProject(projeto)}
                featured={index === 0 && activeFilter === "todos"}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <ProjectModal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </section>
  );
}
