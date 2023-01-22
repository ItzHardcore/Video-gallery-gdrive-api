import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

function Footer() {
  return (
    <MDBFooter className="bg-light text-center text-white">
      <MDBContainer className="p-4 pb-0">
        <section className="mb-4">
          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#333333" }}
            target="_blank"
            href="https://www.tiktok.com/@margaridamimo"
            role="button"
          >
            <MDBIcon fab icon="tiktok" />
          </MDBBtn>
          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#0082ca" }}
            target="_blank"
            href="https://www.linkedin.com/in/margarida-mimo-b49650233/"
            role="button"
          >
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>
          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#ac2bac" }}
            target="_blank"
            href="https://www.instagram.com/margaridag.mimo/?ig_mid=2FFDE7EB-8B10-45E8-9F73-906322B089B6&utm_source=igweb&fall_back_to_web=false"
            role="button"
          >
            <MDBIcon fab icon="instagram" />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright Todos os direitos reservados <br></br>
        <a className="text-white" href="https://mdbootstrap.com/">
          MargaridaMimo.pt
        </a>
      </div>
    </MDBFooter>
  );
}
export default Footer;
