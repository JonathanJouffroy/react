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
                <Nav.Link href="/Orders">Commandes</Nav.Link>
                <Nav.Link href="/Stats" > Statistiques</Nav.Link>
                <NavDropdown title="Produits" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/Products">Visualiser les produits</NavDropdown.Item>
            </NavDropdown>
            </Nav>
                <Nav>
                       <Nav.Link href="/Contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>  

        <MDBRow className="mb-4 text-center cardTexte">
        <MDBCol xl="3" md="6" className="mb-r">
          <MDBContainer>
          <MDBCard className="cascading-admin-card">
              <div className="admin-up">
                <div className="data">
                  <p>Ventes</p>
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
            </MDBCard>
            </MDBContainer>
        </MDBCol>
        <MDBCol xl="3" md="6" className="mb-r">
          <MDBCard className="cascading-admin-card">
              <div className="admin-up">
                <div className="data">
                  <p>Nombre de produits</p>
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
            </MDBCard>
        </MDBCol>
        <MDBCol xl="3" md="6" className="mb-r">
          <MDBCard className="cascading-admin-card">
              <div className="admin-up">
                <div className="data">
                  <p>Nombre de commandes</p>
                  <h4>
                    <strong></strong>
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
            </MDBCard>
        </MDBCol>
      </MDBRow>
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
  getUsers: () => dispatch(fromActions.getUsersSaga()),
  getOrders: () => dispatch(fromActions.getOrdersSaga())
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);
