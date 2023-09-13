import { styled, ThemeProvider, createGlobalStyle } from "styled-components";
import GlobalFonts from "./fonts/fonts";

import Header from "./components/Header";

const colorPallete = ["#BEE9E8", "#1B4965"];

const theme = {
  text: colorPallete[0],
  background: colorPallete[1],
};

const GlobalStyle = createGlobalStyle`
  a {
    color: ${theme.text};
    font-weight: bold;
  }
`;

const Content = styled.div`
  font-family: "Ubuntu Mono", monospace;
  background-color: ${theme.background};
  color: ${theme.text};
  min-height: 100vh;
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalFonts />
      <Content>
        <Header />
      </Content>
    </ThemeProvider>
  );
}
