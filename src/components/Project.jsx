import { styled } from "styled-components";

const StyledContainer = styled.div`
  border: 2px solid ${(props) => props.theme.text};

  h2 {
    padding: 0.5rem;
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.background};
    font-weight: bold;
    font-size: 1.5rem;
    text-align: center;
  }

  img {
    aspect-ratio: 16 / 9;
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: top;
    border-bottom: 2px solid ${(props) => props.theme.text};
  }

  > div {
    padding: 1rem;

    p {
      margin-bottom: 1rem;
    }

    .links {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;

      a {
        text-align: center;
        display: block;
      }
    }
  }
`;

export default function Project({
  title,
  src,
  alt,
  description,
  repoUrl,
  projectUrl,
}) {
  return (
    <StyledContainer>
      <h2>{title}</h2>
      <img src={src} alt={alt} title={alt} />
      <div>
        <p>{description}</p>
        <div className="links">
          <a href={repoUrl}>Repositório no GitHub</a>
          <a href={projectUrl}>Site do projeto</a>
        </div>
      </div>
    </StyledContainer>
  );
}
