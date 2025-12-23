export default function Stack() {
  return (
    <section id="stack" className="flex flex-col justify-center">
      <h1 className="mb-1">
        <span className="text-4xl font-semibold">Tecnologias:</span>
      </h1>
      <ul className="ml-3 flex flex-col space-y-1 font-thin">
        <li>
          - <span className="text-lg underline">Backend</span>: Node.js, NestJS,
          Express, JWT/AUTH, APIs REST, WebSocket, SSE, Cron Jobs;
        </li>
        <li>
          - <span className="text-lg underline">Frontend</span>: React,
          TypeScript, Tailwind CSS;
        </li>
        <li>
          - <span className="text-lg underline">Databases</span>: Postgres,
          MySQL, MariaDB, MongoDB, Firestore, Prisma, TypeORM;
        </li>
        <li>
          - <span className="text-lg underline">Cloud Computing</span>: GCP
          (Firebase, Cloud Storage, Cloud Functions), AWS (EC2, S3, RDS);
        </li>
        <li>
          - <span className="text-lg underline">Ferramentas</span>: Git, GitHub,
          Swagger, Postman, Docker;
        </li>
        <li>
          - <span className="text-lg underline">Integrações</span>: Gateways de
          pagamento (Stripe, Pagar.me, Asaas), e-mail (SendGrid, Brevo);
        </li>
        <li>
          - <span className="text-lg underline">Boas Práticas</span>: SOLID,
          Clean Code, Arquitetura de Software;
        </li>
      </ul>
    </section>
  );
}
