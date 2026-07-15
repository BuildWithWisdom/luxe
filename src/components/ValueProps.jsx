import React from 'react';

export default function ValueProps() {
  return (
    <div className="value-props-bar">
      <div className="value-prop-item">
        <div className="icon">
          <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <rect x="1" y="3" width="15" height="13"></rect>
            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
            <circle cx="5.5" cy="18.5" r="2.5"></circle>
            <circle cx="18.5" cy="18.5" r="2.5"></circle>
          </svg>
        </div>
        <div>
          <h5>Nationwide Delivery</h5>
          <p>Fast and reliable delivery across Nigeria.</p>
        </div>
      </div>

      <div className="value-prop-item">
        <div className="icon">
          <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            <polyline points="9 11 11 13 15 9"></polyline>
          </svg>
        </div>
        <div>
          <h5>Secure Payment</h5>
          <p>Your payments are 100% secure with us.</p>
        </div>
      </div>

      <div className="value-prop-item">
        <div className="icon">
          <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="7"></circle>
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
          </svg>
        </div>
        <div>
          <h5>Premium Quality</h5>
          <p>We don't compromise on quality and style.</p>
        </div>
      </div>
    </div>
  );
}
