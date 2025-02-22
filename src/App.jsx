import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AsideComponent from "./components/AsideComponent";
import PlayerComponent from "./components/PlayerComponent";

function App() {
  return (
    <>
      <Container fluid>
        <AsideComponent />
        <PlayerComponent />
      </Container>
    </>
  );
}

export default App;
