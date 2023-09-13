import { styled } from "styled-components";

const StyledNav = styled.nav`
  padding: 0 0.5rem;
  border-top: 2px solid ${(props) => props.theme.text};
  border-bottom: 2px solid ${(props) => props.theme.text};
  display: flex;
  justify-content: center;

  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    li {
      display: flex;

      a {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.25rem 0.5rem;
        text-align: center;
        text-decoration: none;

        &:focus,
        &:hover {
          background-color: ${(props) => props.theme.text};
          color: ${(props) => props.theme.background};
        }
      }
    }
  }
`;

export default function NavBar() {
  return (
    <StyledNav>
      <ul>
        <li>
          <a href="#">Sobre Mim</a>
        </li>
        <li>
          <a href="#">Meus Projetos</a>
        </li>
        <li>
          <a href="#">Tecnologias</a>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
      </ul>
    </StyledNav>
  );
}
