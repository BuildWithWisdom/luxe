import React, { useState } from 'react';

export default function Header({ cartCount, onCartClick, wishlistCount, onSearchChange }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearchChange) {
      onSearchChange(searchValue);
    }
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
    if (onSearchChange) {
      onSearchChange(e.target.value);
    }
  };

  return (
    <header className="header-wrapper">
      {/* Top Announcement Bar */}
      <div className="announcement-bar">
        <span>Free delivery on orders above ₦100,000</span>
      </div>

      {/* Main Navigation & Brand Header */}
      <div className="main-header">
        {/* Hamburger Menu Toggle for Mobile */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Toggle Navigation Menu"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#shop">Shop</a>
          <a href="#new-arrivals">New Arrivals</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="brand-logo">
          LUXE
          <span className="sub-logo">Boutique</span>
        </div>

        <div className="header-actions">
          {/* Search Trigger Icon Button */}
          <button className="search-icon-btn" onClick={() => setIsSearchOpen(!isSearchOpen)} aria-label="Search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>

          {/* Account Icon */}
          <button className="account-icon" aria-label="Account">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>

          {/* Wishlist Icon */}
          <button aria-label={`Wishlist (${wishlistCount})`} style={{ position: 'relative' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            {wishlistCount > 0 && <span className="cart-badge" style={{backgroundColor: '#1A1918'}}>{wishlistCount}</span>}
          </button>

          {/* Cart Bag Icon */}
          <button onClick={onCartClick} aria-label={`Shopping Cart (${cartCount})`} style={{ position: 'relative' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </div>
      </div>

      {/* Sliding Search Bar Dropdown */}
      <div className={`search-dropdown-bar ${isSearchOpen ? 'open' : ''}`}>
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search products, collections..."
            value={searchValue}
            onChange={handleInputChange}
            aria-label="Search products"
          />
          <button type="submit" aria-label="Submit Search">
            Search
          </button>
        </form>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'open' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
        <div className="mobile-nav-drawer" onClick={(e) => e.stopPropagation()}>
          <div className="mobile-nav-header">
            <h3>Menu</h3>
            <button className="mobile-nav-close" onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div className="mobile-nav-links">
            <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            <a href="#shop" onClick={() => setIsMobileMenuOpen(false)}>Shop</a>
            <a href="#new-arrivals" onClick={() => setIsMobileMenuOpen(false)}>New Arrivals</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          </div>
        </div>
      </div>
    </header>
  );
}
