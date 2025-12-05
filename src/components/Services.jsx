import React from 'react'
import { Bounce, Glow } from './reactbits'
import LightRays from './LightRays'

const Services = () => {
  const services = [
    {
      icon: 'fa-qrcode',
      title: 'QR Code Solutions',
      description: 'Custom QR codes for menus, payments, and customer engagement. Easy setup with professional design. Seamlessly integrates with your existing EPOS system.',
      features: ['Digital menus', 'Contactless payments', 'EPOS integration', 'Customer feedback', 'Loyalty programs']
    },
    {
      icon: 'fa-store',
      title: 'Online Shop Creation',
      description: 'Beautiful, mobile-friendly online stores for restaurants and small businesses with integrated ordering.',
      features: ['Mobile-optimized design', 'Online ordering system', 'Payment processing', 'EPOS system integrations', 'Inventory management']
    },
    {
      icon: 'fa-chart-line',
      title: 'Business Analytics',
      description: 'Track customer behavior, popular items, and sales performance with detailed analytics dashboard.',
      features: ['Sales tracking', 'Customer insights', 'Performance reports', 'Growth recommendations']
    }
  ]

  return (
    <section id="services" className="services">
      <LightRays intensity="medium" color="rgba(102, 126, 234, 0.08)" />
      <div className="container">
        <div className="section-header">
          <h2>What We Do</h2>
          <p>Comprehensive digital solutions for modern UK businesses</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <Bounce key={index}>
              <Glow intensity="medium" color="#667eea">
                <div className="service-card">
                  <div className="service-icon">
                    <i className={`fas ${service.icon}`}></i>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </Glow>
            </Bounce>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

