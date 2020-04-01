import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText} from 'mdbreact';
import image from '../images/sales.jpg';
class Order extends React.Component {

    render () 
    {
        return (
            <div>
                <MDBCard style={{ width: "22rem" }}>
                <MDBCardImage className="img-fluid" src={image} waves />
                    <MDBCardBody>
                        <MDBCardTitle>N° de commande : { this.props.nbOrder}</MDBCardTitle>
                        <MDBCardText>
                            <label>Prix de la commande : { this.props.price_order } €</label>
                            <label>Adresse de livraison : { this.props.ship_address }</label>
                            <label>Adresse de facturation : { this.props.billing_address }</label>
                        </MDBCardText>
                        <MDBCardText>

                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </div>
        )
    }

}

export default Order;