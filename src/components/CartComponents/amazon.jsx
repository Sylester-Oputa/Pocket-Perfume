import React from 'react';
import list from '../data';
import Shopcart from './shopcart';

const Amazon = ({ handleClick }) => {

  return (
    <section>
      {list.map((list) => (
        <Shopcart key={list.id} handleClick={handleClick} item={list} />
      ))}
    </section>
  );
};

export default Amazon;