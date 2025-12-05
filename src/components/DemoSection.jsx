import React, { useState } from 'react'
import { ClickSpark, Bounce } from './reactbits'
import LightRays from './LightRays'

const DemoSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.businessType) {
      alert('Please fill in all required fields.')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.')
      return
    }

    setIsSubmitting(true)
    
    setTimeout(() => {
      alert('Thank you for your interest! We\'ll contact you soon to schedule your demo.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        businessType: '',
        message: ''
      })
      setIsSubmitting(false)
    }, 2000)
  }

  const benefits = [
    'Free consultation',
    'Custom solution design',
    'Free first month - £29.99/month after'
  ]

  return (
    <section id="demo" className="demo-section">
      <LightRays intensity="medium" color="rgba(102, 126, 234, 0.1)" />
      <div className="container">
        <div className="demo-content">
          <Bounce>
            <div className="demo-text">
              <h2>Ready to Transform Your Business?</h2>
              <p>See how Culinz can help your restaurant or small business thrive in the digital age. Request a free demo today.</p>
              <div className="demo-benefits">
                {benefits.map((benefit, index) => (
                  <div key={index} className="benefit">
                    <i className="fas fa-check"></i>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </Bounce>
          <div className="demo-form">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Request Your Demo</h3>
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <select
                  id="business-type"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Business Type</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="cafe">Café</option>
                  <option value="bar">Bar/Pub</option>
                  <option value="retail">Retail Store</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your business and what you'd like to achieve"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <ClickSpark sparkColor="#fbbf24" sparkCount={12}>
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Request Demo'}
                </button>
              </ClickSpark>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DemoSection

