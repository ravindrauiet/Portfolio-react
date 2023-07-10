import React from 'react';

import "./PricingCardStyles.css";
import { Link } from 'react-router-dom';

const PricingCard = () => {
  return (
    <div className="card-container">
        <div className="card">
            <h3>- Basic -</h3>
            <span className="bar"></span>
            <p className="btc">$3</p>
            <p>- 3 Days -</p>
            <p>- 3 Pages -</p>
            <p>- Responsive Design -</p>
            <Link to="/contact"  className="btn"> PURCHASE NOW</Link>
        </div>
        <div className="card">
            <h3>- Premium -</h3>
            <span className="bar"></span>
            <p className="btc">$5</p>
            <p>- 2 Days -</p>
            <p>- 5 Pages -</p>
            <p>- Responsive Design -</p>
            <Link to="/contact"  className="btn"> PURCHASE NOW</Link>
        </div>
        <div className="card">
            <h3>- Business -</h3>
            <span className="bar"></span>
            <p className="btc">$10</p>
            <p>- 5 Days -</p>
            <p>- 8 Pages -</p>
            <p>- Responsive Design -</p>
            <Link to="/contact"  className="btn"> PURCHASE NOW</Link>
        </div>
    </div>
  )
}

export default PricingCard
