import React from 'react';

export default function PromoBanner({ onExploreClick }) {
  return (
    <div className="promo-banner">
      <img
        src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop"
        alt="Luxe Boutique Fresh Arrivals Background"
        className="banner-bg"
      />
      <div className="banner-content">
        <h2>Fresh arrivals every week.</h2>
        <p>Stay ahead with our latest collections.</p>
        <button onClick={onExploreClick} className="btn btn-gold">
          Explore Collection
        </button>
      </div>
    </div>
  );
}
