import React from 'react';
import {Navbar, NavDropdown, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBCardGroup,MDBContainer, MDBRow ,MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';
import { connect } from 'react-redux';
import * as fromActions from '../actions';



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
                                <MDBCardTitle tag="h5">{this.props.products[0].name}</MDBCardTitle>
                                    <MDBCardText>
                                        {this.props.products[0].description}
                                    </MDBCardText>
                                    <MDBCardText>
                                        {"Prix : " +  + this.props.products[0].price + " " + "€"} 
                                    </MDBCardText>
                                    <MDBCardText>
                                        {"Quantité : " + this.props.products[0].quantity}
                                    </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle tag="h5">{this.props.products[1].name}</MDBCardTitle>
                                    <MDBCardText>
                                        {this.props.products[1].description}
                                    </MDBCardText>
                                    <MDBCardText>
                                        {"Prix : " + this.props.products[1].price + + " " + "€"}
                                    </MDBCardText>
                                    <MDBCardText>
                                        {"Quantité : " + this.props.products[1].quantity}
                                    </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle tag="h5">{this.props.products[1].name}</MDBCardTitle>
                                    <MDBCardText>
                                        {this.props.products[1].description}
                                    </MDBCardText>
                                    <MDBCardText>
                                        {"Prix : " + this.props.products[1].price + " " + "€"}
                                    </MDBCardText>
                                    <MDBCardText>
                                        {"Quantité : " + this.props.products[1].quantity}
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
    getProducts: () => dispatch(fromActions.getProductsSaga()),
  })
export default connect(mapStateToProps, mapDispatchToProps)(Products);

