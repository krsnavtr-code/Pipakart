/**
 * @fileOverview React component for the Forgot Password page, allowing users to reset their password.
 * @module ForgotPassword
 */

import React from "react";
import BreadCrump from "../Components/BreadCrump";
import Meta from "../Components/Meta";
import { Link } from "react-router-dom";

/**
 * React component representing the Forgot Password page.
 *
 * @function
 * @returns {JSX.Element} - ForgotPassword component JSX.
 */
const ForgotPassword = () => {
  return (
    <div>
      {/* Set meta information for the page */}
      <Meta title={"Forgot Password"} />

      {/* Render breadcrumb navigation */}
      <BreadCrump title="Forgot Password" />

      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Reset Your Password</h3>
                <p className="text-center mb-3">
                  We will send you an email to reset your password
                </p>
                {/* Forgot Password Form */}
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    {/* Email Input Field */}
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                    />
                  </div>
                  <div>
                    {/* Submit Button and Cancel Link */}
                    <div className="d-flex justify-content-center flex-column  gap-15 align-items-center mt-3">
                      <button className="button border-0" type="submit">
                        Submit
                      </button>
                      <Link to={"/login"} className="text-dark">
                        Cancel
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
