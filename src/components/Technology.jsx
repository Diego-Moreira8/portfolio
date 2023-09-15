import { styled } from "styled-components";

const StyledTechnology = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-flow: column;
  align-items: center;
  width: fit-content;
  margin: 1rem;
`;

export default function Technology({ name, iconSrc, iconAlt }) {
  return (
    <StyledTechnology>
      <img src={iconSrc} alt={iconAlt} title={iconAlt} />
      <strong>{name}</strong>
    </StyledTechnology>
  );
}
