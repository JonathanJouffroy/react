import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
class Contact extends React.Component {

  render() {

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
              <Nav.Link href="/Page2">Tableau de bord</Nav.Link>
              <Nav.Link href="/Stats">Statistique</Nav.Link>
              <NavDropdown title="Carte" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Monde</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">France</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link> <Link to='/Contact'>Contact</Link></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Paramètres
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <section className="contact-section my-5">
      <MDBRow>
        <MDBCol lg="8">
          <MDBCardBody className="form">
            <h3 className="mt-4">
              <MDBIcon icon="envelope" className="pr-2" />
              Write to us:
            </h3>
            <MDBRow>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput
                    type="text"
                    id="form-contact-name"
                    label="Your name"
                  />
                </div>
              </MDBCol>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput
                    type="text"
                    id="form-contact-email"
                    label="Your email"
                  />
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput
                    type="text"
                    id="form-contact-phone"
                    label="Your phone"
                  />
                </div>
              </MDBCol>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput
                    type="text"
                    id="form-contact-company"
                    label="Your company"
                  />
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12">
                <div className="md-form mb-0">
                  <MDBInput
                    type="textarea"
                    id="form-contact-message"
                    label="Your message"
                  />
                  <MDBBtn rounded color="blue">
                    <MDBIcon icon="paper-plane" />
                  </MDBBtn>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCol>
        <MDBCol lg="4">
          <MDBCardBody className="contact text-center h-100">
            <h3 className="my-4 pb-2">Contact information</h3>
            <ul className="list-unstyled ml-4">
              <li>
                <p>
                  <MDBIcon icon="map-marker-alt" className="pr-2" />
                  New York, 94126 USA
                </p>
              </li>
              <li>
                <p>
                  <MDBIcon icon="phone" className="pr-2" />+ 01 234 567 89
                </p>
              </li>
              <li>
                <p>
                  <MDBIcon icon="envelope" className="pr-2" />
                  contact@example.com
                </p>
              </li>
            </ul>
            <hr className="hr-light my-4" />
            <ul className="list-inline text-center list-unstyled">
              <li className="list-inline-item">
                <a href="#!" className="p-2 fa-lg w-ic">
                  <MDBIcon fab icon="twitter" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#!" className="p-2 fa-lg w-ic">
                  <MDBIcon fab icon="linkedin-in" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#!" className="p-2 fa-lg w-ic">
                  <MDBIcon fab icon="instagram" />
                </a>
              </li>
            </ul>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </section>
</div>

  );
}
}
export default Contact;
