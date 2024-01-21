/**
 * TermAndConditions 
 *
 * Description:
 * This component displays the terms and conditions of the application or website.
 * It includes a breadcrumb for navigation and the main content of terms and conditions.
 * @module TermAndConditions
 * @returns {JSX.Element}
 */

import React from "react";
import BreadCrump from "../Components/BreadCrump";
import Meta from "../Components/Meta";

/**
 * TermAndConditions 
 *
 * @returns {JSX.Element} - The JSX representation of the TermAndConditions .
 */
const TermAndConditions = () => {
  return (
    <div className="top-margin bg-black ">
      {/* Meta and BreadCrump components for SEO and navigation */}
      <Meta title={"Term And Conditions"} />
      <BreadCrump title="Term And Conditions" />

      {/* Main content section for the TermAndConditions component */}
      <div className="post-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              {/* Policy component or content */}
              <div className="policy">
                {/* Add your terms and conditions content here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermAndConditions;
