import prevIcon from "../assets/playerbuttons/prev.png";
import playIcon from "../assets/playerbuttons/play.png";
import nextIcon from "../assets/playerbuttons/next.png";
import repeatIcon from "../assets/playerbuttons/repeat.png";
import shuffleIcon from "../assets/playerbuttons/shuffle.png";
import { Container } from "react-bootstrap";

const PlayerComponent = () => {
  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <div className="row h-100">
        <div className="col-lg-10 offset-lg-2">
          <div className="row h-100 flex-column justify-content-center align-items-center">
            <div className="col-6 col-md-4 playerControls">
              <div className="d-flex">
                <a href="#">
                  <img src={shuffleIcon} alt="shuffle" />
                </a>
                <a href="#">
                  <img src={prevIcon} alt="prev" />
                </a>
                <a href="#">
                  <img src={playIcon} alt="play" />
                </a>
                <a href="#">
                  <img src={nextIcon} alt="next" />
                </a>
                <a href="#">
                  <img src={repeatIcon} alt="repeat" />
                </a>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PlayerComponent;
