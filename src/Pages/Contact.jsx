/**
 * @fileOverview React component for the Contact page, providing contact information and a contact form.
 * @module Contact
 */

import React from "react";
import BreadCrump from "../Components/BreadCrump";
import Meta from "../Components/Meta";
import { Link } from "react-router-dom";
import {
  BiSolidHome,
  BiSolidPhoneCall,
  BiMailSend,
  BiSolidInfoCircle,
} from "react-icons/bi";

/**
 * React component representing the Contact page.
 *
 * @function
 * @returns {JSX.Element} - Contact component JSX.
 */
const Contact = () => {
  return (
    <div className="mt-5 pt-5">
      <div className="pt-4">
        {/* Set meta information for the page */}
        <Meta title={"Contact"} />

        {/* Render breadcrumb navigation */}
        <BreadCrump title="Contact" />

        <div className="contact-wrapper home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                {/* Embed Google Maps */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111835.25022199265!2d78.68514975360101!3d28.84327878534429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390afbea2f5646c9%3A0xb8c97ce4e95398db!2sMoradabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1705645650429!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  className="border-0 w-100"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="map"
                ></iframe>
              </div>
              <div className="col-12 mt-5">
                <div className="contact-inner-wrapper d-flex justify-content-between">
                  {/* Contact Form */}
                  <div>
                    <h3 className="contact-title mb-2">Get in touch</h3>
                    <form action="" className="d-flex flex-column gap-15">
                      <div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Name"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Your Email"
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="Mobile Number"
                        />
                      </div>
                      <div>
                        <textarea
                          name=""
                          id=""
                          className="form-control w-100"
                          cols="30"
                          rows="4"
                          placeholder="Comments"
                        ></textarea>
                      </div>
                      <div>
                        <button className="button border-0 ">Submit</button>
                      </div>
                    </form>
                  </div>

                  {/* Contact Information */}
                  <div>
                    <h3 className="contact-title mb-2">Address...</h3>
                    <div>
                      <ul className="ps-0">
                        {/* Home Icon and Address */}
                        <li className="d-flex align-items-center mb-3 gap-15">
                          <BiSolidHome className="fs-5" />
                          <address className="mb-0">
                            Doolhapur patti chauhan moradabad uttar pradesh
                            244001
                          </address>
                        </li>
                        {/* Phone Icon and Contact Number */}
                        <li className="d-flex align-items-center mb-2 gap-15">
                          <BiSolidPhoneCall className="fs-5" />
                          <Link className=" text-info" to="tel:+91 9084407615">
                            +91 9084407615
                          </Link>
                        </li>
                        {/* Mail Icon and Email Address */}
                        <li className="d-flex align-items-center mb-2 gap-15">
                          <BiMailSend className="fs-5" />
                          <Link to="mailto:krishnaavtar955@example.com">
                            krishnaavtar955@example.com
                          </Link>
                        </li>
                        {/* Info Icon and Working Hours */}
                        <li className="d-flex align-items-center mb-3 gap-15">
                          <BiSolidInfoCircle className="fs-5" />
                          <p className="mb-0">Monday - Friday 10 AM - 8 PM</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
