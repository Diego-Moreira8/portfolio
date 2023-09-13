import { styled } from "styled-components";

import NavBar from "./NavBar";

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  padding: 1rem;
`;

export default function Header() {
  return (
    <header>
      <Logo>Diego Moreira</Logo>
      <NavBar />
    </header>
  );
}
