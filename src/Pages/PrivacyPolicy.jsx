/**
 * @fileOverview React component for the Privacy Policy page.
 * @module PrivacyPolicy
 */

import React from "react";
import BreadCrump from "../Components/BreadCrump";
import Meta from "../Components/Meta";

/**
 * React component representing the Privacy Policy page.
 *
 * @function
 * @returns {JSX.Element} - PrivacyPolicy component JSX.
 */
const PrivacyPolicy = () => {
  return (
    <div>
      {/* Set meta information for the page */}
      <Meta title={"Privacy Policy"} />

      {/* Render breadcrumb navigation */}
      <BreadCrump title="Privacy Policy" />

      <div className="post-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              {/* Privacy Policy Content */}
              <div className="policy">
                {/* Add your Privacy Policy content here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
