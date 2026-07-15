import React from 'react';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: 'Teniola. A',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop',
      text: '"The quality is exceptional and the delivery was super fast. Will definitely shop again!"'
    },
    {
      id: 2,
      name: 'David. O',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
      text: '"Finally found a store that understands style and comfort. 10/10 experience."'
    },
    {
      id: 3,
      name: 'Kemi. I',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop',
      text: '"I receive compliments everytime I wear something from Luxe Boutique."'
    }
  ];

  return (
    <section className="section-wrapper" id="testimonials">
      <h2 className="section-title-small">What Our Customers Say</h2>
      <div className="testimonials-grid">
        {reviews.map((review) => (
          <div key={review.id} className="testimonial-card">
            <div className="stars">
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
            <p>{review.text}</p>
            <div className="user-info">
              <img src={review.avatar} alt={review.name} />
              <h6>{review.name}</h6>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
