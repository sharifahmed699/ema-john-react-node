import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} =props
    console.log(cart)
    let total = 0;
    let shippingCost=0
    let totalQuantity = 0
    for(let item of cart){
        if(!item.quantity){
                item.quantity =1
        }
        total = total + item.price * item.quantity;
        shippingCost =shippingCost + item.shipping
        totalQuantity = totalQuantity + item.quantity
    }
   
   let totalbefore = total + shippingCost
   let tax = totalbefore * 0.10
    let totalOrder = tax + totalbefore
    return (
        <div className='sidebar'>
             <h2 className="text-center">Order Summary</h2>
                <h5 className="text-center"> Order items : {totalQuantity}</h5>
                <div className="item">
                        <p>Items :</p>
                        <p>${total.toFixed(2)}</p>
                </div>
                <div className="item">
                        <p>Shipping & Handling:</p>
                        <p>${shippingCost.toFixed(2)}</p>
                </div>
                <div className="item">
                        <p>Total before tax:</p>
                        <p>${totalbefore.toFixed(2)}</p>
                </div>
                <div className="item">
                        <p>Estimated Tax:</p>
                        <p>${tax.toFixed(2)}</p>
                </div>
                <div className="item totalSize">
                        <p>Order Total:</p>
                        <p>${totalOrder.toFixed(2)}</p>
                </div>
                {props.children}
        </div>
    );
};

export default Cart;