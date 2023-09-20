import { styled } from "styled-components";

const StyledH1 = styled.div`
  border-top: 2px solid ${(props) => props.theme.text};
  margin-bottom: 2rem;
`;

const Anchor = styled.div`
  // Position the paragraph below the header
  display: block;
  position: relative;
  top: -120px;
  visibility: hidden;
`;

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.text};
  width: fit-content;
  padding: 0.5rem 1rem;
`;

const AnchorLink = styled.a`
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.background};
`;

export function Heading1({ text, id }) {
  return (
    <StyledH1>
      <Anchor id={id} />

      <Wrapper>
        <h1>
          <AnchorLink href={`#${id}`}>{text}</AnchorLink>
        </h1>
      </Wrapper>
    </StyledH1>
  );
}
