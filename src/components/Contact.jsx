import React from 'react'
import { Bounce } from './reactbits'

const Contact = () => {
  const contactItems = [
    {
      icon: 'fa-envelope',
      title: 'Email',
      content: 'john@culinz.co.uk'
    },
    {
      icon: 'fa-map-marker-alt',
      title: 'Location',
      content: 'London, United Kingdom'
    }
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>Ready to get started? Contact us today</p>
        </div>
        <div className="contact-content">
          {contactItems.map((item, index) => (
            <Bounce key={index}>
              <div className="contact-item">
                <i className={`fas ${item.icon}`}></i>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.content}</p>
                </div>
              </div>
            </Bounce>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact

