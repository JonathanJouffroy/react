import React from 'react';
import NavBar from '../component/navbar.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBCardGroup, MDBContainer, MDBRow ,MDBCol, MDBCard, MDBCardBody, MDBCardText } from 'mdbreact';
import * as fromActions from '../actions';
import { connect } from 'react-redux';
import './style.css';
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
      <NavBar></NavBar>
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

