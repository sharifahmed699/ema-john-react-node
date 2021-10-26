import React from 'react';

const SearchResult = (props) => {
    const {name,img,price,seller,stock} = props.product
    return (
        <div className="product">
        <div className="product-image">
          <img src={img} alt="" />
        </div>
       
        <div className="product-detail">
        <h5>{name.slice(0,80)}</h5>
            <div className="eachItem">
            <div>
                 <small>By: {seller}</small>
                     <p className="product-price">${price}</p>
                     <p className="product-stock"><small>only {stock} left in stock - order soon</small></p>
                     <button onClick={props.handleSearch} className="product-cart">GO Back </button>
            </div>
            </div>
        </div>
     </div>
    );
};

export default SearchResult;