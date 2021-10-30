import React from 'react';
import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from '../../images/logo.png'
import Admin from '../Admin/Admin/Admin'
const Header = () => {
  const { user, logOut } = useAuth();

const [show, setShow] = React.useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

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
                  to="/myBooking"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#3598DB",
                  }}
                  className="fw-bold mx-3"
                >
                  My Booking
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/aboutus"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#3598DB",
                  }}
                  className="fw-bold mx-3"
                >
                  About
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/contactus"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#3598DB",
                  }}
                  className="fw-bold mx-3"
                >
                  Contact
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

                <div>
                  {" "}
                  <button variant="primary" onClick={handleShow} className=" btn mt-2 fw-bold btn-outline-info text-dark ms-3">
                    Admin
                  </button>
                  <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title>
                        <h3>Admin Pannel</h3>
                      </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                     <Admin></Admin>
                    </Offcanvas.Body>
                  </Offcanvas>
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