import { styled } from "styled-components";

const StyledNavBar = styled.nav`
  border-top: 2px solid ${(props) => props.theme.text};
  border-bottom: 2px solid ${(props) => props.theme.text};
  padding: 0 0.5rem;
`;

const LinksList = styled.ul`
  width: fit-content;
  display: flex;
  margin: 0 auto;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 1rem;
  text-align: center;
  text-decoration: none;
  height: 100%;

  &:focus,
  &:hover {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.background};
  }
`;

export default function NavBar() {
  return (
    <StyledNavBar>
      <LinksList>
        <li>
          <Link href="#about-me">Sobre Mim</Link>
        </li>
        <li>
          <Link href="#my-projects">Meus Projetos</Link>
        </li>
        <li>
          <Link href="#technologies">Tecnologias</Link>
        </li>
        <li>
          <Link href="#contact">Contato</Link>
        </li>
      </LinksList>
    </StyledNavBar>
  );
}
