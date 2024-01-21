/**
 * @fileOverview React component for the bottom section of the main navigation bar.
 * @module NavbarBottom
 */

import React from "react";
import "./NavbarBottom.css";
import { NavLink } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

// Importing assets
import { assets } from "../ImageLoader";

/**
 * React component representing the bottom section of the main navigation bar.
 *
 * @function
 * @returns {JSX.Element} - NavbarBottom component JSX.
 */
const NavbarBottom = () => {
  return (
    <>
      <header className="header-bottom py-1">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                {/* Dropdown for All Categories */}
                <div>
                  <Dropdown>
                    <Dropdown.Toggle
                      className="bg-transparent border-0 d-flex align-items-center"
                      variant="success"
                      id="dropdown-basic"
                    >
                      <img src={assets["menu"]} alt="" />{" "}
                      <span className="d-inline-block ">All Categories</span>
                    </Dropdown.Toggle>

                    {/* Dropdown Menu */}
                    <Dropdown.Menu>
                      <Dropdown.Item className="text-white" to="#/action-1">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item className="text-white" to="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="text-white" to="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>

                {/* Menu Links */}
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Shop</NavLink>
                    <NavLink to="/product">Store</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

// Export the NavbarBottom component as the default export
export default NavbarBottom;
