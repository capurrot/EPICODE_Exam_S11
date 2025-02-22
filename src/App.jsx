import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AsideComponent from "./components/AsideComponent";
import PlayerComponent from "./components/PlayerComponent";
import MainComponent from "./components/MainComponent";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Container fluid>
          <AsideComponent />
          <MainComponent />
          <PlayerComponent />
        </Container>
      </Provider>
    </>
  );
}

export default App;
