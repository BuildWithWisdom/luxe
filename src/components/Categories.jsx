import React from 'react';

export default function Categories({ onCategoryClick }) {
  const categories = [
    {
      id: 'women',
      title: "Women's Fashion",
      image: '/assets/cat_women.png',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 3h12l3 6-9 12-9-12z"></path>
          <path d="M12 3v18"></path>
          <path d="M3 9h18"></path>
        </svg>
      )
    },
    {
      id: 'men',
      title: "Men's Fashion",
      image: '/assets/cat_men.png',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.38 4.38L16 8.75l-4-4-4 4-4.38-4.38a2 2 0 0 0-2.83 0v11.24a2 2 0 0 0 2 2h18.42a2 2 0 0 0 2-2V4.38a2 2 0 0 0-2.83 0z"></path>
          <line x1="12" y1="8.75" x2="12" y2="19.62"></line>
        </svg>
      )
    },
    {
      id: 'shoes',
      title: 'Shoes',
      image: '/assets/cat_shoes.png',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 18h18c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5H3c-.83 0-1.5.67-1.5 1.5S2.17 18 3 18z"></path>
          <path d="M12 15V8a4 4 0 0 1 8 0v7"></path>
          <path d="M4 15V6a2 2 0 0 1 2-2h4v11"></path>
        </svg>
      )
    },
    {
      id: 'accessories',
      title: 'Accessories',
      image: '/assets/cat_accessories.png',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
      )
    }
  ];

  return (
    <section className="section-wrapper" id="categories">
      <h2 className="section-title-small">Shop By Category</h2>
      <div className="categories-grid">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="category-card"
            onClick={() => onCategoryClick(cat.id)}
          >
            <img src={cat.image} alt={cat.title} />
            <div className="overlay">
              <div className="overlay-icon">{cat.icon}</div>
              <h3>{cat.title}</h3>
              <span className="shop-now-link">
                Shop Now &rarr;
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
