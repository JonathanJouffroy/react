import React from 'react';
import {Navbar, NavDropdown, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBCardGroup,MDBContainer, MDBRow ,MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';
import { connect } from 'react-redux';
import * as fromActions from '../actions';
import './style.css'


class Products extends React.Component {


state = {
   
  }

  componentDidMount = async () =>{
    console.log('component did mount')
    await this.props.getProducts()
  }

  render() {

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/Home">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/Orders">Commandes</Nav.Link>
                <Nav.Link href="/Stats">Statistiques</Nav.Link>
                <NavDropdown title="Produits" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/Products">Visualiser les produits</NavDropdown.Item>
            </NavDropdown>
            </Nav>
                <Nav>
                    <Nav.Link href="/Contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
            <h1  className="cardTexte text-center">Liste des produits</h1>
            <MDBRow >
              <MDBCol>
                <MDBContainer>
                <MDBCardGroup deck >
                    {this.props.products.map((e,i) =>
                    
                        <MDBCard>
                            <MDBCardBody >
                                <MDBCardTitle tag="h5">{e.name}</MDBCardTitle>
                                    <MDBCardText>
                                        {e.description}
                                    </MDBCardText>
                                    <MDBCardText>
                                        {"Prix : " +  + e.price + " " + "€"} 
                                    </MDBCardText>
                                    <MDBCardText>
                                        {"Quantité : " + e.quantity}
                                    </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                   
                    
                    )}
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
    getProducts: () => dispatch(fromActions.getProductsSaga()),
  })
export default connect(mapStateToProps, mapDispatchToProps)(Products);

