import React, { useState, useEffect } from 'react';
import { getProductGroupedByCategory } from '../api/productData';
import ProductCategoryList from '../components/ProductCategoryList';

const ProductsByCategory = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductGroupedByCategory().then((data) => setProducts(data));
  }, []);

  console.warn('PROD: ', products);
  return (
    <>
      <h1 className="py-3">Products By Category</h1>
      {products.map((product) => (
        <ProductCategoryList key={product.id} product={product} />
      ))}

    </>
  );
};

export default ProductsByCategory;
