import { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSearch(){
    if(search.trim()!=""){
      navigate(`/products?search=${search}`)
    }
  }

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img
          src="https://dummyimage.com/110x40/ffffff/000000&text=MyShop"
          alt="MyShop Logo"
        />
      </div>
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search More Products"
          onChange={(e)=>setSearch(e.target.value)}
        />
        <button className="search-btn" onClick={handleSearch}>Search</button>
      </div>
      <div className="rightNav">
        <div className="navItem">More</div>
        <div className="navItem cartItem">
          Cart
        </div>
        <div className="navItem">Profile</div>
      </div>

    </div>
  );
};

export default Navbar;