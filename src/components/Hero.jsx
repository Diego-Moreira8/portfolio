import heroPhoto from "../assets/hero-photo.webp";
import { pageSections } from "../utils/page-sections";
import { techStackArray } from "../utils/tech-stack";
import { CodeGraphic } from "./CodeGraphic";
import { ScrollDownIcon } from "./ScrollDownIcon";

export function Hero() {
  return (
    <section className="flex min-h-[calc(100svh-var(--spacing-sticky-header-height))] w-full flex-col items-center justify-around gap-8">
      <div className="mt-4 flex w-full flex-col items-center gap-6 sm:gap-16">
        <div className="flex w-full flex-col items-center gap-6 sm:flex-row">
          <div className="hidden w-full rotate-180 sm:block sm:w-2/7">
            <CodeGraphic />
          </div>

          <div className="flex w-full flex-col items-center gap-6 sm:w-3/7 lg:flex-row">
            <img
              className="size-38 rounded-full border-4 border-white shadow-lg"
              src={heroPhoto}
              alt="Foto de perfil de Diego"
            />

            <div className="text-center lg:text-left lg:text-lg">
              <p className="text-xl font-bold md:text-2xl">
                Olá, sou o <span className="text-primary">Diego</span>!
              </p>
              <p className="lg:text-lg">
                Desenvolvedor web, apaixonado por tecnologia e por transformar
                ideias em interfaces funcionais.
              </p>
            </div>
          </div>

          <div className="w-full sm:w-2/7">
            <CodeGraphic />
          </div>
        </div>

        <ul className="flex flex-wrap justify-center gap-2 sm:gap-2 sm:px-4">
          {/* eslint-disable-next-line no-unused-vars */}
          {techStackArray.map(({ Icon, techName }) => (
            <li
              key={techName}
              className="flex items-center gap-1 rounded-lg bg-black p-2 text-xs text-white sm:p-3 sm:text-base dark:bg-white dark:text-black"
            >
              <span>
                <Icon className="h-4 w-fit sm:h-6" />
              </span>
              <span>{techName}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* TODO: Adicionar link para descer a primeira seção */}
      <a className="p-1" href={pageSections.about.url}>
        <ScrollDownIcon className="h-8 w-13" />
      </a>
    </section>
  );
}
