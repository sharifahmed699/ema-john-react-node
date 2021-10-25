import { useEffect, useState } from "react"
import {getStoredCart } from "../utilities/localStorage"

const useCart = products =>{
    const [carts, setCarts]=useState([])
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
    return [carts,setCarts]
}

export default useCart