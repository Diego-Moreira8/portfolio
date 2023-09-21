import styled from "styled-components";

const Description = styled.p`
  margin: 1rem 0;
  text-align: center;
`;

export default function SectionDescription({ text }) {
  return <Description>{text}</Description>;
}
