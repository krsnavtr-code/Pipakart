/**
 * @fileOverview React component for the main layout structure of the application.
 * @module Layout
 */

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Header/Navbar";
import Footer from "./Footer/Footer";

/**
 * React component representing the main layout structure of the application.
 *
 * @function
 * @returns {JSX.Element} - Layout component JSX.
 */
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

// Export the Layout component as the default export
export default Layout;
