import React, { useEffect } from "react";
import { Container, Nav, Navbar, Offcanvas, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  useEffect(() => {
    const navbar = document.getElementById("main_navbar_cnt");
    const header = document.getElementById("main_header_cnt");

    const handleScroll = () => {
      if (window.scrollY > 0) {
        navbar?.classList.add("fixed-top", "scrollheader");
        header?.classList.remove("fixed-top");
      } else {
        navbar?.classList.remove("fixed-top", "scrollheader");
        header?.classList.add("fixed-top");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header id="main_header_cnt" className="fixed-top">
      <div className="top-header">
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col xs="auto">
              <div className="d-flex align-items-center">
                <a
                  href="mailto:info@plantpalace.com"
                  className="d-flex align-items-center me-3"
                >
                  <i className="fa fa-envelope-o me-1" aria-hidden="true"></i>
                  Email: info@plantpalace.com
                </a>
                <a
                  href="tel:+923243413688"
                  className="d-flex align-items-center"
                >
                  <i className="fa fa-phone me-1" aria-hidden="true"></i> +92
                  324 341 3688
                </a>
              </div>
            </Col>
            <Col xs="auto">
              <div className="d-flex align-items-center">
                <a href="#" className="d-flex align-items-center me-3">
                  <i className="fa fa-user me-1" aria-hidden="true"></i> Login
                </a>
                <a href="#" className="d-flex align-items-center">
                  <i
                    className="fa fa-shopping-cart me-1"
                    aria-hidden="true"
                  ></i>
                  Cart (1)
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Navbar expand="lg" className="main-navbar" id="main_navbar_cnt">
        <Container>
          <Navbar.Brand as={Link} to="/">
            PlantPalace
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton className="justify-content-start">
              <Offcanvas.Title id="offcanvasNavbarLabel">
                PlantPalace
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/shop">
                  Shop
                </Nav.Link>
                <Nav.Link as={Link} to="/portfolio">
                  Portfolio
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                  Contact
                </Nav.Link>
              </Nav>
              <div className="d-flex align-items-center">
                <a href="#" className="nav-icon">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </a>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
