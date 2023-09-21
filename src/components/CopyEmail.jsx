import { useState } from "react";
import { styled } from "styled-components";

const StyledCopyEmail = styled.div`
  max-width: 400px;
  margin: 0 auto;
  position: relative;
  margin-bottom: 1rem;
`;

const Message = styled.p`
  text-align: center;
  margin-bottom: 0.5rem;
`;

const Wrapper = styled.div`
  border: 1px solid ${(props) => props.theme.text};
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 350px) {
    flex-flow: row;
  }
`;

const Email = styled.address`
  padding: 0.5rem 1rem;
  font-weight: bold;
`;

const CopyButton = styled.button`
  width: 100%;
  padding: 0.5rem 1rem;

  @media (min-width: 350px) {
    width: fit-content;
  }
`;

const Alert = styled.div`
  position: absolute;
  width: 100%;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.background};
  padding: 0.5rem;
  text-align: center;
  font-weight: bold;
`;

export default function CopyEmail() {
  const [alert, setAlert] = useState(false);

  const showAlert = () => {
    setAlert(true);

    setTimeout(() => {
      setAlert(false);
    }, 5000);
  };

  const sendToClipboard = () => {
    navigator.clipboard.writeText("diego.moreira529@gmail.com");
    showAlert();
  };

  return (
    <StyledCopyEmail>
      <Message>
        Caso o link acima não abra o seu aplicativo de e-mail, você pode copiar
        o endereço aqui:
      </Message>

      <Wrapper>
        <Email>diego.moreira529@gmail.com</Email>
        <CopyButton type="button" onClick={sendToClipboard}>
          Copiar
        </CopyButton>
      </Wrapper>

      {alert && (
        <Alert>
          <p>Copiado para a área de transferência!</p>
        </Alert>
      )}
    </StyledCopyEmail>
  );
}
