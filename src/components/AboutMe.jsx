import { Heading1, Heading2 } from "./Headings";
import { LinkButton } from "./LinkButton";
import { Paragraph } from "./Paragraph";
import { SectionContainer } from "./SectionContainer";
import { CV_URL } from "../utils/strings";
import { pageSections } from "../utils/page-sections";

export function AboutMe() {
  const { id, url, title } = pageSections.about;

  return (
    <SectionContainer id={id} softBg={true}>
      <div className="text-center">
        <Heading1 url={url}>{title}</Heading1>

        <Paragraph>
          Sou um desenvolvedor web em constante evolução, apaixonado por
          transformar ideias em interfaces simples e funcionais. Tenho me
          aprofundado em JavaScript, explorando tecnologias como React no
          front-end e Node.js no back-end, sempre buscando entender como tudo se
          conecta.
        </Paragraph>

        <Heading2>O que Estou Buscando</Heading2>

        <Paragraph>
          No momento, estou em busca de oportunidades de estágio ou projetos de
          freelance para aplicar meu conhecimento e ganhar experiência prática!
        </Paragraph>

        <LinkButton url={CV_URL} text={"Veja o meu currículo"} />
      </div>
    </SectionContainer>
  );
}
