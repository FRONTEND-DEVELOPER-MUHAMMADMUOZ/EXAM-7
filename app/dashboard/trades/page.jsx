"use client";
import React, { useEffect } from "react";
import { useState } from "react";

const Trades = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=6")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div>
      <h1>Trades</h1>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
        {loading ? (
          <h1 className="loading">Loading...</h1>
        ) : (
          products.map((product) => (
            <div className="product__card" key={product.id}>
              <h2>{product.title}</h2>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Trades;
