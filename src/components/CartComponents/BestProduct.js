import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  const { title, price, img } = product;

  return (
    <div className="product">
      <img src={img} alt={title} className="product-image" />
      <h2>{title}</h2>
      <div className="price">
         <span>₦{price}</span>
      </div>
      <Link to="/shop"><button>Add to Cart</button></Link>
    </div>
  );
};

export default Product;
