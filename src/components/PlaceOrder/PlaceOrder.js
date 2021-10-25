import React from 'react';
import img from '../../images/success.gif'
import './PlaceOrder.css'

const PlaceOrder = () => {
    return (
        <div className="placeOrder">
           <div>
                <h2>Your Order Complete !!!</h2>
                <img src={img} alt="" />
           </div>
        </div>
    );
};

export default PlaceOrder;