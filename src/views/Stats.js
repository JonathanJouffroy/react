import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, NavDropdown, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBIcon,MDBCardGroup,MDBContainer, MDBRow ,MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';
import { Polar, Doughnut } from 'react-chartjs-2';

class Stats extends React.Component {


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
                <Navbar.Brand><Link to="/Page2">Home</Link></Navbar.Brand>
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
            
            <MDBRow>
                <MDBCol>
                    
                    <MDBContainer>
                        <h3 className="mt-5">Doughnut chart</h3>
                        <Doughnut data={this.state.dataDoughnut} options={{ responsive: true }} />
                    </MDBContainer>
                    
                </MDBCol>
                <MDBCol>
                    
                    <MDBContainer>
                        <h3 className="mt-5">Polar area chart</h3>
                        <Polar data={this.state.dataPolar} options={{ responsive: true }} />
                    </MDBContainer>
                    
                </MDBCol>
                <MDBCol>
                    
                    <MDBContainer>
                        <h3 className="mt-5">Polar area chart</h3>
                        <Polar data={this.state.dataPolar} options={{ responsive: true }} />
                    </MDBContainer>
                    
                </MDBCol>
            </MDBRow>
            
        </div>
    );
    }
}
export default Stats;
