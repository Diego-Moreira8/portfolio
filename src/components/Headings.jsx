import { styled } from "styled-components";

const StyledHeading1 = styled.div`
  color: ${(props) => props.theme.background};
  font-size: 2rem;
  font-weight: bold;
  border-top: 2px solid ${(props) => props.theme.text};
  margin-bottom: 2rem;

  div {
    background-color: ${(props) => props.theme.text};
    width: fit-content;
    padding: 0.5rem 1rem;
  }
`;

export function Heading1({ text }) {
  return (
    <StyledHeading1>
      <div>
        <h1>{text}</h1>
      </div>
    </StyledHeading1>
  );
}
