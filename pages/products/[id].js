import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getProductById } from '../../api/productData';

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getProductById(id).then(setProduct);
  }, [id]);

  return (
    <>
      <h1 className="my-3">ProductDetails</h1>
      <div>
        <h3>{product.productName}</h3>
        <p>{product.productDescription}</p>
        <p>PRICE: ${product.productPrice}</p>
      </div>
    </>
  );
};

export default ProductDetails;
