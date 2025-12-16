import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { pageSections } from "../utils/page-sections";
import { Heading1 } from "./Headings";
import { LinkButton } from "./LinkButton";
import { SectionContainer } from "./SectionContainer";
import { EMAIL_URL, LINKEDIN_URL, WHATSAPP_URL } from "../utils/strings";

export function Contact() {
  const { id, title, url } = pageSections.contact;

  return (
    <SectionContainer id={id} softBg={true}>
      <Heading1 url={url}>{title}</Heading1>

      <LinkButton
        url={WHATSAPP_URL}
        Icon={FaWhatsapp}
        text={"Envie uma mensagem no WhatsApp"}
      />

      <LinkButton
        url={LINKEDIN_URL}
        Icon={FaLinkedin}
        text={"Conecte-se no LinkedIn"}
      />

      <LinkButton
        url={EMAIL_URL}
        Icon={MdOutlineEmail}
        text={"Envie um e-mail"}
      />
    </SectionContainer>
  );
}
