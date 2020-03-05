import React from 'react';
import {Navbar, NavDropdown, Nav, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBRow ,MDBCol, MDBIcon ,MDBCardImage,MDBCardBody,MDBCardTitle,MDBCardText,MDBBtn,MDBCard,MDBContainer,MDBCardGroup} from 'mdbreact';
import { connect } from 'react-redux';
import * as fromActions from '../actions'
import profil from  '../images/profil.png';
import profil1 from '../images/profil-1.png';
import profil2 from '../images/profil-2.png';
import { getOrders } from '../api';
import './style.css';

class Home extends React.Component {


state = {
}

componentDidMount = async () =>{
  console.log('component did mount')
  await this.props.getUsers()
}
  render() {

    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/Home">Home</Navbar.Brand>
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
                <NavDropdown.Item href="#action/3.1">
                  Ajouter un produits
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
        <div class="content title ">
          <h1>Notre équipes</h1>
        </div>
        <div class="row text-center">
          <div class="col content">
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src={profil} />
              <Card.Body>
                <Card.Title>
                  {this.props.users[1].name + " " + this.props.users[1].firstname}
                </Card.Title>
                <Card.Text>
                  <strong className="mb-2">Email: </strong>
                  {this.props.users[1].email}          
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div class="col content">
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src={profil1} />
              <Card.Body>
                <Card.Title>
                  {this.props.users[2].name + " " + this.props.users[2].firstname}
                </Card.Title>
                <Card.Text>
                  <strong className="mb-2">Email: </strong>
                  {this.props.users[2].email}              
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div class="col content">
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src={profil2} />
              <Card.Body>
                <Card.Title>
                  {this.props.users[4].name + " " + this.props.users[4].firstname}
                </Card.Title>
                <Card.Text>
                  <strong className="mb-2">Email: </strong>
                  {this.props.users[4].email}              
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
    }
}
const mapStateToProps = (state) => ({
  values : state.valuesReducer.value,
  users: state.usersReducer.users
})

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(fromActions.getUsersSaga()),
  getOrders: () => dispatch(fromActions.getOrdersSaga())
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);
