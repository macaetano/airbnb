import styled, { createGlobalStyle } from "styled-components";

import Header from "./components/Header";

const GlobalStyle = createGlobalStyle`
  * {

    box-sizing: border-box;
    margin: 0;
  }
    html, body {
    font-family: 'Airbnb Cereal App Book';
  }
`;

const Container = styled.div`
  min-width: 100%;
  min-height: 100%;
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <div style={{ height: "1000px", backgroundColor: "red" }}></div>
    </Container>
  );
}

export default App;
