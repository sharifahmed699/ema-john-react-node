import { useEffect, useState } from "react/cjs/react.development"

const useProducts = () =>{
    const [products,setProducts] = useState([])

    useEffect(()=>{
        fetch('./products.json')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[])

    return [products]
}

export default useProducts