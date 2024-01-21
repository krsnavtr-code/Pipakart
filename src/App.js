// Importing styles for the application
import "./App.css";

// React
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Layout from "./Components/Layout";

// Pages
import Shop from "./Pages/Shop";
import Store from "./Pages/Store";
import Blog from "./Pages/Blog";
import SingleBlog from "./Pages/SingleBlog";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import CompareProduct from "./Pages/CompareProduct";
import Wishlist from "./Pages/Wishlist";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";
// Policy
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import RefundPolicy from "./Pages/RefundPolicy";
import ShippingPolicy from "./Pages/ShippingPolicy";
import TermAndConditions from "./Pages/TermAndConditions";
import SingleProduct from "./Pages/SingleProduct";

/**
 * The main App component serving as the entry point for the React application.
 * It sets up the BrowserRouter and defines routes for different pages.
 */
function App() {
  return (
    <>
      {/* Setting up the BrowserRouter for routing */}
      <BrowserRouter>
        <Routes>
          {/* Layout component is used as a common layout wrapper for all pages */}
          <Route path="/" element={<Layout />}>
            {/* Default route for the home page */}
            <Route index element={<Shop />} />

            {/* Routes for other pages */}
            <Route path="product" element={<Store />} />
            <Route path="product/:id" element={<SingleProduct />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="blog/:id" element={<SingleBlog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="compare-product" element={<CompareProduct />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="reset-password" element={<ResetPassword />} />
            {/* Policy Pages */}
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="refund-policy" element={<RefundPolicy />} />
            <Route path="shipping-policy" element={<ShippingPolicy />} />
            <Route path="term-conditions" element={<TermAndConditions />} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

// Exporting the App component as the default export of this module
export default App;
