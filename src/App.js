import "./App.css";

import { Header } from "./components/Header";
import { Slider } from "./components/Slider";
import { Footer } from "./components/Footer";
import { Container } from "./components/Container";
import { Heading } from "./components/Heading";
import { Text } from "./components/Text";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <Container className="wrapper">
        <Heading level={4}>Это хединг</Heading>
        <Text element="div">Это текст</Text>
      </Container>
      <Footer />
    </>
  );
}

export default App;
