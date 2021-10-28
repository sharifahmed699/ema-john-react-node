import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/usecart';
import { addToDb } from '../../utilities/localStorage';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useState([])
    const [pageCount,setPageCount]  = useState(0)
    const [page,setPage] = useState(0)
    const [carts,setCarts] = useCart()
    const size =10
    
    useEffect(()=>{
        fetch(`http://localhost:5000/products?page=${page}&&size=${size}`)
        .then(response => response.json())
        .then(data => {
            setProducts(data.result)
            const count = data.count
            const pageNum = Math.ceil(count/size)
            setPageCount(pageNum)
        })
    },[page])


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
                <div className="pagination">
                    {
                        [...Array(pageCount).keys()].map(index=> <button
                            className={index===page ? 'selected':''}
                            key={index}
                            onClick={()=>setPage(index)}
                        >{index+1}</button>)
                    }
                </div>
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