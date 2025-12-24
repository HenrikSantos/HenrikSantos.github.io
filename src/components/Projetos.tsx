import { useState, useMemo } from "react";
import { motion } from "framer-motion";
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
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeFilter === filter.value
                  ? "bg-[var(--emphasis)] text-white"
                  : "text-[#d5f6ff]/70 hover:text-[#d5f6ff]"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </div>
      </AnimatedSection>

      <motion.div
        key={activeFilter}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
      >
        {filteredProjects.map((projeto) => (
          <ProjetoItem
            key={`${projeto.type}-${projeto.id}`}
            img={projeto.img}
            nome={projeto.nome}
            descricao={projeto.descricao}
            repositorio={projeto.repositorio}
            stacks={projeto.stacks}
            link={projeto.link}
            onClick={() => setSelectedProject(projeto)}
          />
        ))}
      </motion.div>

      <ProjectModal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </section>
  );
}
