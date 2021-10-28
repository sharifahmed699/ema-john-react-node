import { useEffect, useState } from "react"

const useProducts = () =>{
    const [products,setProducts] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(response => response.json())
        .then(data => {
            setProducts(data.result)
        })
    },[])

    return [products,setProducts]
}

export default useProducts