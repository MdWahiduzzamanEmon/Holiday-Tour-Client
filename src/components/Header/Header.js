import React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from '../../images/logo.png'
const Header = () => {
  const { user, logOut } = useAuth();
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="white" fixed="top">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link
                  as={NavLink}
                  to="/home"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#3598DB",
                  }}
                  className="fw-bold mx-3"
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/fgf"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#3598DB",
                  }}
                  className="fw-bold mx-3"
                >
                  Pricing
                </Nav.Link>
              </Nav>
              <Nav>
                {user.uid ? (
                  <h6 className="mt-3 fw-bold px-2">{user.displayName}</h6>
                ) : (
                  <Nav.Link as={Link} to="/register">
                    <button className="btn btn-outline-warning fw-bold">
                      Register
                    </button>
                  </Nav.Link>
                )}
                <div>
                  {user.uid && (
                    <img
                      src={user?.photoURL}
                      alt=""
                      className="login-user-img d-none d-lg-block rounded-circle mx-auto"
                    />
                  )}
                </div>
                {user.uid && (
                  <button className=" btn" onClick={logOut}>
                    <i className="fas fs-5 fa-sign-out-alt"></i>
                  </button>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default Header;