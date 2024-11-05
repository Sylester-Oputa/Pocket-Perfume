import React from 'react';
import BestProduct from "./BestProduct";

const BestSellerList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <BestProduct key={product.id} product={product} />
      ))}
    </div>
  );
};

export default BestSellerList;
