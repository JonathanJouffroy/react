import React from 'react';
import NavBar from '../component/navbar.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBCardGroup,MDBContainer, MDBRow ,MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText,MDBTable, MDBTableBody,MDBTableHead } from 'mdbreact';
import { connect } from 'react-redux';
import * as fromActions from '../actions';
import './style.css'


class Products extends React.Component {


state = {
   
  }

  componentDidMount = async () =>{
    console.log('component did mount')
    await this.props.getProducts()
  }

  render() {

    return (
        <div>
            <NavBar></NavBar>
            <h1  className="cardTexte text-center">Liste des produits</h1>
         
    <MDBRow>
        <MDBCol>
            <MDBContainer>
                <MDBCard>
            <MDBTable>
                    <MDBTableHead color="primary-color" textWhite>
                        <tr>
                        <th>#</th>
                        <th>Nom</th>
                        <th>Prix</th>
                        <th>Description</th>
                        <th>Quantité</th>
                        </tr>
                    </MDBTableHead>
                {this.props.products.map((e,i) =>
                     <MDBTableBody>
                     <tr>
                        <td>{i}</td>
                        <td>{e.name}</td>
                        <td>{e.price + "€"} </td>
                        <td>{e.description}</td>
                        <td>{e.quantity}</td>
                     </tr>
                 </MDBTableBody>
                
                )}
                   
                   
                    </MDBTable>
                </MDBCard>
            </MDBContainer>
        </MDBCol>
    </MDBRow>
    
        </div>
    );
    }
}
const mapStateToProps = (state) => ({
    products: state.productsReducer.products
  })
  
  const mapDispatchToProps = dispatch => ({
    getProducts: () => dispatch(fromActions.getProductsSaga()),
  })
export default connect(mapStateToProps, mapDispatchToProps)(Products);

