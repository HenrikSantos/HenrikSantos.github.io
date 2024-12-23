export default function Stack() {
  return (
    <section id="stack" className="flex flex-col justify-center">
      <h1 className="mb-1">
        <span className="text-4xl font-semibold">Tech Stack:</span>
      </h1>
      <ul className="mx-3 flex flex-col space-y-1 font-thin">
        <li>
          - <span className="text-lg underline">Front-end</span>: HTML, CSS,
          Javascript, React, Redux, Tailwind e Bootstrap;
        </li>
        <li>
          - <span className="text-lg underline">Back-end</span>: Firebase, GCP,
          TypeScript, Cloud functions, Python, Node, Express, MySql, MongoDB,
          Mongoose e Sequelize;
        </li>
        <li>
          - <span className="text-lg underline">QA</span>: Jest, Vitest, Mocha,
          Chai, Sinon e Pytest;
        </li>
        <li>
          - <span className="text-lg underline">Arquiteturas</span>: Cloud
          computing, RESTful, TDD e SOLID;
        </li>
        <li>
          - <span className="text-lg underline">Outros</span>: Git, Docker,
          Mermaid, Pubsub e Eslint;
        </li>
      </ul>
    </section>
  );
}
