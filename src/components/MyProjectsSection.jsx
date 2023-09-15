import { Heading1 } from "./Headings";
import Carousel from "./Carousel";
import SlideGenerator from "./SlideGenerator";

export default function MyProjectsSection() {
  return (
    <section>
      <Heading1 text={"Meus Projetos"} id={"my-projects"} />
      <Carousel slides={SlideGenerator()} />
    </section>
  );
}
