import { styled } from "styled-components";

const StyledSection = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: center;
  max-width: 600px;
  margin: 0 auto;
  padding: 8rem 1rem 1rem 1rem;

  @media (min-width: 500px) {
    padding: 1rem;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
  }

  p {
    line-height: 1.25;
    font-size: 1.25rem;

    br {
      display: block;
      content: "";
      margin-bottom: 0.5rem;
    }
  }
`;

export default function AboutMeSection() {
  return (
    <>
      <div id="about-me"></div>
      <StyledSection>
        <h1>Olá!</h1>
        <p>
          Sou o Diego, estudante de Sistemas de Informação com um forte
          interesse em Desenvolvimento Web. Minha paixão por essa área surgiu da
          emoção de ver meu código ganhar vida no navegador.
          <br />
          Nos projetos que venho desenvolvendo, tento fazer o máximo para que as
          interfaces que crio sejam agradáveis, simples, responsivas e
          acessíveis.
          <br />
          Neste site, você encontrará uma sessão com alguns de meus projetos,
          bem como uma lista das tecnologias que estou constantemente
          aprendendo. Sinta-se à vontade para explorar e entrar em contato
          comigo se quiser discutir colaborações ou apenas trocar ideias.
          <br />
          <strong>Obrigado por visitar o meu espaço!</strong>
        </p>
      </StyledSection>
    </>
  );
}
