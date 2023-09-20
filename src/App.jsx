import { styled, ThemeProvider, createGlobalStyle } from "styled-components";
import GlobalFonts from "./fonts/fonts";

import Header from "./components/Header";
import AboutMeSection from "./components/AboutMeSection";
import MyProjectsSection from "./components/MyProjectsSection";
import TechnologiesSection from "./components/TechnologiesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const colorPalette = ["#BEE9E8", "#1B4965", "#1b4965d1"];

const theme = {
  text: colorPalette[0],
  background: colorPalette[1],
  lowOpacityBg: colorPalette[2],
};

const GlobalStyle = createGlobalStyle`
  a {
    color: ${theme.text};
    font-weight: bold;
  }

  a:focus, button:focus {
    outline: 4px solid red;
    border-radius: 4px;
  }

  button {
    background-color: ${theme.background};
    color: ${theme.text};
    border: 2px solid ${theme.text};
    font: bold 1rem "Ubuntu Mono", monospace;
  }

  section {
    min-height: 100vh;
  }

  strong {
    font-weight: bold;
  }
`;

const Body = styled.div`
  font-family: "Ubuntu Mono", monospace;
  background-color: ${theme.background};
  color: ${theme.text};
  min-height: 100vh;
`;

const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalFonts />
      <Body>
        <Header />
        <Content>
          <AboutMeSection />
          <MyProjectsSection />
          <TechnologiesSection />
          <ContactSection />
        </Content>
        <Footer />
      </Body>
    </ThemeProvider>
  );
}
