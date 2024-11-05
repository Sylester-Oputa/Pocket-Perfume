import React from 'react';
import LocalMallIcon from "@mui/icons-material/LocalMall";
import '../Styles/navbar.css';

const Navbar = ({ setShow, size }) => {
  return (
    <nav>
      <div className='nav_box'>
         <span className='my_shop' onClick={() => setShow(true)}>
            My shop
         </span>
         <div className='cart' onClick={() => setShow(false)}>
            <span>
            <LocalMallIcon />
            </span>
            <span>{size}</span>
         </div>
      </div>
    </nav>
  )
}

export default Navbar