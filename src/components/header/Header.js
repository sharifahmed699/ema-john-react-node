import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import Product from '../Product/Product';
import './Header.css'

const Header = () => {
    const [products, setProducts] =useState([])
    const [matchProduct, setMatchProducts] = useState([])
    useEffect(()=>{
        fetch('./products.json')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[])
    const handleSerach = e =>{
        const searchText = e.target.value
        const matchProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        setMatchProducts(matchProduct);
    }
    return (
       <div>
            <div className="header">
            <Link to="/"> <h3>E-Online</h3></Link>
           
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
        
            </nav>
            <div className="search-container">
                <input type="text" onChange={handleSerach} name="" id="" placeholder="Search"/>
            </div>
        </div>
         {
            matchProduct.map(product => <Product 
                key = {product.key}
                product={product}
                ></Product>)
        }
       </div>
    );
};

export default Header;