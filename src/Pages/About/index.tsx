import React from "react";
import "../About/about.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-wrapper">
        <h1>About Me</h1>
        <h3>Driving the force of assortment</h3>
        <p>
          For over a decade now, we’ve been empowering our customers in
          discovering new tastes and experiences across countries. By putting
          together meticulous information for our customers, we enable them to
          make an informed choice
        </p>
        <h3>Who are we?</h3>
        <p>
          Launched in 2010, Our technology platform connects customers,
          restaurant partners and delivery partners, serving their multiple
          needs. Customers use our platform to search and discover restaurants,
          read and write customer generated reviews and view and upload photos,
          order food delivery, book a table and make payments while dining-out
          at restaurants. On the other hand, we provide restaurant partners with
          industry-specific marketing tools which enable them to engage and
          acquire customers to grow their business while also providing a
          reliable and efficient last mile delivery service. We also operate a
          one-stop procurement solution, Hyperpure, which supplies high quality
          ingredients and kitchen products to restaurant partners. We also
          provide our delivery partners with transparent and flexible earning
          opportunities.
        </p>
      </div>
    </div>
  );
};

export default React.memo(About);
