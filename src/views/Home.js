import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBCard, MDBIcon, MDBCardBody, MDBCardText } from 'mdbreact';
import NavBar from '../component/navbar.component';
import { Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as fromActions from '../actions'
import profil from  '../images/profil.png';
import profil1 from '../images/profil-1.png';
import profil2 from '../images/profil-2.png';
import './style.css';

export class Home extends React.Component {


state = {


}

getTTOrders() {
  let total = 0;
  this.props.orders.forEach(element => {
    total += element['price_order']
  });
  console.log(this.props.products)
  return total
}

componentDidMount = async () =>{
  console.log('component did mount')
  await this.props.getUsers()
  await this.props.getOrders()
  await this.props.getProducts()
}

  render() {

    return (
      <div>
        <NavBar></NavBar>
        <div class="content title">
          <h1>Chiffres clés</h1>
        </div>
        <div class="row re-size">
          <div class="col content">
            <MDBCard class="cascading-admin-card">
              <div class="admin-up">
                <div class="data text-align">
                  <MDBIcon icon="chart-pie" class="light-blue lighten-1"/>
                  <p>Total de produits</p>
                  <h4><strong>{ this.props.products.length }</strong></h4>
                </div>
              </div>
              <MDBCardBody>
                
                <div class="progress">
                  <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25"
                  class="progress-bar red darken-2" role="progressbar" style={{ width: '10%' }}></div>
                </div>
                <MDBCardText>
                  Stock de produits bas (10%)
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div class="col content">
            <MDBCard class="cascading-admin-card">
              <div class="admin-up">
                <div class="data text-align">
                  <MDBIcon icon="chart-pie" class="light-blue lighten-1"/>
                  <p>Prix total des ventes</p>
                  <h4><strong>{ this.getTTOrders() } €</strong></h4>
                </div>
              </div>
              <MDBCardBody>
                <div class="progress">
                  <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25"
                  class="progress-bar green darken-2" role="progressbar" style={{ width: '64%' }}></div>
                </div>
                <MDBCardText>
                  Amélioration des ventes (+64%)
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div class="col content">
            <MDBCard class="cascading-admin-card">
              <div class="admin-up">
                <div class="data text-align">
                  <MDBIcon icon="chart-pie" class="light-blue lighten-1"/>
                  <p>Nombre d'utilisateurs</p>
                  <h4><strong>{ this.props.users.length }</strong></h4>
                </div>
              </div>
              <MDBCardBody>
                <div class="progress">
                  <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25"
                  class="progress-bar green darken-2" role="progressbar" style={{ width: '75%' }}></div>
                </div>
                <MDBCardText>
                  Croissance hebdomadaire (+75%)
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </div>
        </div>
        <div class="content title ">
          <h1>Notre équipe</h1>
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
                  {this.props.users[0].name + " " + this.props.users[0].firstname}
                </Card.Title>
                <Card.Text>
                  <strong className="mb-2">Email: </strong>
                  {this.props.users[0].email}              
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
  users: state.usersReducer.users,
  products: state.productsReducer.products,
  orders: state.ordersReducer.orders
})

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(fromActions.getUsersSaga()),
  getOrders: () => dispatch(fromActions.getOrdersSaga()),
  getProducts: () => dispatch(fromActions.getProductsSaga())
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);
