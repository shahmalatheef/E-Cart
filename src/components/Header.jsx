import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar
      fluid
      rounded
      className="bg-sky-500 px-4 sm:px-6 py-3 shadow-md"
    >
      {/* Logo */}
      <NavbarBrand as={Link} to="/">
        <div className="flex items-center gap-2">
          <img
            src="https://www.vhv.rs/dpng/d/444-4449620_blue-cart-icon-png-transparent-png.png"
            className="h-10 w-10 object-contain"
            alt="E-Cart Logo"
          />

          <span className="text-2xl font-bold text-white">
            E-Cart
          </span>
        </div>
      </NavbarBrand>

      {/* Mobile Menu Button */}
      <NavbarToggle />

      {/* Navigation */}
      <NavbarCollapse>

        {/* Wishlist */}
        <NavbarLink as={Link} to="/wishlist">
          <div className="flex items-center gap-2 text-white transition duration-200 hover:text-red-200">
            <CiHeart
              size={26}
              className="text-red-300"
            />

            <span className="font-medium">
              Wishlist
            </span>
          </div>
        </NavbarLink>

        {/* Cart */}
        <NavbarLink as={Link} to="/cart">
          <div className="flex items-center gap-2 text-white transition duration-200 hover:text-yellow-200">
            <CiShoppingCart
              size={26}
              className="text-white"
            />

            <span className="font-medium">
              Cart
            </span>
          </div>
        </NavbarLink>

      </NavbarCollapse>
    </Navbar>
  );
}

export default Header;