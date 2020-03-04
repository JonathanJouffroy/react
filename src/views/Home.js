import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, NavDropdown, Nav, Card,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBCardImage,MDBBtn,MDBIcon,MDBCardGroup,MDBContainer, MDBRow ,MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';
import { Polar, Doughnut } from 'react-chartjs-2';
import { connect } from 'react-redux';
import * as fromActions from '../actions'
import profil from  '../images/profil.png';
import profil1 from '../images/profil-1.png';
import profil2 from '../images/profil-2.png';

class Home extends React.Component {


constructor(props) {
  super(props)
}

state = {
    dataPolar: {
        datasets: [
          {
            data: [300, 50, 100, 40, 120],
            backgroundColor: [
              "rgba(247, 70, 74, 0.5)",
              "rgba(70, 191, 189, 0.5)",
              "rgba(253, 180, 92, 0.5)",
              "rgba(148, 159, 177, 0.5)",
              "rgba(77, 83, 96, 0.5)"
            ],
            label: "My dataset" // for legend
          }
        ],
        labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"]
      },
    dataDoughnut: {
      labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
      datasets: [
        {
          data: [300, 50, 100, 40, 120],
          backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
          hoverBackgroundColor: [
            "#FF5A5E",
            "#5AD3D1",
            "#FFC870",
            "#A8B3C5",
            "#616774"
          ]
        }
      ]
    }
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
                <Nav.Link href="/Stats" > Statistiques</Nav.Link>
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
    
          <h1>Notre équipes</h1>
        <MDBRow className="text-center">
         <MDBCol>
        <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src={profil} />
        <Card.Body>
          <Card.Title>{this.props.users[1].name + " " + this.props.users[1].firstname}</Card.Title>
          <Card.Text>
          <strong className="mb-2">Email: </strong>
            {this.props.users[1].email}
          </Card.Text>
        </Card.Body>
      </Card>
        </MDBCol>
        <MDBCol>
            <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src={profil1} />
            <Card.Body>
              <Card.Title>{this.props.users[2].name + " " + this.props.users[2].firstname}</Card.Title>
              <Card.Text>
              <strong className="mb-2">Email: </strong>
                {this.props.users[2].email}
              </Card.Text>
            </Card.Body>
          </Card>
        </MDBCol>
        <MDBCol>
            <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src={profil2} />
            <Card.Body>
              <Card.Title>{this.props.users[4].name + " " + this.props.users[4].firstname}</Card.Title>
              <Card.Text>
              <strong className="mb-2">Email: </strong>
                {this.props.users[4].email}
              </Card.Text>
            </Card.Body>
          </Card>
        </MDBCol>
      </MDBRow>
        </div>
    );
    }
}
const mapStateToProps = (state) => ({
  values : state.valuesReducer.value,
  users: state.usersReducer.users
})

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(fromActions.getUsers())
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);
