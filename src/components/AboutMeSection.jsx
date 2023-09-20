import { styled } from "styled-components";

const StyledSection = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: center;
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;

  @media (min-width: 500px) {
    padding: 1rem;
  }
`;

const Heading1 = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 8rem 0 1rem 0;
`;

const Paragraph = styled.p`
  line-height: 1.25;
  font-size: 1.25rem;
`;

const LineSpacing = styled.br`
  display: block;
  content: "";
  margin-bottom: 0.5rem;
`;

export default function AboutMeSection() {
  return (
    <>
      <StyledSection>
        {/* Position the paragraph below the header */}
        <div id="about-me"></div>
        <Heading1>Olá!</Heading1>
        <Paragraph>
          Sou o Diego, estudante de Sistemas de Informação com um forte
          interesse em Desenvolvimento Web. Minha paixão por essa área surgiu da
          emoção de ver meu código ganhar vida no navegador.
          <LineSpacing />
          Nos projetos que venho desenvolvendo, tento fazer o máximo para que as
          interfaces que crio sejam agradáveis, simples, responsivas e
          acessíveis.
          <LineSpacing />
          Neste site, você encontrará uma sessão com alguns de meus projetos,
          bem como uma lista das tecnologias que estou constantemente
          aprendendo. Sinta-se à vontade para explorar e entrar em contato
          comigo se quiser discutir colaborações ou apenas trocar ideias.
          <LineSpacing />
          <strong>Obrigado por visitar o meu espaço!</strong>
        </Paragraph>
      </StyledSection>
    </>
  );
}
