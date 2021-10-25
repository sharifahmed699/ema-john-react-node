import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/localStorage';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [carts, setCarts]=useState([])
    // console.log(products)
    // console.log(carts)

    const handleAddToCart = product =>{
        const exits = carts.find(pd => pd.key===product.key)
        let newCart =[]
        if(exits){
            const rest = carts.filter(item => item.key!==product.key)
            exits.quantity = exits.quantity + 1
            newCart=[...rest,product]
        }
        else{
            product.quantity = 1
            newCart = [...carts,product]
        }
        setCarts(newCart)
        addToDb(product.key)
    }
    useEffect(()=>{
        fetch('./products.json')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[])

    useEffect(()=>{
        if(products.length){
            const savedCart = getStoredCart()
            const storeCard = []
            for(const key in savedCart){
                const addedProduct = products.find(product => product.key === key)
                if(addedProduct){
                    const quantity = savedCart[key]
                    addedProduct.quantity = quantity
                    storeCard.push(addedProduct)
                }
            }
            setCarts(storeCard)
        }
    },[products])
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product 
                        key = {product.key}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
               <Cart cart={carts}>
                   <Link to="/review">
                   <button className="review-cart">Review Your Order</button> 
                   </Link>
               </Cart>
            </div>
        </div>
    );
};

export default Shop;