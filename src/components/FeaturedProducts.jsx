import React from 'react';

export default function FeaturedProducts({
  products,
  wishlist,
  onToggleWishlist,
  onAddToCart,
  onProductClick
}) {
  return (
    <section className="section-wrapper" id="new-arrivals">
      <div className="featured-header">
        <h2 className="section-title-small" style={{ marginBottom: 0 }}>
          Featured Collection
        </h2>
        <a href="#shop">View All &rarr;</a>
      </div>

      <div className="products-grid">
        {products.map((product) => {
          const isWishlisted = wishlist.includes(product.id);
          return (
            <div key={product.id} className="product-card">
              <div className="image-container">
                <img
                  src={product.image}
                  alt={product.name}
                  onClick={() => onProductClick(product)}
                  style={{ cursor: 'pointer' }}
                />
                <button
                  className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
                  onClick={() => onToggleWishlist(product.id)}
                  aria-label="Add to wishlist"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill={isWishlisted ? 'currentColor' : 'none'}
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </button>
              </div>

              <div className="product-info" onClick={() => onProductClick(product)} style={{ cursor: 'pointer' }}>
                <h4>{product.name}</h4>
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
                <div className="price">₦{product.price.toLocaleString()}</div>
              </div>

              <button
                className="add-to-cart-btn"
                onClick={() => onAddToCart(product, 'M')}
              >
                Add To Cart
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
