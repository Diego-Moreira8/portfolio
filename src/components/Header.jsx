import { styled } from "styled-components";

import NavBar from "./NavBar";

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  background-color: ${(props) => props.theme.lowOpacityBg};
  backdrop-filter: blur(5px);
  box-shadow: 0px 4px 10px 1px #00000049;
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  padding: 1rem;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Logo>Diego Moreira</Logo>
      <NavBar />
    </StyledHeader>
  );
}
