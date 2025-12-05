import React from 'react'
import { Bounce, Glow } from './reactbits'

const Testimonials = () => {
  const testimonials = [
    {
      text: '"Works perfectly with our EPOS. Orders pop in without any fuss."'
    },
    {
      text: '"Setup was quick. Customers really like the QR menu."'
    }
  ]

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>What Our Clients Say</h2>
          <p>Trusted by UK businesses across the country</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <Bounce key={index}>
              <Glow intensity="medium" color="#fbbf24">
                <div className="testimonial-card">
                  <div className="testimonial-stars">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                  <p className="testimonial-text">{testimonial.text}</p>
                </div>
              </Glow>
            </Bounce>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

