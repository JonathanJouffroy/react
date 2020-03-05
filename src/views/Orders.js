import React from 'react';
import {Navbar, NavDropdown, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBCardGroup, MDBContainer, MDBRow ,MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';
import { Polar, Doughnut } from 'react-chartjs-2';
import * as fromActions from '../actions';
import { connect } from 'react-redux';

class Orders extends React.Component {

  constructor(props)
  {
    super(props)
    this.state = {
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
  }


  componentDidMount = async () =>{
    console.log('component did mount')
  
    await this.props.getOrders()
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
            <MDBRow className='text-center'>
                <MDBCol>
                    <h1>Listes des commandes</h1>
                </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol>
                <MDBContainer>
                    <MDBCardGroup deck>
                        <MDBCard>
                            <MDBCardBody className='text-center'>
                                <MDBCardTitle tag="h5"></MDBCardTitle>
                                { this.props.orders.length > 0 ? true : null }
                                    <MDBCardText >
                                    {"Numéro de la commande : " + this.props.orders[0].name_order}
                                    </MDBCardText>
                                    <MDBCardText>
                                    {"Prix de la commande : " + this.props.orders[0].price_order}
                                    </MDBCardText>
                                    <MDBCardText>
                                    {"Adresse de livraison : " + this.props.orders[0].ship_address}
                                    </MDBCardText>
                                    <MDBCardText>
                                      
                                    {"Adresse de facturation : " + this.props.orders[0].billing_address}
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
            <MDBRow className="mb-4">
        <MDBCol xl="3" md="6" className="mb-r">
              <div className="admin-up">
                <div className="data">
                  <p>SALES</p>
                  <h4>
                    <strong>$2000</strong>
                  </h4>
                </div>
              </div>
              <MDBCardBody>
                <div className="progress">
                  <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg-primary" role="progressbar"
                    style={{width: '25%'}}></div>
                </div>
                <MDBCardText>Better than last week (25%)</MDBCardText>
              </MDBCardBody>
            
        </MDBCol>
        <MDBCol xl="3" md="6" className="mb-r">
              <div className="admin-up">
                <div className="data">
                  <p>SUBSCRIPTIONS</p>
                  <h4>
                    <strong>200</strong>
                  </h4>
                </div>
              </div>
              <MDBCardBody>
                <div className="progress">
                  <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg grey" role="progressbar"
                    style={{width: '25%'}}></div>
                </div>
                <MDBCardText>Worse than last week (25%)</MDBCardText>
              </MDBCardBody>
        </MDBCol>
        <MDBCol xl="3" md="6" className="mb-r">
              <div className="admin-up">
                <div className="data">
                  <p>TRAFFIC</p>
                  <h4>
                    <strong>20000</strong>
                  </h4>
                </div>
              </div>
              <MDBCardBody>
                <div className="progress">
                  <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar grey darken-2" role="progressbar"
                    style={{width: '75%'}}></div>
                </div>
                <MDBCardText>Worse than last week (75%)</MDBCardText>
              </MDBCardBody>
        </MDBCol>
        <MDBCol xl="3" md="6" className="mb-r">
              <div className="admin-up">
                <div className="data">
                  <p>ORGANIC TRAFFIC</p>
                  <h4>
                    <strong>2000</strong>
                  </h4>
                </div>
              </div>
              <MDBCardBody>
                <div className="progress">
                  <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="30" className="progress-bar bg-primary" role="progressbar"
                    style={{width: '25%'}}></div>
                </div>
                <MDBCardText>Better than last week (30%)</MDBCardText>
              </MDBCardBody>
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

