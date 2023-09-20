import { styled } from "styled-components";

const StyledTechnology = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-flow: column;
  align-items: center;
  margin: 1rem;
`;

const Icon = styled.img`
  width: 75px;
`;

export default function Technology({ name, iconSrc, iconAlt }) {
  return (
    <StyledTechnology>
      <Icon src={iconSrc} alt={iconAlt} title={iconAlt} />
      <strong>{name}</strong>
    </StyledTechnology>
  );
}
