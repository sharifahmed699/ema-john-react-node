import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useProducts from '../../hooks/useProducts';
import SearchResult from '../SearchResult/SearchResult';
import './Header.css'

const Header = () => {
    const [products] =useProducts()
    const {user,logOut} = useAuth()
    const [match,setMatch] = useState([])
    const handleSerach = e =>{
        const searchText = e.target.value
        const matchProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        setMatch(matchProduct);
    }
    const handleSearch = ()=>{
        setMatch([])
    }
   
    return (
       <div>
            <div className="header">
            <Link to="/"> <h3>Ema-John</h3></Link>
           
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order</Link>
                <Link to="/inventory">Inventory</Link>
            </nav>
            <div className="search-container">
                <input type="text" onChange={handleSerach} name="" id="" placeholder="Search"/>
            </div>
           <div>
                user?.email && <span className="username">Hello, {user.displayName}</span>
                {
                    user.email ? <span onClick={logOut} className="logout">LogOut</span>
                    :
                    <Link to="/login" className="login">Login</Link>
                }
           </div>
               
        </div>
        <div className="shop-container">
            <div className="product-container">
                {
                    match?.map(product => <SearchResult 
                        key = {product.key}
                        product={product}
                        handleSearch={handleSearch}
                        ></SearchResult>)
                }
            </div>
        </div>
       </div>
    );
};

export default Header;