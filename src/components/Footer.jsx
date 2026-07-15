import React, { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSuccess(true);
      setEmail('');
      setTimeout(() => setSuccess(false), 3000);
    }
  };

  return (
    <footer className="main-footer">
      <div className="footer-top">
        {/* Info Column */}
        <div className="footer-column">
          <div className="footer-logo">
            LUXE
            <span style={{ display: 'block', fontSize: '8px', letterSpacing: '0.3em', marginTop: '2px', color: '#6B6661' }}>Boutique</span>
          </div>
          <p className="footer-desc">
            Your destination for premium fashion and timeless style.
          </p>
          <div className="footer-socials">
            <a href="https://instagram.com" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://facebook.com" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="https://tiktok.com" aria-label="TikTok">
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
            </a>
          </div>
        </div>

        {/* Shop Column */}
        <div className="footer-column">
          <h5>Shop</h5>
          <ul className="footer-links">
            <li><a href="#new-arrivals">All Products</a></li>
            <li><a href="#categories">Women</a></li>
            <li><a href="#categories">Men</a></li>
            <li><a href="#categories">Shoes</a></li>
            <li><a href="#categories">Accessories</a></li>
          </ul>
        </div>

        {/* Help Column */}
        <div className="footer-column">
          <h5>Help</h5>
          <ul className="footer-links">
            <li><a href="#faqs">FAQs</a></li>
            <li><a href="#shipping">Shipping & Delivery</a></li>
            <li><a href="#returns">Returns & Exchanges</a></li>
            <li><a href="#sizes">Size Guide</a></li>
            <li><a href="#track">Track Order</a></li>
          </ul>
        </div>

        {/* About Column */}
        <div className="footer-column">
          <h5>About</h5>
          <ul className="footer-links">
            <li><a href="#story">Our Story</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#terms">Terms & Conditions</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="footer-column">
          <h5>Contact</h5>
          <div className="contact-info">
            <span>
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              +234 801 234 5678
            </span>
            <span>
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              hello@luxeboutique.ng
            </span>
            <span>
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              123 Fashion Street, Lekki, Lagos
            </span>
          </div>
        </div>

        {/* Newsletter Column */}
        <div className="footer-newsletter">
          <h5>Stay in the Loop</h5>
          <p style={{ marginTop: '15px' }}>Get updates on new arrivals, exclusive offers and more.</p>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder={success ? 'Subscribed!' : 'Enter your email'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={success}
              aria-label="Email address for newsletter"
            />
            <button type="submit" aria-label="Subscribe">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Luxe Boutique. All rights reserved.</p>
        <div className="payment-icons">
          {/* Plain textual/stylistic representation of payment providers to match modern minimalism */}
          <span style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', marginRight: '10px' }}>VISA</span>
          <span style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', marginRight: '10px' }}>MASTERCARD</span>
          <span style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', marginRight: '10px' }}>VERVE</span>
          <span style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em' }}>APPLE PAY</span>
        </div>
      </div>
    </footer>
  );
}
