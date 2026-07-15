import React from 'react';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQty,
  onRemoveItem
}) {
  const FREE_SHIPPING_LIMIT = 100000;
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_LIMIT - subtotal);
  const progressPercent = Math.min(100, (subtotal / FREE_SHIPPING_LIMIT) * 100);

  return (
    <div className={`cart-drawer-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        {/* Cart Header */}
        <div className="cart-header">
          <h3>Shopping Cart ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})</h3>
          <button className="cart-close-btn" onClick={onClose} aria-label="Close cart">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Free Shipping Alert Bar */}
        {cartItems.length > 0 && (
          <div className="free-shipping-progress">
            {remainingForFreeShipping > 0 ? (
              <p>
                You are <strong>₦{remainingForFreeShipping.toLocaleString()}</strong> away from Free Shipping!
              </p>
            ) : (
              <p style={{ color: '#B8956C' }}>🎉 Congratulations! You qualify for Free Shipping!</p>
            )}
            <div className="progress-bar-container">
              <div
                className="progress-bar-fill"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Cart Items Scroll Area */}
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="empty-cart-view">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              <p>Your cart is currently empty.</p>
              <button className="btn btn-dark" onClick={onClose} style={{ marginTop: '10px' }}>
                Continue Shopping
              </button>
            </div>
          ) : (
            cartItems.map((item, idx) => (
              <div key={`${item.id}-${item.size}-${idx}`} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-info">
                  <h4 className="cart-item-title">{item.name}</h4>
                  <p className="cart-item-size">Size: {item.size}</p>
                  <p className="cart-item-price">₦{item.price.toLocaleString()}</p>
                  <div className="cart-item-actions">
                    <div className="qty-selector">
                      <button
                        onClick={() => onUpdateQty(item.id, item.size, item.quantity - 1)}
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQty(item.id, item.size, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="remove-item-btn"
                      onClick={() => onRemoveItem(item.id, item.size)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Cart Footer */}
        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-summary-row">
              <span>Subtotal</span>
              <span>₦{subtotal.toLocaleString()}</span>
            </div>
            <div className="cart-summary-row total">
              <span>Total</span>
              <span>₦{subtotal.toLocaleString()}</span>
            </div>
            <p className="terms">
              Shipping & taxes calculated at checkout.
            </p>
            <button className="btn btn-dark" style={{ width: '100%' }}>
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
