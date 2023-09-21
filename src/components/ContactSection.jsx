import { styled } from "styled-components";
import Contact from "./Contact";
import { Heading1 } from "./Headings";
import CopyEmail from "./CopyEmail";

import gitHubIcon from "../icons/github.svg";
import linkedinIcon from "../icons/linkedin.svg";
import emailIcon from "../icons/email.svg";
import SectionDescription from "./SectionDescription";

const ContactsWrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: fit-content;
  margin: 0 auto 1rem auto;
  padding: 0 1rem;
  gap: 2rem;
`;

export default function ContactSection() {
  return (
    <section>
      <Heading1 text={"Contato"} id={"contact"} />

      <SectionDescription text={"Entre em contato comigo!"} />

      <ContactsWrapper>
        <Contact
          url={"https://github.com/Diego-Moreira8"}
          icon={gitHubIcon}
          iconAlt={"Ícone do Git Hub"}
          text={"Confira os meus projetos no meu GitHub"}
        />
        <Contact
          url={"https://linkedin.com/in/Diego-Moreira8"}
          icon={linkedinIcon}
          iconAlt={"Ícone do LinkedIn"}
          text={"Visite o meu LinkedIn"}
        />
        <Contact
          url={"mailto:diego.moreira529@gmail.com"}
          icon={emailIcon}
          iconAlt={"Ícone de E-mail"}
          text={"Me envie um e-mail"}
        />
      </ContactsWrapper>
      <CopyEmail />
    </section>
  );
}
