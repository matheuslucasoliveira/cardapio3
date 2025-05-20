import React from 'react';
import './Testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Ana Silva',
      text: 'Comida deliciosa e atendimento excelente! Recomendo o hambúrguer clássico.',
      rating: 5
    },
    {
      id: 2,
      name: 'Carlos Oliveira',
      text: 'A pizza margherita é simplesmente incrível. Massa fina e ingredientes frescos.',
      rating: 4
    },
    {
      id: 3,
      name: 'Mariana Costa',
      text: 'Ambiente agradável e cardápio variado. Voltarei mais vezes!',
      rating: 5
    }
  ];

  return (
    <section className="testimonials">
      <h2>O que nossos clientes dizem</h2>
      <div className="testimonials-grid">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < testimonial.rating ? 'star filled' : 'star'}>★</span>
              ))}
            </div>
            <p className="testimonial-text">"{testimonial.text}"</p>
            <p className="testimonial-author">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
