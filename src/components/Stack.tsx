import { motion } from "framer-motion";
import { buildBadgeUrl } from "../utils/badges";
import AnimatedSection from "./AnimatedSection";

type BadgeCategory = {
  title: string;
  badges: string[];
};

const badgeCategories: BadgeCategory[] = [
  {
    title: "Backend",
    badges: [
      "Node.js",
      "NestJS",
      "Express",
      "JWT",
      "API REST",
      "WebSocket",
      "SSE",
    ],
  },
  {
    title: "Frontend",
    badges: ["React", "TypeScript", "Tailwind", "CSS"],
  },
  {
    title: "Databases",
    badges: [
      "PostgreSQL",
      "MySQL",
      "MariaDB",
      "MongoDB",
      "Firebase",
      "Prisma",
      "TypeORM",
    ],
  },
  {
    title: "Cloud",
    badges: ["GCP", "AWS", "S3"],
  },
  {
    title: "Ferramentas",
    badges: ["Git", "GitHub", "Swagger", "Postman", "Docker"],
  },
  {
    title: "Integrações",
    badges: ["Stripe", "Pagar.me", "Asaas", "SendGrid", "Brevo"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Stack() {
  return (
    <section id="stack" className="flex flex-col justify-center">
      <AnimatedSection>
        <h1 className="mb-4">
          <span className="text-4xl font-semibold">Tecnologias:</span>
        </h1>
      </AnimatedSection>

      <motion.div
        className="ml-3 flex flex-col gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {badgeCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            variants={itemVariants}
            transition={{ delay: categoryIndex * 0.1 }}
            className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all hover:border-[var(--emphasis)]/30 hover:bg-white/10"
          >
            <h2 className="mb-3 text-lg font-medium text-[var(--emphasis)]">
              {category.title}
            </h2>
            <div className="flex flex-wrap gap-2">
              {category.badges.map((badge, badgeIndex) => (
                <motion.img
                  key={badge}
                  src={buildBadgeUrl(badge)}
                  alt={badge}
                  className="h-7"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.1 + badgeIndex * 0.03 }}
                  whileHover={{ scale: 1.15, y: -2 }}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
