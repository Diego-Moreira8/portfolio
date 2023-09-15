import { styled } from "styled-components";

const StyledSection = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: center;
  max-width: 400px;
  margin: 0 auto;
  padding: 1rem;

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
  }

  p {
    line-height: 1.25;
    font-size: 1.25rem;
  }
`;

export default function AboutMeSection() {
  return (
    <>
      <div id="about-me"></div>
      <StyledSection>
        <h1>Olá</h1>
        <p>
          Meu nome é Diego. Sou estudante de Sistemas de Informação. <br />
          Também estudo Desenvolvimento Web. <br /> Amo computadores e
          sites/apps rápidos, responsivos, limpos e bonitos.
        </p>
      </StyledSection>
    </>
  );
}
