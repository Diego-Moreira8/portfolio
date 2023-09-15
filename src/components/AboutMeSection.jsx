import { styled } from "styled-components";

const StyledSection = styled.section`
  padding: 4rem 2rem 0 2rem;

  h1 {
    a {
      font-size: 2.5rem;
      font-weight: bold;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  p {
    line-height: 1.25;
    font-size: 1.25rem;
  }
`;

export default function AboutMeSection() {
  return (
    <StyledSection>
      <h1 id="about-me">
        <a href="#about-me">Olá!</a>
      </h1>
      <p>
        Meu nome é Diego. Sou estudante de Sistemas de Informação. <br />
        Também estudo Desenvolvimento Web. <br /> Amo computadores e sites/apps
        rápidos, responsivos, limpos e bonitos.
      </p>
    </StyledSection>
  );
}
