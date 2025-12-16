import { FaHtml5, FaSass, FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress,
  SiJavascript,
  SiPostgresql,
  SiTypescript,
  SiWebpack,
} from "react-icons/si";

export const techStack = {
  html: { techName: "HTML", Icon: FaHtml5 },
  css: { techName: "CSS", Icon: FaCss3Alt },
  sass: { techName: "SASS", Icon: FaSass },
  tailwind: { techName: "Tailwind", Icon: RiTailwindCssFill },
  javaScript: { techName: "JavaScript", Icon: SiJavascript },
  typeScript: { techName: "TypeScript", Icon: SiTypescript },
  react: { techName: "React", Icon: FaReact },
  webpack: { techName: "Webpack", Icon: SiWebpack },
  nodeJS: { techName: "NodeJS", Icon: FaNodeJs },
  express: { techName: "Express", Icon: SiExpress },
  postgreSQL: { techName: "PostgreSQL", Icon: SiPostgresql },
  figma: { techName: "Figma", Icon: FaFigma },
};

// Versão em array, que pode ser mapeado para gerar componentes.
export const techStackArray = Object.entries(techStack).map(
  (techObject) => techObject[1],
);
