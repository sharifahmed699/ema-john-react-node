import { useEffect, useState } from "react"
import {getStoredCart } from "../utilities/localStorage"

const useCart = ()=>{
    const [carts, setCarts]=useState([])
    useEffect(()=>{
        const savedCart = getStoredCart()
        const keys = Object.keys(savedCart)
        fetch('http://localhost:5000/products/keys',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(keys)
        })
        .then(res=>res.json())
        .then(products=>{
            if(products.length){ 
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

        })
        
    },[])
    return [carts,setCarts]
}

export default useCart