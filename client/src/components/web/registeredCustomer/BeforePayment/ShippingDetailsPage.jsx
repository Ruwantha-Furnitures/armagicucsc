import React from 'react';
import Navigation from "../Navigation/UserNav";
import Footer from "../../Common/Footer";
import Form from './ShippingDetailsForm';

function CustomerCheckoutDeteails() {    

    return (
        <div>                                     
            <Navigation></Navigation>                    
            <Form></Form>            
            <Footer></Footer>    
        </div>
    );
}

export default CustomerCheckoutDeteails;
