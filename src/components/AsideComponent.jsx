import { BsBookFill, BsHouseDoorFill } from "react-icons/bs";
import logo from "../assets/logo/logo.png";
import { Navbar, Button, NavLink } from "react-bootstrap";

const AsideComponent = () => {
  return (
    <aside className="col col-2">
      <Navbar className="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
        <div className="container flex-column align-items-start">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="Spotify Logo" width="131" height="40" />
          </NavLink>
          <Button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </Button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul>
                <li>
                  <a className="nav-item nav-link d-flex align-items-center" href="#">
                    <BsHouseDoorFill />
                    &nbsp; Home
                  </a>
                </li>
                <li>
                  <a className="nav-item nav-link d-flex align-items-center" href="#">
                    <BsBookFill />
                    &nbsp; Your Library
                  </a>
                </li>
                <li>
                  <div className="input-group mt-3">
                    <input type="text" className="form-control" placeholder="Search" aria-label="Search" />
                    <div className="input-group-append">
                      <Button variant="outline-secondary" className="btn btn-sm h-100">
                        GO
                      </Button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="nav-btn d-flex flex-column mx-auto">
          <Button className="btn signup-btn" type="button">
            Sign Up
          </Button>
          <Button className="btn login-btn" type="button">
            Login
          </Button>
          <div>
            <a href="#">Cookie Policy</a> |<a href="#"> Privacy</a>
          </div>
        </div>
      </Navbar>
    </aside>
  );
};

export default AsideComponent;
