import { styled } from "styled-components";

const StyledProject = styled.div`
  border: 2px solid ${(props) => props.theme.text};
`;

const Title = styled.h2`
  padding: 0.5rem;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.background};
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
`;

const Screenshot = styled.img`
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 1rem;
`;

const Description = styled.p`
  margin-bottom: 1rem;
`;

const LinksWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const Link = styled.a`
  text-align: center;
`;

export default function Project(props) {
  const { title, src, alt, description, repoUrl, projectUrl } = props;

  return (
    <StyledProject>
      <Title>{title}</Title>

      {src && <Screenshot src={src} alt={alt} title={alt} />}

      <Wrapper>
        <Description>{description}</Description>

        <LinksWrapper>
          <Link href={repoUrl} target="_blank">
            Repositório no GitHub
          </Link>

          {projectUrl && (
            <Link href={projectUrl} target="_blank">
              Site do projeto
            </Link>
          )}
        </LinksWrapper>
      </Wrapper>
    </StyledProject>
  );
}
