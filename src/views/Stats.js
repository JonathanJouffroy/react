import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, NavDropdown, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBContainer, MDBRow ,MDBCol } from 'mdbreact';
import { Line, Polar, Doughnut } from 'react-chartjs-2';

class Stats extends React.Component {

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
    },
    dataLine: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "My First dataset",
            fill: true,
            lineTension: 0.3,
            backgroundColor: "rgba(225, 204,230, .3)",
            borderColor: "rgb(205, 130, 158)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgb(205, 130,1 58)",
            pointBackgroundColor: "rgb(255, 255, 255)",
            pointBorderWidth: 10,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgb(0, 0, 0)",
            pointHoverBorderColor: "rgba(220, 220, 220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: "My Second dataset",
            fill: true,
            lineTension: 0.3,
            backgroundColor: "rgba(184, 185, 210, .3)",
            borderColor: "rgb(35, 26, 136)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgb(35, 26, 136)",
            pointBackgroundColor: "rgb(255, 255, 255)",
            pointBorderWidth: 10,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgb(0, 0, 0)",
            pointHoverBorderColor: "rgba(220, 220, 220, 1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [28, 48, 40, 19, 86, 27, 90]
          }
        ]
      }
  }

  render() {

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand><Link to="/Dashboard">Home</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/Dashboard">Tableau de bord</Nav.Link>
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
               
            </MDBRow>
            <MDBRow>
                <MDBCol>
                    
                    <MDBContainer>
                        <h3 className="mt-5">Line chart</h3>
                        <Line data={this.state.dataLine} options={{ responsive: true }} />
                    </MDBContainer>
                        
                    </MDBCol>

            </MDBRow>
        </div>
    );
    }
}
export default Stats;
