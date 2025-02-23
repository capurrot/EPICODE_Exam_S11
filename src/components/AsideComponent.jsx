import { BsBookFill, BsHeartFill, BsHouseDoorFill } from "react-icons/bs";
import logo from "../assets/logo/logo.png";
import { Navbar, Button, Form, InputGroup, FormControl } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { SEARCH_ARTIST } from "../redux/actions";
import { Link } from "react-router";

const AsideComponent = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch({ type: SEARCH_ARTIST, payload: query });
    setQuery("");
  };

  return (
    <aside className="col col-2">
      <Navbar className="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
        <div className="container flex-column align-items-start">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Spotify Logo" width="131" height="40" />
          </Link>
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
                  <Link className="nav-item nav-link d-flex align-items-center" to="/">
                    <BsHouseDoorFill />
                    &nbsp; Home
                  </Link>
                </li>
                <li>
                  <a className="nav-item nav-link d-flex align-items-center" href="#">
                    <BsBookFill />
                    &nbsp; Your Library+
                  </a>
                </li>
                {/* Agguingo una sezione ddove vedere tutti i preferiti */}
                <li>
                  <Link className="nav-item nav-link d-flex align-items-center" to="/favourites">
                    <BsHeartFill />
                    &nbsp; Favourites
                  </Link>
                </li>
                <li>
                  <Form onSubmit={handleSearch} className="mt-3">
                    <InputGroup>
                      <FormControl
                        type="text"
                        placeholder="Search"
                        aria-label="Search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                      />
                      <Button variant="outline-secondary" type="submit">
                        GO
                      </Button>
                    </InputGroup>
                  </Form>
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
