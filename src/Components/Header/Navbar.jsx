/**
 * @fileOverview React component for the main navigation bar.
 * @module Navbar
 */

import React from "react";
import NavbarTop  from "./NavbarTop";
import NavbarBottom  from "./NavbarBottom";

/**
 * React component representing the main navigation bar.
 *
 * @function
 * @returns {JSX.Element} - Navbar component JSX.
 */
const Navbar = () => {
  return (
    <div style={{ position: "fixed", top: 0, width: "100%", zIndex: 100 }}>
      {/* Render the top section of the navigation bar */}
      <NavbarTop />

      {/* Render the bottom section of the navigation bar */}
      <NavbarBottom />
    </div>
  );
};

// Export the Navbar component as the default export
export default Navbar;
