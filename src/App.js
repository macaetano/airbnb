import styled, { createGlobalStyle } from "styled-components";

import Header from "./components/Header";
import City from "./components/City";
import ListContainer from "./components/LiveAnywhere";
import Banner from "./components/Banner";

const GlobalStyle = createGlobalStyle`
  * {

    box-sizing: border-box;
    margin: 0;
  }
    html, body {
    font-family: 'Airbnb Cereal App Book';
  }
  button {
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
      <City />
      <ListContainer />
      <Banner />
    </Container>
  );
}

export default App;
