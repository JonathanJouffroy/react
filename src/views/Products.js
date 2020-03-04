import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, NavDropdown, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  MDBIcon,MDBCardGroup,MDBContainer, MDBRow ,MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';
import { Line, Polar, Doughnut } from 'react-chartjs-2';
import { connect } from 'react-redux';
import * as fromActions from '../actions';



class Products extends React.Component {


constructor(props) {
  super(props)
}

state = {
   
  }

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
            <MDBRow>
              <MDBCol>
                <MDBContainer>
                    <MDBCardGroup deck>
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle tag="h5">{this.props.products.map((e,i) => <p key= {i}>{e.name}</p>)}</MDBCardTitle>
                                    <MDBCardText>
                                    </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
                                    <MDBCardText>
                                        This panel has supporting text below as a natural lead-in to
                                        additional content.
                                    </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
                                    <MDBCardText>
                                        This is a wider panel with supporting text below as a natural
                                        lead-in to additional content. This panel has even longer
                                        content than the first to show that equal height action.
                                    </MDBCardText>
                            </MDBCardBody>
                    </MDBCard>
                </MDBCardGroup>
            </MDBContainer>
        </MDBCol>
    </MDBRow>
        </div>
    );
    }
}
const mapStateToProps = (state) => ({
    products: state.productsReducer.products
  })
  
  const mapDispatchToProps = dispatch => ({
    getProducts: () => dispatch(fromActions.getProducts())
  })
export default connect(mapStateToProps, mapDispatchToProps)(Products);

