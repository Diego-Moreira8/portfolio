import { styled, ThemeProvider, createGlobalStyle } from "styled-components";
import GlobalFonts from "./fonts/fonts";

import Header from "./components/Header";
import AboutMeSection from "./components/AboutMeSection";

const colorPallete = ["#BEE9E8", "#1B4965", "#1b4965d1"];

const theme = {
  text: colorPallete[0],
  background: colorPallete[1],
  lowOpacityBg: colorPallete[2],
};

const GlobalStyle = createGlobalStyle`
  a {
    color: ${theme.text};
    font-weight: bold;
  }

  section {
    min-height: 100vh;
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
        <AboutMeSection />
      </Content>
    </ThemeProvider>
  );
}
