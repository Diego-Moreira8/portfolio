import { styled } from "styled-components";

const StyledHeading1 = styled.div`
  border-top: 2px solid ${(props) => props.theme.text};
  margin-bottom: 2rem;

  // Helps the title stay below the navigation bar
  .ancor {
    display: block;
    position: relative;
    top: -120px;
    visibility: hidden;
  }

  .heading-group {
    background-color: ${(props) => props.theme.text};
    width: fit-content;
    padding: 0.5rem 1rem;

    a {
      font-size: 2rem;
      font-weight: bold;
      color: ${(props) => props.theme.background};
    }
  }
`;

export function Heading1({ text, id }) {
  return (
    <StyledHeading1>
      <div id={id} className="ancor"></div>
      <div className="heading-group">
        <h1>
          <a href={`#${id}`}>{text}</a>
        </h1>
      </div>
    </StyledHeading1>
  );
}
