import React, { useState, useEffect, useRef } from "react";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./styles/Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
          className={`lg:flex lg:items-center lg:space-x-6 absolute lg:static lg:bg-transparent w-full left-0 lg:w-auto z-10 transition-transform transform ${
            isOpen ? "translate-y-10" : "-translate-y-full"
          } lg:translate-y-0 -z-10`}
        >
          <li className="m-2 lg:m-0 cursor-pointer">
            <NavLink
              to="/"
              className={({isActive}) => `${isActive ? "active-link" : ""} flex items-center text-gray-800 hover:text-red-700 transition-colors`}            >
              <HomeIcon className="mr-2" /> Home
            </NavLink>
          </li>
          <li className="m-2 lg:m-0 cursor-pointer">
            <a
              href="#about"
              className="flex items-center text-gray-800 hover:text-red-700 transition-colors"
            >
              <InfoIcon className="mr-2" /> About
            </a>
          </li>
          <li className="m-2 lg:m-0 cursor-pointer">
            <a
              href="#categories"
              className="flex items-center text-gray-800 hover:text-red-700 transition-colors"
            >
              <ShoppingCartIcon className="mr-2" /> Shop
            </a>
          </li>
          <li className="m-2 lg:m-0 cursor-pointer">
            <NavLink
              to="/contact"
              className={({isActive}) => `${isActive ? "active-link" : ""} flex items-center text-gray-800 hover:text-red-700 transition-colors`}
            >
              <ContactMailIcon className="mr-2" /> Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
