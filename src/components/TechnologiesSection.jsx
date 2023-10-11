import { styled } from "styled-components";
import { Heading1 } from "./Headings";
import Technology from "./Technology";

import htmlIcon from "../icons/html5.svg";
import css3Icon from "../icons/css3.svg";
import javascriptIcon from "../icons/javascript.svg";
import reactIcon from "../icons/react.svg";
import styledComponentsIcon from "../icons/styled-components.svg";
import gitIcon from "../icons/git.svg";
import figmaIcon from "../icons/figma.svg";
import googleIcon from "../icons/google.svg";
import openIaIcon from "../icons/openai.svg";
import SectionDescription from "./SectionDescription";

const Wrapper = styled.div`
  max-width: 600px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
`;

export default function TechnologiesSection() {
  return (
    <section>
      <Heading1 text={"Tecnologias"} id={"technologies"} />

      <SectionDescription text={"As tecnologias que aprendi até o momento."} />

      <Wrapper>
        <Technology
          name={"HTML5"}
          iconSrc={htmlIcon}
          iconAlt={"Ícone da linguagem HTML5"}
        />
        <Technology
          name={"CSS3"}
          iconSrc={css3Icon}
          iconAlt={"Ícone da linguagem CSS3"}
        />
        <Technology
          name={"JavaScript"}
          iconSrc={javascriptIcon}
          iconAlt={"Ícone da linguagem JavaScript"}
        />
        <Technology
          name={"React JS"}
          iconSrc={reactIcon}
          iconAlt={"Ícone da biblioteca React"}
        />
        <Technology
          name={"Styled-Components"}
          iconSrc={styledComponentsIcon}
          iconAlt={"Ícone da biblioteca Styled-Components"}
        />
        <Technology
          name={"Git"}
          iconSrc={gitIcon}
          iconAlt={"Ícone da ferramenta Git"}
        />
        <Technology
          name={"Figma"}
          iconSrc={figmaIcon}
          iconAlt={"Ícone do software Figma"}
        />
        <Technology
          name={"Google"}
          iconSrc={googleIcon}
          iconAlt={"Ícone do site Google"}
        />
        <Technology
          name={"Chat GPT"}
          iconSrc={openIaIcon}
          iconAlt={"Ícone do site Chat GPT"}
        />
      </Wrapper>
    </section>
  );
}
