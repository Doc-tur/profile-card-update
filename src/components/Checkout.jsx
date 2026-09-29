import React, { useState } from "react";
import "./Checkout.css";
import { bagImage, earPod, phoneImage } from "../assets";

const products = [
  {
    id: 1,
    name: "Emiabata Mukhtar",
    price: 9875,
    image: phoneImage,
  },
  {
    id: 2,
    name: "Omolara George",
    price: 7945,
    image: earPod,
  },
  {
    id: 3,
    name: "Lawal Grace",
    price: 1000,
    image: bagImage,
  },
];

export default function Checkout() {
  const [activeStep, setActiveStep] = useState(0);

  const [formData, setFormData] = useState({
    firstName: "Emiabata",
    lastName: "Mukhtar",
    country: "United States (USD$)",
    address: "380-394 11th Ave, New York, NY 10001",
    city: "",
    state: "",
    postal: "",
    phone: "",
    billing: true,
  });

  const total = products.reduce(
    (sum, product) => sum + product.price,
    0
  );

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const nextStep = () => {
    if (activeStep < 2) {
      setActiveStep(activeStep + 1);
    }
  };

  const previousStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const formatPrice = (price) => {
    return `$ ${price.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  return (
    <div className="checkout-page">

      {/* Main Checkout Container */}
      <div className="checkout-container">

        {/* ================= SIDEBAR ================= */}
        <aside className="checkout-sidebar">

          <div className="checkout-logo">
            i8
          </div>

          <nav className="sidebar-navigation">

            <button className="sidebar-item">
              <span className="sidebar-icon">⚡</span>
              <span>Home</span>
            </button>

            <button className="sidebar-item">
              <span className="sidebar-icon">🙍</span>
              <span>Clients</span>
            </button>

            <button className="sidebar-item">
              <span className="sidebar-icon">👕</span>
              <span>Clothing</span>
            </button>

            <button className="sidebar-item">
              <span className="sidebar-icon">👞</span>
              <span>Shoes</span>
            </button>

            <button className="sidebar-item">
              <span className="sidebar-icon">👜</span>
              <span>Bags</span>
            </button>

            <button className="sidebar-item">
              <span className="sidebar-icon">👓</span>
              <span>Accessories</span>
            </button>

          </nav>
        </aside>


        {/* ================= CHECKOUT CONTENT ================= */}
        <div className="checkout-content">

          {/* ================= PROGRESS ================= */}
          <div className="checkout-progress">

            <button
              className={`progress-item ${
                activeStep === 0 ? "active" : ""
              } ${activeStep > 0 ? "completed" : ""}`}
              onClick={() => setActiveStep(0)}
            >
              <span className="progress-dot">
                {activeStep > 0 ? "✓" : ""}
              </span>

              <span className="progress-text">
                <small>Step 01</small>
                <strong>Shipping</strong>
              </span>
            </button>


            <button
              className={`progress-item ${
                activeStep === 1 ? "active" : ""
              } ${activeStep > 1 ? "completed" : ""}`}
              onClick={() => setActiveStep(1)}
            >
              <span className="progress-dot">
                {activeStep > 1 ? "✓" : ""}
              </span>

              <span className="progress-text">
                <small>Step 02</small>
                <strong>Payment</strong>
              </span>
            </button>


            <button
              className={`progress-item ${
                activeStep === 2 ? "active" : ""
              }`}
              onClick={() => setActiveStep(2)}
            >
              <span className="progress-dot"></span>

              <span className="progress-text">
                <small>Step 03</small>
                <strong>Review</strong>
              </span>
            </button>

          </div>


          {/* ================= MAIN FORM ================= */}
          <main className="checkout-main">

            {/* SHIPPING */}
            {activeStep === 0 && (
              <>
                <div className="checkout-heading">
                  <span>Step 01</span>
                  <h1>Shipping</h1>
                </div>

                <div className="shipping-form">

                  {/* First & Last Name */}
                  <div className="form-row">

                    <div className="form-group">
                      <label>First Name</label>

                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>


                    <div className="form-group">
                      <label>Last Name</label>

                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>

                  </div>


                  {/* Country */}
                  <div className="form-group full-width">
                    <label>Country / Region</label>

                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                    >
                      <option>
                        🇺🇸 United States (USD$)
                      </option>

                      <option>
                        🇳🇬 Nigeria (NGN₦)
                      </option>

                      <option>
                        🇬🇧 United Kingdom (GBP£)
                      </option>

                      <option>
                        🇨🇦 Canada (CAD$)
                      </option>
                    </select>
                  </div>


                  {/* Address */}
                  <div className="form-group full-width address-group">
                    <label>Address</label>

                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                    />

                    <button className="add-address">
                      Add another line
                    </button>
                  </div>


                  {/* City & State */}
                  <div className="form-row">

                    <div className="form-group">
                      <label>City</label>

                      <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleChange}
                      />
                    </div>


                    <div className="form-group">
                      <label>Select State</label>

                      <select
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                      >
                        <option value="">
                          Select State
                        </option>

                        <option value="NY">
                          New York
                        </option>

                        <option value="CA">
                          California
                        </option>

                        <option value="TX">
                          Texas
                        </option>

                        <option value="FL">
                          Florida
                        </option>
                      </select>
                    </div>

                  </div>


                  {/* Postal & Phone */}
                  <div className="form-row">

                    <div className="form-group">
                      <label>Postal or zip code</label>

                      <input
                        type="text"
                        name="postal"
                        placeholder="Postal or zip code"
                        value={formData.postal}
                        onChange={handleChange}
                      />
                    </div>


                    <div className="form-group">
                      <label>Phone</label>

                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                  </div>


                  {/* Billing Address */}
                  <label className="billing-address">

                    <input
                      type="checkbox"
                      name="billing"
                      checked={formData.billing}
                      onChange={handleChange}
                    />

                    <span className="custom-checkbox">
                      ✓
                    </span>

                    <span>
                      Use as billing address
                    </span>

                  </label>

                </div>
              </>
            )}


            {/* PAYMENT */}
            {activeStep === 1 && (
              <div className="checkout-step-page">

                <div className="checkout-heading">
                  <span>Step 02</span>
                  <h1>Payment</h1>
                </div>

                <div className="payment-section">

                  <div className="payment-icon">
                    💳
                  </div>

                  <h2>Payment Details</h2>

                  <p>
                    Enter your payment information to
                    continue with your order.
                  </p>

                  <div className="payment-card">

                    <div className="payment-card-top">
                      <span>Secure Payment</span>
                      <span>•••• 4242</span>
                    </div>

                    <div className="card-number">
                      4242 •••• •••• 4242
                    </div>

                    <div className="payment-card-bottom">
                      <span>
                        {formData.firstName}{" "}
                        {formData.lastName}
                      </span>

                      <span>12/28</span>
                    </div>

                  </div>

                </div>

              </div>
            )}


            {/* REVIEW */}
            {activeStep === 2 && (
              <div className="checkout-step-page">

                <div className="checkout-heading">
                  <span>Step 03</span>
                  <h1>Review</h1>
                </div>

                <div className="review-section">

                  <div className="review-icon">
                    ✓
                  </div>

                  <h2>Review Your Order</h2>

                  <p>
                    Please check your shipping information
                    before completing your order.
                  </p>

                  <div className="review-card">

                    <strong>
                      {formData.firstName}{" "}
                      {formData.lastName}
                    </strong>

                    <span>
                      {formData.address}
                    </span>

                    <span>
                      {formData.city || "New York"},{" "}
                      {formData.state || "NY"}{" "}
                      {formData.postal}
                    </span>

                    <span>
                      {formData.phone || "Phone number"}
                    </span>

                  </div>

                </div>

              </div>
            )}


            {/* MOBILE CONTINUE BUTTON */}
            <div className="mobile-button-area">

              {activeStep > 0 && (
                <button
                  className="back-button"
                  onClick={previousStep}
                >
                  BACK
                </button>
              )}

              <button
                className="mobile-continue-button"
                onClick={nextStep}
              >
                {activeStep === 2
                  ? "PLACE ORDER"
                  : "SAVE & CONTINUE"}
              </button>

            </div>

          </main>


          {/* ================= SUMMARY ================= */}
          <aside className="checkout-summary">

            <h2>Summary</h2>

            <div className="summary-products">

              {products.map((product) => (
                <div
                  className="summary-product"
                  key={product.id}
                >

                  <div className="summary-image">
                    <img
                      src={product.image}
                      alt={product.name}
                    />
                  </div>

                  <div className="summary-product-info">

                    <strong>
                      {product.name}
                    </strong>

                    <span>
                      {formatPrice(product.price)}
                    </span>

                  </div>

                </div>
              ))}

            </div>


            {/* Total */}
            <div className="summary-total">

              <span>Total</span>

              <div>
                <strong>
                  {formatPrice(total)}
                </strong>

                <small>
                  Import duties included
                </small>
              </div>

            </div>


            {/* Continue */}
            <button
              className="continue-button"
              onClick={nextStep}
            >
              {activeStep === 2
                ? "PLACE ORDER"
                : "SAVE & CONTINUE"}
            </button>

          </aside>

        </div>

      </div>

    </div>
  );
}
