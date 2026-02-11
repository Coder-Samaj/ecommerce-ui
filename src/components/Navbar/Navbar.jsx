import "./Navbar.css";



const Navbar = () => {
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
        />
        <button className="search-btn">Search</button>
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