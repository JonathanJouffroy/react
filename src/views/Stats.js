import React from 'react';
import NavBar from '../component/navbar.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBContainer, MDBRow , MDBCol, MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact';
import { Polar, Doughnut } from 'react-chartjs-2';
import { connect } from 'react-redux';
import * as fromActions from '../actions';


class Stats extends React.Component {

state = {
    dataPolar: {
        datasets: [
          {
            data: [this.props.products[0].price, this.props.products[1].price, this.props.products[2].price, this.props.products[3].price],
            backgroundColor: [
              "#F7464A", "#46BFBD", "#FDB45C", "#4D5360"
             
            ],
            label: "My dataset" // for legend
          }
        ],
        labels: [this.props.products[0].name, this.props.products[1].name, this.props.products[2].name, this.props.products[3].name]
      },
    dataDoughnut: {
      labels: [this.props.products[0].name, this.props.products[1].name , this.props.products[2].name, this.props.products[3].name],
      datasets: [
        {
          data: [this.props.products[0].quantity, this.props.products[1].quantity, this.props.products[2].quantity, this.props.products[3].quantity],
          backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#4D5360"],
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


  componentDidMount = async () =>{
    console.log('component did mount')
    await this.props.getProducts()
    await this.props.getUsers()
  }

  render() {

    return (
        <div>
          <NavBar></NavBar>
            <MDBRow  className="text-center">
            
                <MDBCol>
                <h3 className="mt-5">Stocks des produits</h3>
                    <MDBContainer>
                        
                        <Doughnut data={this.state.dataDoughnut} options={{ responsive: true }} />
                    </MDBContainer>
                    
                </MDBCol>
                <MDBCol>
                <h3 className="mt-5">Prix des produits</h3>
                    <MDBContainer>
                        
                        <Polar data={this.state.dataPolar} options={{ responsive: true }} />
                    </MDBContainer>
                    
                </MDBCol>
               
            </MDBRow>
            <MDBRow  className="text-center">
                <MDBCol>
                <h3 className="mt-5">Liste des utilisateurs</h3>
                    <MDBContainer>
                    <MDBTable bordered>
                    <MDBTableHead>
                            <tr>
                              <th>Id</th>
                              <th>Nom</th>
                              <th>Prénom</th>
                              <th>e-mail</th>
                            </tr>
                          </MDBTableHead>
                      {this.props.users.map((e,i) =>

                          
                         
                          <MDBTableBody>
                            <tr>
                              <td>{i}</td>
                              <td>{e.name}</td>
                              <td>{e.firstname}</td>
                              <td>{e.email}</td>
                            </tr>
                          </MDBTableBody>
                          
                      
                      
                      )}
                      </MDBTable>
                    </MDBContainer>
                        
                    </MDBCol>

            </MDBRow>
            
        </div>
    );
    }
}
const mapStateToProps = (state) => ({
  products: state.productsReducer.products,
  users : state.usersReducer.users
})

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(fromActions.getProductsSaga()),
  getUsers: () => dispatch(fromActions.getUsersSaga())
})
export default connect(mapStateToProps, mapDispatchToProps)(Stats);
