import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AsideComponent from "./components/AsideComponent";
import PlayerComponent from "./components/PlayerComponent";
import MainComponent from "./components/MainComponent";

function App() {
  return (
    <>
      <Container fluid>
        <AsideComponent />
        <MainComponent />
        <PlayerComponent />
      </Container>
    </>
  );
}

export default App;
