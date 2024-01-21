/**
 * @fileOverview React component for the Login page, providing user authentication.
 * @module Login
 */

import React from "react";
import BreadCrump from "../Components/BreadCrump";
import Meta from "../Components/Meta";
import { Link } from "react-router-dom";

/**
 * React component representing the Login page.
 *
 * @function
 * @returns {JSX.Element} - Login component JSX.
 */
const Login = () => {
  return (
    <div className="top-margin">
      {/* Set meta information for the page */}
      <Meta title={"Login"} />

      {/* Render breadcrumb navigation */}
      <BreadCrump title="Login" />

      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Login</h3>
                {/* Login Form */}
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
                    {/* Password Input Field */}
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form-control"
                    />
                  </div>
                  <div>
                    {/* Forgot Password Link */}
                    <Link className="text-dark" to="/forgot-password">
                      Forgot Password?
                    </Link>
                    {/* Login and Signup Buttons */}
                    <div className="d-flex justify-content-center gap-15 align-items-center mt-3">
                      <button className="button border-0" type="submit">
                        Login
                      </button>
                      <Link to="/signup" className="button signup">
                        Signup
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

export default Login;
