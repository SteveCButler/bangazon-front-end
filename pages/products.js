import React, { useState, useEffect } from 'react';
import getAllProducts from '../api/productData';
import MemberCard from '../components/ProductCard';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then((data) => setProducts(data));
  }, []);

  const refreshProducts = () => {
    getAllProducts();
  };

  console.warn('Products: ', products);

  return (
    <>
      <h1 className="mt-3 mb-3">Products</h1>
      <div className="d-flex gap-3">
        {products.map((product) => <MemberCard obj={product} refreshProducts={refreshProducts} />)}
      </div>
    </>
  );
};

export default Products;
