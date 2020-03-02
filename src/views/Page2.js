import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, NavDropdown, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
class Page2 extends React.Component {


constructor(props) {
  super(props)
}


  render() {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Tableau de bord</Nav.Link>
      <Nav.Link href="#pricing">Statistique</Nav.Link>
      <NavDropdown title="Carte" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Monde</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">France</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link> <Link to='/Page3'>Se connecter</Link></Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Paramètres
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
}
}
export default Page2;
