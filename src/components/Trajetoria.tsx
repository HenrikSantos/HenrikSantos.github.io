import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { variants } from "../utils/animations";

interface TimelineItem {
  period: string;
  title: string;
  description: string;
  technologies?: string[];
  icon: "education" | "work" | "tech";
}

const timelineData: TimelineItem[] = [
  {
    period: "Ensino Médio",
    title: "Técnico em Programação",
    description:
      "Minha trajetória com tecnologia começou no ensino médio, quando cursei o técnico integrado em programação e computação. Ao concluir essa etapa, não consegui ingressar de imediato no mercado de desenvolvimento, principalmente pelo contexto da época, em que o trabalho remoto ainda não era comum e havia poucas oportunidades na minha cidade.",
    icon: "education",
  },
  {
    period: "Primeira experiência",
    title: "Assistente Administrativo",
    description:
      "Diante disso, iniciei minha vida profissional em outras áreas, atuando como assistente administrativo, onde desenvolvi organização, noções de processo e responsabilidade profissional.",
    icon: "work",
  },
  {
    period: "Período de transição",
    title: "Varejo e Atendimento",
    description:
      "Com a chegada da pandemia, deixei esse trabalho, pois minha família se mudou para ficar mais próxima da minha avó. Nesse período, trabalhei no varejo, atuando com atendimento ao público e operação de loja, o que contribuiu para o desenvolvimento de comunicação, adaptação e trabalho em equipe.",
    icon: "work",
  },
  {
    period: "2022",
    title: "Retomada em Tecnologia",
    description:
      "Retomei de forma estruturada minha carreira em tecnologia. Iniciei um curso profissionalizante em desenvolvimento web e, em seguida, comecei a graduação em Análise e Desenvolvimento de Sistemas, voltando a focar integralmente em programação.",
    icon: "education",
  },
  {
    period: "Primeiro estágio",
    title: "Estagiário Full Stack",
    description:
      "Com a evolução dos estudos, conquistei minha primeira oportunidade na área como estagiário full stack em uma startup, atuando com desenvolvimento de chatbots e integração com soluções de IA.",
    technologies: ["React", "TypeScript", "Firebase", "Google Cloud"],
    icon: "tech",
  },
  {
    period: "Atualmente",
    title: "Desenvolvedor Backend",
    description:
      "Atuo como desenvolvedor backend, trabalhando no desenvolvimento de APIs REST. Atuo na modelagem de banco de dados, implementação de regras de negócio, rotinas agendadas e integrações com APIs externas, enquanto sigo em formação acadêmica e evolução técnica.",
    technologies: [
      "TypeScript",
      "NestJS",
      "Prisma",
      "Express",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "AWS",
    ],
    icon: "tech",
  },
];

function TechBadge({ tech }: { tech: string }) {
  return (
    <motion.span
      className="inline-block rounded-full bg-[var(--emphasis)]/20 px-3 py-1 text-sm font-medium text-[var(--emphasis)] transition-colors hover:bg-[var(--emphasis)]/30"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {tech}
    </motion.span>
  );
}

function TimelineIcon({ type }: { type: TimelineItem["icon"] }) {
  const icons = {
    education: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 14l9-5-9-5-9 5 9 5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
        />
      </svg>
    ),
    work: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    tech: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  };

  return icons[type];
}

export default function Trajetoria() {
  return (
    <section id="trajetoria">
      <AnimatedSection>
        <h1 className="mb-8">
          <span className="text-4xl font-semibold">Minha História</span>
        </h1>
      </AnimatedSection>

      <div className="relative ml-4">
        {/* Linha vertical da timeline */}
        <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-[var(--emphasis)] via-[var(--emphasis)]/50 to-transparent" />

        <motion.div
           variants={variants.staggerContainer}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-50px" }}
        >
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className="relative mb-8 pl-12"
              variants={variants.fadeInLeft}
            >
              {/* Marcador da timeline */}
              <motion.div
                className="absolute left-0 flex h-9 w-9 items-center justify-center rounded-full border-2 border-[var(--emphasis)] bg-[var(--primary)] text-[var(--emphasis)]"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <TimelineIcon type={item.icon} />
              </motion.div>

              {/* Card do conteúdo */}
              <motion.div
                className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:border-[var(--emphasis)]/30 hover:bg-white/10"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[var(--emphasis)]/10 px-3 py-1 text-sm font-medium text-[var(--emphasis)]">
                    {item.period}
                  </span>
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                </div>

                <p className="leading-relaxed text-gray-300">
                  {item.description}
                </p>

                {item.technologies && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <TechBadge key={tech} tech={tech} />
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
