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
        <Navbar.Brand href="/Home">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
              <Nav.Link href="/Dashboard">Tableau de bord</Nav.Link>
              <Nav.Link href="/Stats">Statistiques</Nav.Link>
              <NavDropdown title="Produits" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/Products">Visualiser les produits</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Ajouter un produits</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
               <Nav.Link href="/Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <section className="contact-section my-5">
      <MDBRow>
        <MDBCol lg="8">
          <MDBCardBody className="form">
            <h3 className="mt-4">
              <MDBIcon icon="envelope" className="pr-2" />
             Nous contacter:
            </h3>
            <MDBRow>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput
                    type="text"
                    id="form-contact-name"
                    label="Votre nom"
                  />
                </div>
              </MDBCol>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput
                    type="text"
                    id="form-contact-email"
                    label="Votre e-mail"
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
                    label="Votre téléphone"
                  />
                </div>
              </MDBCol>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput
                    type="text"
                    id="form-contact-company"
                    label="Votre société"
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
                    label="Votre message"
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
            <h3 className="my-4 pb-2">Information de contact</h3>
            <ul className="list-unstyled ml-4">
              <li>
                <p>
                  <MDBIcon icon="map-marker-alt" className="pr-2" />
                  Lyon, 69000 FRA
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
                  contact@dashboard.com
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
