import React, { useState, useEffect, useRef } from "react";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./styles/Navbar.css";
import { NavLink } from "react-router-dom";
import CartModal from "./pages/Cart";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);;
  
  // CART FUNCTIONALITY 
  const [isCartOpen, setCartOpen] = useState(false);
  const openCart = () => setCartOpen(true);
  const closeCart = () => setCartOpen(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
    <nav className=" shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/img/Logo mockup.png"
            alt="Logo"
            className="h-14 w-30 mr-2 object-contain"
          />
        </div>

        {/* Hamburger Icon */}
        <div
          className="lg:hidden cursor-pointer text-gray-800"
          onClick={toggleMenu}
        >
          {isOpen ? <CloseIcon className="z-1000" /> : <MenuIcon />}
        </div>

        {/* Links */}
        <ul
          id="hamburgerList"
          ref={menuRef}
          className={`lg:flex lg:items-center lg:space-x-6 absolute lg:static lg:bg-transparent w-full left-0 lg:w-auto z-10 transition-transform transform ${isOpen ? "translate-y-10" : "-translate-y-full"
            } lg:translate-y-0 -z-10`}
        >
          <li className="ml-4 mb-2 lg:m-0 cursor-pointer">
            <NavLink
              onClick={handleCloseMenu}
              to="/"
              className={({ isActive }) => `${isActive ? "active-link" : ""} flex items-center text-gray-800 hover:text-red-700 transition-colors`}            >
              <HomeOutlinedIcon className="mr-2" /> Home
            </NavLink>
          </li>
          <li className="ml-4 mb-2 lg:m-0 cursor-pointer">
            <NavLink
              onClick={handleCloseMenu}
              to="/about"
              className={({ isActive }) => `${isActive ? "active-link" : ""} flex items-center text-gray-800 hover:text-red-700 transition-colors`}
            >
              <InfoOutlinedIcon className="mr-2" /> About
            </NavLink>
          </li>
          <li className="ml-4 mb-2 lg:m-0 cursor-pointer">
            <NavLink
              onClick={handleCloseMenu}
              to="/shop"
              className={({ isActive }) => `${isActive ? "active-link" : ""} flex items-center text-gray-800 hover:text-red-700 transition-colors`}
            >
              <StorefrontIcon className="mr-2" /> Shop
            </NavLink>
          </li>
          <li className="ml-4 mb-2 lg:m-0 cursor-pointer">
            <NavLink
              onClick={handleCloseMenu}
              to="/contact"
              className={({ isActive }) => `${isActive ? "active-link" : ""} flex items-center text-gray-800 hover:text-red-700 transition-colors`}
            >
              <ContactPhoneOutlinedIcon className="mr-2" /> Contact
            </NavLink>
          </li>
          <li className="ml-4 mb-2 lg:m-0 cursor-pointer">
            <NavLink
              onClick={(e) => {
                e.preventDefault(); // Prevent navigation
                setCartOpen(true); // Open the cart panel
                handleCloseMenu();
              }}
              to="/cart"
              className="flex items-center text-gray-800 hover:text-red-700 transition-colors"
            >
              <ShoppingCartOutlinedIcon className="mr-2" />
              Shopping Cart
            </NavLink>
          </li>
        </ul>
      </div>

    </nav>
      {/* Cart Modal */}
      <CartModal open={isCartOpen} setOpen={setCartOpen} />
  </>
  );
}
