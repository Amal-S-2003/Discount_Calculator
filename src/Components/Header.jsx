import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
function Header() {
  return (
    <>
      <Navbar className="bg-dark ">
        <Container>
          <Navbar.Brand
            href="#home"
            className="d-flex align-items-center gap-3 "
          >
            <img
              alt=""
              src="/src/assets/images/image.png"
              width="35"
              height="35"
              className="d-inline-block align-top"
            />
            <h2 className="text-light fw-bolder">Discount Calculator</h2>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
