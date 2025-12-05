import React from 'react'
import { Bounce, Glow } from './reactbits'
import LightRays from './LightRays'

const Benefits = () => {
  const benefits = [
    {
      icon: 'fa-pound-sign',
      title: 'Affordable Pricing',
      description: 'Cost-effective solutions designed for small businesses without hidden fees or complicated contracts.'
    },
    {
      icon: 'fa-rocket',
      title: 'Quick Setup',
      description: 'Get your QR codes and online shop live in days, not weeks. Fast implementation with minimal disruption.'
    },
    {
      icon: 'fa-shield-alt',
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime guarantee. Your business stays online when you need it.'
    },
    {
      icon: 'fa-headset',
      title: '24/7 Support',
      description: 'Our support team is available 24/7 to help. Training included with every setup so you\'re never alone.'
    },
    {
      icon: 'fa-mobile-alt',
      title: 'Mobile Optimized',
      description: 'Everything we create is designed mobile-first. Perfect experiences on any device your customers use.'
    },
    {
      icon: 'fa-chart-bar',
      title: 'Data-Driven Insights',
      description: 'Understand your customers better with real-time analytics and actionable business intelligence.'
    }
  ]

  return (
    <section className="benefits-section">
      <LightRays intensity="medium" color="rgba(102, 126, 234, 0.08)" />
      <div className="container">
        <div className="section-header">
          <h2>Why Choose Culinz?</h2>
          <p>We make digital transformation simple and affordable</p>
        </div>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <Bounce key={index}>
              <Glow intensity="medium" color="#667eea">
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <i className={`fas ${benefit.icon}`}></i>
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </Glow>
            </Bounce>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits

