import React, { useState, useEffect } from 'react';

export default function ProductQuickView({
  product,
  onClose,
  onAddToCart
}) {
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);

  // Reset defaults when product changes
  useEffect(() => {
    setSelectedSize('M');
    setQuantity(1);
  }, [product]);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, selectedSize, quantity);
    onClose();
  };

  return (
    <div className="modal-overlay open" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Product Image Pane */}
        <div className="modal-image-pane">
          <img src={product.image} alt={product.name} />
        </div>

        {/* Product Details Pane */}
        <div className="modal-details-pane">
          <span className="brand">Luxe Boutique</span>
          <h3>{product.name}</h3>

          <div className="rating">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                style={{ width: '14px', height: '14px', marginRight: '2px', color: '#B8956C' }}
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            ))}
          </div>

          <div className="price">₦{product.price.toLocaleString()}</div>

          <p className="description">
            {product.description || "Indulge in premium fashion designed for timeless elegance. Made with high-quality, durable materials designed to offer maximum style, fit, and everyday luxury comfort."}
          </p>

          {/* Size Selector */}
          <div className="modal-section">
            <label>Size</label>
            <div className="size-selector">
              {['S', 'M', 'L', 'XL'].map((size) => (
                <button
                  key={size}
                  className={selectedSize === size ? 'active' : ''}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Actions: Qty Selector + Add Button */}
          <div className="modal-section" style={{ marginTop: '10px' }}>
            <label>Quantity</label>
            <div className="modal-actions-row">
              <div className="qty-selector">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <button className="btn btn-add" onClick={handleAdd}>
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
