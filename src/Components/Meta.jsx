/**
 * @fileOverview React component for managing document metadata using React Helmet.
 * @module Meta
 */

import React from "react";
import { Helmet } from "react-helmet";

/**
 * React component for managing document metadata.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.title - Title to set for the document.
 * @returns {JSX.Element} - Meta component JSX.
 */
const Meta = (props) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{props.title}</title>
    </Helmet>
  );
};

// Export the Meta component as the default export
export default Meta;
