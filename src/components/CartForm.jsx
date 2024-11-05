import React, { useState } from 'react';
import Navbar from "./CartComponents/Navbar";
import Amazon from "./CartComponents/amazon";
import Cart from "./CartComponents/Cart";
import "./CartForm.css";
import Footer from './Footer';

const Cartform = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    let ispresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) ispresent = true;
    });
    if (ispresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  };

  const handlechange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount += d;
    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
    setCart([...tempArr]);
  };

  return (
    <div>
      <Navbar setShow={setShow} size={cart.length} />
      <h1 className='heading_content'>
      Explore our collection of captivating fragrances and find the perfect scent for any occasion.
      </h1>
      {show ? (
        <Amazon handleClick={handleClick} />
        ) : (
          <Cart cart={cart} setCart={setCart} handlechange={handlechange} />
        )}
        {warning && (
            <div className='Warning'>Item already added to cart</div>
        )}
      <Footer />
    </div>
  );
};

export default Cartform;