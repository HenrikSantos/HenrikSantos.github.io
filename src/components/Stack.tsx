import { buildBadgeUrl } from "../utils/badges";

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

export default function Stack() {
  return (
    <section id="stack" className="flex flex-col justify-center">
      <h1 className="mb-4">
        <span className="text-4xl font-semibold">Tecnologias:</span>
      </h1>
      <div className="ml-3 flex flex-col gap-4">
        {badgeCategories.map((category) => (
          <div key={category.title}>
            <h2 className="mb-2 text-lg font-medium underline">
              {category.title}:
            </h2>
            <div className="flex flex-wrap gap-2">
              {category.badges.map((badge) => (
                <img
                  key={badge}
                  src={buildBadgeUrl(badge)}
                  alt={badge}
                  className="h-7"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
