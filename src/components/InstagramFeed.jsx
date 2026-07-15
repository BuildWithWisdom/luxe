import React from 'react';

export default function InstagramFeed() {
  const images = [
    'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=250&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=250&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=250&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=250&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=250&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=250&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=250&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=250&auto=format&fit=crop'
  ];

  return (
    <section className="section-wrapper" id="instagram" style={{ paddingBottom: '30px' }}>
      <div className="instagram-header">
        <h4>Follow Our Style</h4>
        <p>@luxeboutique.ng</p>
      </div>

      <div className="instagram-grid">
        {images.map((img, index) => (
          <div key={index} className="instagram-item">
            <img src={img} alt={`Luxe style inspiration ${index + 1}`} />
            <div className="insta-overlay">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
