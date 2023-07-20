import React, {useState, useEffect} from "react";
import './style.css'
import { Link } from "react-router-dom";

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
         <button type="submit" className="btn-add">Add Product</button > 
        {products.map(item => (
            <div key={item.id}>
                <Link to={`/details ${item.id}`}>
                <img src={item.thumbnail} alt={item.title} className="thumbnail" />
                    </Link>
                <h4>{item.title}</h4> 
                <Link to={`/ProductDetails/${item.id}` }className="btn"><button type="submit" className="btn-see">See More</button ></Link>
            </div>
        ))}
    </div>

)
}
export default Products