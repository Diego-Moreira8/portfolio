import { FaGithub } from "react-icons/fa";
import { Heading1 } from "./Headings";
import { LinkButton } from "./LinkButton";
import { Paragraph } from "./Paragraph";
import { ProjectCard } from "./ProjectCard";
import { SectionContainer } from "./SectionContainer";
import { GITHUB_URL } from "../utils/strings";
import { pageSections } from "../utils/page-sections";
import { myProjects } from "../utils/my-projects";

export function MyProjects() {
  const { id, url, title } = pageSections.myProjects;

  return (
    <SectionContainer id={id} softBg={false}>
      <div className="text-center">
        <Heading1 url={url}>{title}</Heading1>

        <div className="block lg:hidden">
          <Paragraph>Arraste para os lados para ver os projetos.</Paragraph>
        </div>

        <div className="relative my-8 flex snap-x gap-4 overflow-auto pb-4 lg:flex-wrap lg:justify-center lg:overflow-hidden">
          {myProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <LinkButton url={GITHUB_URL}>
          <FaGithub className="size-8" />
          <span>Veja estes e outros projetos no meu GitHub</span>
        </LinkButton>
      </div>
    </SectionContainer>
  );
}
