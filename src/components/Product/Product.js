import React from 'react';
import Feature from '../Feature/Feature';
import './Product.css'

const Product = (props) => {
    // console.log(props)
    const {name,img,price,seller,stock,star} = props.product
   // console.log(feature)
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
                    <button className="product-cart" onClick={()=>props.handleAddToCart(props.product)}>Add to Cart</button>
               </div>
               <div className="extra">
                    {star>1 ? <a><i className="fas fa-star ="></i></a>:<a href="#"><i className="far fa-star"></i></a>}
                    {star>2 ? <a><i className="fas fa-star"></i></a>:<a href="#"><i className="far fa-star"></i></a>}
                    {star>3 ? <a><i className="fas fa-star"></i></a>:<a href="#"><i className="far fa-star"></i></a>}
                    {star>4 ? <a><i className="fas fa-star"></i></a>:<a href="#"><i className="far fa-star"></i></a>}
                    {star>5 ? <a><i className="fas fa-star"></i></a>:<a href="#"><i className="far fa-star"></i></a>}
                 
                   <h3 className="featureHeader">features</h3> 
                   {
                     props.product.features.map(feature=> <Feature
                        key={feature.key}
                        feature= {feature}
                        ></Feature>)
                    }
                  
               </div>
               </div>
           </div>
        </div>
    );
};

export default Product;