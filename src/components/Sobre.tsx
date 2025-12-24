import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { variants } from "../utils/animations";

const SOCIAL_LINKS = [
  {
    href: "https://github.com/HenrikSantos",
    label: "GitHub",
    icon: (
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    ),
    viewBox: "0 0 16 16",
  },
  {
    href: "https://www.linkedin.com/in/henrik-santos-dev/",
    label: "LinkedIn",
    icon: (
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
    ),
    viewBox: "0 0 24 24",
  },
  {
    href: "https://www.youtube.com/@gimmicodando730",
    label: "YouTube",
    icon: (
      <path d="M93.333 117.559V47.775l61.334 34.893zm136.43-91.742c-2.699-10.162-10.651-18.165-20.747-20.881C190.716 0 117.333 0 117.333 0S43.951 0 25.651 4.936C15.555 7.652 7.603 15.655 4.904 25.817 0 44.236 0 82.667 0 82.667s0 38.429 4.904 56.849c2.699 10.163 10.65 18.165 20.747 20.883 18.3 4.934 91.682 4.934 91.682 4.934s73.383 0 91.683-4.934c10.096-2.718 18.048-10.72 20.747-20.883 4.904-18.42 4.904-56.85 4.904-56.85s0-38.43-4.904-56.849" />
    ),
    viewBox: "-35.20005 -41.33325 305.0671 247.9995",
  },
];

export default function Sobre() {
  return (
    <aside
      id="sobre"
      className="mx-auto my-5 flex flex-col md:sticky md:top-[calc(50vh-12rem)] md:m-0 md:self-start lg:w-6/12"
    >
      <AnimatedSection direction="right" className="mx-8 flex flex-col md:mx-0">
        <h1 className="text-4xl font-bold">Henrik Santos</h1>
        <h2 className="text-xl font-light">
          <span className="emphasis">Desenvolvedor Web</span>
        </h2>
        <div className="my-3 space-y-2 font-thin">
          <p>
            - Meu nome é Henrik, tenho {`${new Date().getFullYear() - 2001}`}{" "}
            anos, sou desenvolvedor Full Stack e Backend Pleno. Já prestei
            serviços para empresas nacionais e internacionais, sendo responsável
            pela prototipação, modelagem de banco de dados, arquitetura,
            implementação de APIs REST, Cron Jobs e integração com APIs
            externas.
          </p>
          <p>
            - Foco em desenvolvimento web, tenho experiência com React,
            TypeScript, Nestjs, Prisma, TypeORM, Mysql, MongoDB, Swagger, AWS e
            Google Cloud Platform.
          </p>
          <p>- Estou aberto a novas oportunidades.</p>
          <p>
            - Sou uma pessoa organizada, calma e resiliente, com facilidade para
            aprender.
          </p>
          <p>
            - Meus hobbies são: programação, arte 2D/3D, jogos, IA e
            tecnologia.
          </p>
          <p>
            E-mail:{" "}
            <a
              href="mailto:henrik.ruan4@gmail.com?subject=Olá, Henrik!&body=Gostaria de conversar sobre [insira o assunto aqui]."
              className="font-semibold text-accent-blue underline transition-colors hover:text-accent-blue-light"
            >
              henrik.ruan4@gmail.com
            </a>
          </p>
        </div>
        <motion.ul 
          className="mt-3 flex items-stretch gap-1"
          variants={variants.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {SOCIAL_LINKS.map((social) => (
            <motion.li
              key={social.label}
              className="text-xs"
              variants={variants.fadeInUp}
            >
              <motion.a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-[var(--emphasis)]/20"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={social.viewBox}
                  fill="currentColor"
                  className="size-6 fill-text-primary"
                  aria-hidden="true"
                >
                  {social.icon}
                </svg>
              </motion.a>
            </motion.li>
          ))}
        </motion.ul>
      </AnimatedSection>
    </aside>
  );
}
