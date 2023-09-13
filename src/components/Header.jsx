import { styled } from "styled-components";

const StyledHeader = styled.header`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  padding: 1rem;
`;

export default function Header() {
  return <StyledHeader>Diego Moreira</StyledHeader>;
}
