import { Heading1 } from "./Headings";
import Carousel from "./Carousel";
import SlideGenerator from "./SlideGenerator";
import SectionDescription from "./SectionDescription";

export default function MyProjectsSection() {
  return (
    <section>
      <Heading1 text={"Meus Projetos"} id={"my-projects"} />
      <SectionDescription text={"Confira alguns de meus projetos."} />
      <Carousel slides={SlideGenerator()} />
    </section>
  );
}
