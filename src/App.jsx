import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AsideComponent from "./components/AsideComponent";

function App() {
  return (
    <>
      <Container fluid>
        <AsideComponent />
      </Container>
    </>
  );
}

export default App;
