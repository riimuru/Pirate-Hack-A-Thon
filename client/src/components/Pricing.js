import React from "react";
import "./styles/Pricing.css";

const Pricing = () => {
  return (
    <div className="container">
      <h1 className="priceTitle">Pirate Cloud Pricing</h1>
      <p className="priceP">
        We believe that that everything good should be free; everything great
        should be very expensive. Due that that reason we will be charging
        greatly for our services.
      </p>
      <div>
        <div className="priceCD">
          <h2>Privacy Pirate</h2>
          <h3>Price: $400/month</h3>
        </div>
        <div className="priceCD">
          <h2>Privacy Pirate</h2>
          <h3>Price: $50/click</h3>
        </div>
        <div className="priceCD">
          <h2>Pirate HR</h2>
          <h3>Price: $800/month</h3>
        </div>
        <div className="priceCD">
          <h2>Pirate Training</h2>
          <h3>Price: $600/month</h3>
        </div>
      </div>
      <div className="priceCD">
        <h2>Pirate DB</h2>
        <h3>Price: $1,000/month</h3>
      </div>
    </div>
  );
};

export default Pricing;
