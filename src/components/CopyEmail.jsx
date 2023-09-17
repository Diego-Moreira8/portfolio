import { useState } from "react";
import { styled } from "styled-components";

const StyledCopyEmail = styled.div`
  max-width: 400px;
  margin: 0 auto;

  p {
    text-align: center;
    margin-bottom: 1rem;
  }

  .wrap {
    border: 1px solid ${(props) => props.theme.text};
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 350px) {
      flex-flow: row;
    }

    address {
      padding: 0.5rem 1rem;
      font-weight: bold;
    }

    button {
      width: 100%;
      padding: 0.5rem 1rem;

      @media (min-width: 350px) {
        width: fit-content;
      }
    }
  }
  .alert {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.background};

    p {
      padding: 0.5rem;
    }
  }
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
      <p>
        Caso o link acima não abra o seu aplicativo de e-mail, você pode copiar
        o endereço aqui:
      </p>
      <div className="wrap">
        <address>diego.moreira529@gmail.com</address>
        <button type="button" onClick={sendToClipboard}>
          Copiar
        </button>
      </div>
      {alert && (
        <div className="alert">
          <p>Copiado para a área de transferência!</p>
        </div>
      )}
    </StyledCopyEmail>
  );
}
