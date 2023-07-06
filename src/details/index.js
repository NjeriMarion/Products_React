
import React, { useState, useEffect } from "react";
import "./style.css";
const Details = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  useEffect(() => {
    (async () => {
      await getProducts();
    })();
  }, []);
  console.log({ products });
  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();
      setProducts(result.products);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1 className="h1">Product Details</h1>
      <div className="product-grid">
        {products.map((item) => (
          <div
            key={item.id}
            className="product-item"
            onClick={() => handleProductClick(item)}
          >
            <div className="product-details">
              <h2>{item.title}</h2>
              <p>Price: {item.price}</p>
              <p>Discount: {item.discountPercentage}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Details;