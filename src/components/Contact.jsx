import { styled } from "styled-components";

const StyledContact = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export default function Contact({ url, icon, iconAlt, text }) {
  return (
    <StyledContact href={url} target="_blank">
      <img src={icon} alt={iconAlt} title={iconAlt} />
      {text}
    </StyledContact>
  );
}
