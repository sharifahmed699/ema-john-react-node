import React from 'react';

const ReviewItem = (props) => {
    const {name,price,quantity,key} = props.item
    const {handleRemove} = props
    return (
        <div className="product">
            <div className="product-detail">
                <h3> {name}</h3>
                <h5 className="product-price"> Price : ${price}</h5>
                <p className="product-stock">Quantity : {quantity}</p>
                <button onClick={()=>handleRemove(key)} className="product-cart" >Remove</button>
            </div>
        </div>
        
    );
};

export default ReviewItem;