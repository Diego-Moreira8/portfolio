import { styled } from "styled-components";

const StyledHeading1 = styled.div`
  border-top: 2px solid ${(props) => props.theme.text};
  margin-bottom: 2rem;

  div {
    background-color: ${(props) => props.theme.text};
    width: fit-content;
    padding: 0.5rem 1rem;

    a {
      font-size: 2rem;
      font-weight: bold;
      color: ${(props) => props.theme.background};
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export function Heading1({ text, id }) {
  return (
    <StyledHeading1>
      <div>
        <h1 id={id}>
          <a href={`#${id}`}>{text}</a>
        </h1>
      </div>
    </StyledHeading1>
  );
}
