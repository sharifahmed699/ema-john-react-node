import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import useCart from '../../hooks/usecart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, deleteFromDb } from '../../utilities/localStorage';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products] = useProducts()
    const [cart,setCart] = useCart(products)
    const history = useHistory()

    const handleRemove = key =>{
        const remainItem = cart.filter(item => item.key !== key)
        setCart(remainItem)
        deleteFromDb(key)
    }
    const handleOrder = ()=>{
        history.push('/placeorder')
        clearTheCart()

    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(item => <ReviewItem
                         item={item}
                         handleRemove = {handleRemove}
                         ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
               <Cart cart={cart}> 
                   <button className="review-cart" onClick={handleOrder}>Procced Order</button> 
               </Cart>
            </div>
        </div>
    );
};

export default OrderReview;