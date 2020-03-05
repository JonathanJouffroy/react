import React from 'react';
import {Navbar, NavDropdown, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBCardImage,MDBBtn,MDBCardGroup,MDBContainer, MDBRow ,MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';
import * as fromActions from '../actions';
import { connect } from 'react-redux';
import './style.css';
class Orders extends React.Component {

state = {
    
  }


  componentDidMount = async () =>{
    console.log('component did mount')
    await this.props.getOrders()
  }


  render() {    

    return (        
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/Home">
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/Orders">
              Commandes
            </Nav.Link>
            <Nav.Link href="/Stats" >
               Statistiques
            </Nav.Link>
            <NavDropdown title="Produits" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/Products">
                Visualiser les produits
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/Contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <MDBRow className='text-center'>
        <MDBCol>
          <h1 className="cardTexte">Listes des commandes</h1>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol>
          <MDBContainer>
            <MDBCardGroup deck >
                                    {this.props.orders.map((e,i) =>
              <MDBCard className="cardS" >
                <MDBCardBody className='text-center '>
                  <MDBCardText>
                                    {"Numéro de la commande : " + e.name_order}                               
                  </MDBCardText>
                  <MDBCardText>
                                    {"Prix de la commande : " + e.price_order + "€"}                               
                  </MDBCardText>
                  <MDBCardText>
                                    {"Adresse de livraison : " + e.ship_address}                               
                  </MDBCardText>
                  <MDBCardText>
                                    {"Adresse de facturation : " + e.billing_address}                               
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
  orders: state.ordersReducer.orders
})

const mapDispatchToProps = dispatch => ({
  getOrders: () => dispatch(fromActions.getOrdersSaga())
})
export default connect(mapStateToProps, mapDispatchToProps)(Orders);

