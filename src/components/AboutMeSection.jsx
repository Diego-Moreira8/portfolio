import { styled } from "styled-components";

const StyledSection = styled.section`
  padding: 4rem 2rem 0 2rem;

  p {
    line-height: 1.25;
    font-size: 1.25rem;

    strong {
      font-size: 2.5rem;
    }
  }
`;

export default function AboutMeSection() {
  return (
    <StyledSection>
      <p>
        <strong>Olá!</strong>
        <br /> Meu nome é Diego. Sou estudante de Sistemas de Informação. <br />
        Também estudo Desenvolvimento Web. <br /> Amo computadores e sites/apps
        rápidos, responsivos, limpos e bonitos.
      </p>
    </StyledSection>
  );
}
