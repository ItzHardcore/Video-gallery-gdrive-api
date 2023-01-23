import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from "mdb-react-ui-kit";

export default function MyNavbar() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand="lg" light bgColor="light" className="fixed-top">
      <MDBContainer fluid>
        <MDBNavbarBrand className="ms-5" href="#">
          Margarida Mimo
        </MDBNavbarBrand>
        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="justify-content-end me-5 mb-2 mb-lg-0">
            <MDBNavbarItem className="ms-2 me-2">
              <MDBNavbarLink href="#gallery">Galeria</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className="ms-2 me-2">
              <MDBNavbarLink href="#cv">CV</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className="ms-2 me-2">
              <MDBNavbarLink href="#contacts">Contactos</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
