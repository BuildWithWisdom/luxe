import React from 'react';

export default function Hero({ onShopNowClick }) {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <span className="hero-tagline">New Collection</span>
        <h1 className="hero-title">
          Wear<br />
          Confidence.
        </h1>
        <p className="hero-desc">
          Discover premium fashion pieces curated for everyday elegance.
        </p>
        <div className="hero-buttons">
          <button onClick={onShopNowClick} className="btn btn-dark">
            Shop Now &rarr;
          </button>
          <a href="#new-arrivals" className="btn btn-outline">
            New Arrivals
          </a>
        </div>
      </div>

      <div className="hero-image-container">
        <img
          src="/assets/hero_model.png"
          alt="Luxe Boutique Autumn Beige Blazer Collection"
          className="hero-image"
        />
        {/* Rotating Circular Gold Badge with SVG text path */}
        <div className="circular-badge">
          <svg viewBox="0 0 100 100" width="100" height="100">
            <defs>
              <path
                id="circlePath"
                d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
              />
            </defs>
            <text fill="#B8956C" fontSize="6" fontWeight="600" letterSpacing="2.5">
              <textPath href="#circlePath" startOffset="0%">
                LUXE BOUTIQUE • WEAR CONFIDENCE •
              </textPath>
            </text>
            {/* Logo initials in center */}
            <text x="50" y="55" fill="#B8956C" fontSize="16" fontWeight="700" textAnchor="middle" fontFamily="'Playfair Display', serif">
              LB
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
