import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText} from 'mdbreact';

class Order extends React.Component {

    render () 
    {
        return (
            <div>
                <MDBCard style={{ width: "22rem" }}>
                <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                    <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>
                            Some quick example text to build on the card title and make
                            up the bulk of the cards content.
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </div>
        )
    }

}

export default Order;