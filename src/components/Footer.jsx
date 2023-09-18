import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.background};
  font-weight: bold;
  text-align: center;
  padding: 0.5rem;
`;

export default function Footer() {
  return <StyledFooter>Construído por Diego Moreira em 2023</StyledFooter>;
}
