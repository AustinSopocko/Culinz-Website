import React, { useState } from 'react'
import { Bounce } from './reactbits'

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: 'How long does it take to set up?',
      answer: 'Most businesses can have their QR codes and online shop live within 5-7 business days. Simple QR menu setups can be completed in as little as 48 hours.'
    },
    {
      question: 'What are your pricing plans?',
      answer: 'Our QR code packages are £29.99/month with the first month completely free. We charge a 1.9% transaction fee on payments processed through our platform. Our online shop solutions include all features with the same pricing structure. Contact us for a custom quote based on your specific requirements.'
    },
    {
      question: 'Do I need technical knowledge?',
      answer: 'Not at all! We handle all the technical setup and provide comprehensive training. Our user-friendly dashboard is designed for non-technical users, and our support team is always available to help.'
    },
    {
      question: 'Can I customize the design?',
      answer: 'Absolutely! We work with your existing branding, logos, and color schemes to create a seamless experience that matches your business identity. Full customization options are available.'
    },
    {
      question: 'What payment methods do you support?',
      answer: 'We integrate with major UK payment providers including Stripe, Square, and PayPal. We also support popular restaurant-specific payment systems. All transactions are secure and PCI compliant.'
    },
    {
      question: 'Do you integrate with EPOS systems?',
      answer: 'Yes! We integrate with a wide range of popular EPOS systems including Square, Clover, Lightspeed, TouchBistro, and many others. This allows seamless synchronization of orders, inventory, and sales data between your online shop and your in-store system.'
    },
    {
      question: 'Is there a contract or minimum term?',
      answer: 'No long-term contracts required. Our monthly plans operate on a month-to-month basis, giving you the flexibility to cancel at any time. We also offer annual plans with discounted rates.'
    }
  ]

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about our services</p>
        </div>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <Bounce key={index}>
              <div className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                  <h3>{faq.question}</h3>
                  <i className="fas fa-chevron-down"></i>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </Bounce>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

