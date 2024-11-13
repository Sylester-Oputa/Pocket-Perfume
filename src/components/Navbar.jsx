import React, { useState } from "react";
import { Link } from "react-router-dom";
import Imgrefresher from "./images/perfume1.png";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import LoginIcon from '@mui/icons-material/Login';
import LocalMallIcon from "@mui/icons-material/LocalMall";
import list from "./data.js"; // Update with the correct path
import Header from "./Header";

const Navbar = () => {
   const [menu, setMenu] = useState(false);
   const [searchQuery, setSearchQuery] = useState("");
   const [filteredResults, setFilteredResults] = useState([]);

   const toggleMenu = () => {
      setMenu(!menu);
   };

   const handleSearch = (e) => {
      const query = e.target.value;
      setSearchQuery(query);

      // Filter the products based on the search query
      const results = list.filter((item) =>
         item.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredResults(results);
   };

   return (
      <>
        <Header />
        <div>
          <div className="navbar_div">
            <div>
               <Link to="/"><img src={Imgrefresher} className="heading_logo" alt="" /></Link>
            </div>

            <div role="navigation" className="Nav_links">
                <Link to="/" className="link">HOME</Link>
                <Link to="/about" className="link">ABOUT</Link>
                <Link to="/shop" className="link">SHOP</Link>
                <Link className='link' to="/service">SERVICES</Link>
                <Link to="/contact" className="link">CONTACTS</Link>
              </div>

              <div className="bad_search">
                <input
                  type="text"
                  placeholder="Search here"
                  value={searchQuery}
                  onChange={handleSearch}
                />
                <SearchIcon className="Search_icon_input" />
                <Link to="/shop" className="link"><LocalMallIcon className="bag_icon" /></Link>
              </div>

                <Link to="/login" className="link"><LoginIcon className="login_icon"/></Link>
                <Link to="/signup" className="link"><PersonAddAltIcon className="person_add"/></Link>
                <div className="menu_icon_wrapper">
                  <div onClick={toggleMenu} className="menu_icon">
                  {menu ? <CloseIcon /> : <MenuIcon />}
                  </div>
                </div>

              <div className={menu ? "sidebar2" : "sidebar1"}>
                <Link to="/" className="sidebar_link">HOME</Link>
                <Link to="/about" className="sidebar_link">ABOUT</Link>
                <Link to="/shop" className="sidebar_link">SHOP</Link>
                <Link className='sidebar_link' to="/service">SERVICES</Link>
                <Link to="/contact" className="sidebar_link">CONTACTS</Link>
              </div>
            </div>

            {/* Render search results */}
            {searchQuery && (
              <div className="search-results">
                {filteredResults.length > 0 ? (
                  filteredResults.map((item) => (
                    <Link to={`/shop`} key={item.id} className="search-result-item">
                      <img src={item.img} alt={item.title} width="50" height="50" />
                      <span>{item.title}</span>
                    </Link>
                  ))
                ) : (
                  <p>No results found</p>
                )}
              </div>
            )}
          </div>
      </>
    );
  };

export default Navbar;