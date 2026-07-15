import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import ValueProps from './components/ValueProps';
import PromoBanner from './components/PromoBanner';
import Testimonials from './components/Testimonials';
import InstagramFeed from './components/InstagramFeed';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ProductQuickView from './components/ProductQuickView';

const PRODUCTS = [
  {
    id: 1,
    name: 'Black Satin Gown',
    price: 45000,
    image: '/assets/prod_gown.png',
    description: 'An elegant black satin evening gown featuring a deep v-neck, structured drape, and premium flowing silhouette. Perfect for formal black-tie events.'
  },
  {
    id: 2,
    name: 'Cargo Trousers',
    price: 28000,
    image: '/assets/prod_trousers.png',
    description: 'High-waisted wide-leg cargo trousers in a soft premium cotton linen blend. Completed with utility side pockets and relaxed structural design.'
  },
  {
    id: 3,
    name: 'Classic Sneakers',
    price: 38000,
    image: '/assets/cat_shoes.png',
    description: 'Minimalist tan and white leather low-top sneakers featuring a supportive cushioned insole and a premium textured finish.'
  },
  {
    id: 4,
    name: 'Leather Handbag',
    price: 95000,
    image: '/assets/prod_handbag.png',
    description: 'Premium top-handle bag structured in smooth full-grain brown leather. Elevated with gold hardware clasps, lock details, and a detachable shoulder strap.'
  },
  {
    id: 5,
    name: 'Chrono Watch',
    price: 75000,
    image: '/assets/prod_watch.png',
    description: 'A sophisticated chronograph timepiece designed with a gold metal bezel, deep black face dial, and a structured black metal link strap.'
  },
  {
    id: 6,
    name: 'Essential Hoodie',
    price: 25000,
    image: '/assets/prod_hoodie.png',
    description: 'Premium heavyweight pullover hoodie spun in organic black loopback cotton. Completed with a structured hood and clean front kangaroo pocket details.'
  },
  {
    id: 7,
    name: 'Leather Sandals',
    price: 22000,
    image: '/assets/prod_sandals.png',
    description: 'Minimalist tan strappy flat sandals featuring premium interlaced leather straps and durable rubber outsoles for summer walks.'
  },
  {
    id: 8,
    name: 'Oud Perfume',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=600&auto=format&fit=crop',
    description: 'Luxe Oud eau de parfum. A sophisticated scent featuring woody oriental accords, blended with fresh spices and warm amber. Minimalist rectangular glass bottle.'
  }
];

export default function App() {
  // Cart state persisted to localStorage
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('luxe_cart');
    return saved ? JSON.parse(saved) : [];
  });

  // Wishlist state persisted to localStorage
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('luxe_wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedQuickViewProduct, setSelectedQuickViewProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Persist states
  useEffect(() => {
    localStorage.setItem('luxe_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('luxe_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Cart actions
  const handleAddToCart = (product, size = 'M', quantity = 1) => {
    setCartItems((prevItems) => {
      const existingIdx = prevItems.findIndex(
        (item) => item.id === product.id && item.size === size
      );

      if (existingIdx > -1) {
        const updated = [...prevItems];
        updated[existingIdx].quantity += quantity;
        return updated;
      } else {
        return [
          ...prevItems,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            size,
            quantity
          }
        ];
      }
    });

    // Auto open cart drawer for feedback
    setIsCartOpen(true);
  };

  const handleUpdateCartQty = (id, size, quantity) => {
    if (quantity <= 0) {
      handleRemoveCartItem(id, size);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.size === size ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveCartItem = (id, size) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => !(item.id === id && item.size === size))
    );
  };

  // Wishlist actions
  const handleToggleWishlist = (id) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.includes(id)) {
        return prevWishlist.filter((item) => item !== id);
      } else {
        return [...prevWishlist, id];
      }
    });
  };

  // Scroll helper
  const handleScrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filter products by search query
  const filteredProducts = PRODUCTS.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Header
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        wishlistCount={wishlist.length}
        onCartClick={() => setIsCartOpen(true)}
        onSearchChange={setSearchQuery}
      />

      <Hero onShopNowClick={() => handleScrollToSection('new-arrivals')} />

      <Categories onCategoryClick={() => handleScrollToSection('new-arrivals')} />

      <FeaturedProducts
        products={filteredProducts}
        wishlist={wishlist}
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
        onProductClick={setSelectedQuickViewProduct}
      />

      <ValueProps />

      <PromoBanner onExploreClick={() => handleScrollToSection('new-arrivals')} />

      <div className="testimonials-instagram-section">
        <Testimonials />
        <InstagramFeed />
      </div>

      <Footer />

      {/* Cart Slider Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQty={handleUpdateCartQty}
        onRemoveItem={handleRemoveCartItem}
      />

      {/* Product Quick View Modal */}
      {selectedQuickViewProduct && (
        <ProductQuickView
          product={selectedQuickViewProduct}
          onClose={() => setSelectedQuickViewProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}
    </>
  );
}
