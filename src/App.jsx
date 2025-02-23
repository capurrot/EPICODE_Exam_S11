import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AsideComponent from "./components/AsideComponent";
import PlayerComponent from "./components/PlayerComponent";
import MainComponent from "./components/MainComponent";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router";
import FavouritesComponent from "./components/FavouritesComponent";

function App() {
  return (
    <>
      <Provider store={store}>
        <Container fluid>
          <BrowserRouter>
            <AsideComponent />
            <Routes>
              <Route path="/" element={<MainComponent />} />
              <Route path="/favourites" element={<FavouritesComponent />} />
            </Routes>
            <PlayerComponent />
          </BrowserRouter>
        </Container>
      </Provider>
    </>
  );
}

export default App;
