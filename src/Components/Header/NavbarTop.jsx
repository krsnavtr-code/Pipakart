/**
 * @fileOverview React component for the top section of the main navigation bar.
 * @module NavbarTop
 */

import React from "react";
import "./NavbarTop.css";
import { Link } from "react-router-dom";

// React Bootstrap
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

// React Icon
import { BsSearch } from "react-icons/bs";

// Loading Images from Assets
import { assets } from "../ImageLoader";

/**
 * React component representing the top section of the main navigation bar.
 *
 * @function
 * @returns {JSX.Element} - NavbarTop component JSX.
 */
const NavbarTop = () => {
  return (
    <div>
      {/* Shipping Information */}
      <header className="header-top-strip py-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">Free Shipping Over $100</p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0 ">
                Hotline:
                <Link className="text-white" to="tel:+91 9084407615">
                  Call Us
                </Link>
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Header */}
      <header className="header-upper py3">
        <div className="container-xxl">
          <div className="row align-items-center">
            {/* Logo */}
            <div className="col-2">
              <h1>
                <Link to={"/"} className="text-white">
                  <img src={assets["logo"]} alt="Logo" /> <span>PipaKart</span>
                </Link>
              </h1>
            </div>

            {/* Search Bar */}
            <div className="col-5">
              <InputGroup className="">
                <Form.Control
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Text id="basic-addon2">
                  <BsSearch className="fs-6" />
                </InputGroup.Text>
              </InputGroup>
            </div>

            {/* Header Upper Links (Compare, Wishlist, Login, Cart) */}
            <div className="col-5">
              <div className="header-upper-links d-flex align-item-center justify-content-between">
                <div className="">
                  <Link
                    to={"/compare-product"}
                    className="d-flex align-items-center gap-10 text-white "
                  >
                    <img src={assets["compare"]} alt="compare" />
                    <p className="mb-0">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div className="">
                  <Link
                    to={"/wishlist"}
                    className="d-flex align-items-center gap-10 text-white "
                  >
                    <img src={assets["wishlist"]} alt="wishlist" />
                    <p className="mb-0">
                      Favourite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div className="">
                  <Link
                    to={"/login"}
                    className="d-flex align-items-center gap-10 text-white "
                  >
                    <img src={assets["user"]} alt="user" />
                    <p className="mb-0">
                      LogIn <br /> My Account
                    </p>
                  </Link>
                </div>
                <div className="cart">
                  <Link
                    to={"/cart"}
                    className="d-flex align-items-center gap-10 text-white "
                  >
                    <img src={assets["cart"]} alt="cart" />
                    <div className="d-flex flex-column">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">$ 500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

// Export the NavbarTop component as the default export
export default NavbarTop;
