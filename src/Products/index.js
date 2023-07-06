import React, {useState, useEffect} from "react";
import './style.css'

const Products=()=>{
    const [products,setProducts]=useState([])
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        (async()=>{
            await getProducts();
        })()
    }, [])
    const getProducts=async ()=>{
        try{
            setLoading(true)
            const response =await fetch('https://dummyjson.com/products')
            const result= await response.json()
            setProducts(result.products);
            setLoading(false);
        }
        catch(error){
            console.log(error.message)
        }
    }
    if(loading){
        return <h2>Loading...</h2>
    }
return(
    
    <div className="prods">        
        {products.map(item => (
            <div key={item.id}>
                <img src={item.thumbnail} alt={item.title} className="thumbnail" />
                <h4>{item.title}</h4> 
                <button id="cart">ADD TO CART</button>
            </div>
        ))}
    </div>

)
}
export default Products