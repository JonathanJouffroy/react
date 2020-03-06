import React from 'react';
import NavBar from '../component/navbar.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBCardGroup,MDBContainer, MDBRow ,MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';
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
            <MDBRow >
              <MDBCol>
                <MDBContainer>
                <MDBCardGroup deck >
                    {this.props.products.map((e,i) =>
                    
                        <MDBCard>
                            <MDBCardBody >
                                <MDBCardTitle tag="h5">{e.name}</MDBCardTitle>
                                    <MDBCardText>
                                        {e.description}
                                    </MDBCardText>
                                    <MDBCardText>
                                        {"Prix : " + e.price + " €"} 
                                    </MDBCardText>
                                    <MDBCardText>
                                        {"Quantité : " + e.quantity}
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
    products: state.productsReducer.products
  })
  
  const mapDispatchToProps = dispatch => ({
    getProducts: () => dispatch(fromActions.getProductsSaga()),
  })
export default connect(mapStateToProps, mapDispatchToProps)(Products);

