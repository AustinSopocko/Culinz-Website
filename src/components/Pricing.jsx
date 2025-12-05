import React from 'react'
import { Bounce, ClickSpark, Shimmer } from './reactbits'
import LightRays from './LightRays'

const Pricing = () => {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const features = [
    'Free first month - no commitment',
    '£29.99/month after trial',
    'Only 1.9% transaction fee',
    'Cancel anytime - no contracts'
  ]

  return (
    <section className="pricing-callout">
      <LightRays intensity="strong" color="rgba(102, 126, 234, 0.12)" />
      <div className="container">
        <Bounce>
          <Shimmer speed="4s">
            <div className="pricing-card">
              <div className="pricing-content">
                <h2>Simple, Transparent Pricing</h2>
              <p>Start with a free month, then just £29.99/month + 1.9% transaction fee</p>
              <div className="pricing-features">
                {features.map((feature, index) => (
                  <div key={index} className="pricing-feature">
                    <i className="fas fa-check-circle"></i>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <ClickSpark sparkColor="#fbbf24" sparkCount={12}>
                <a href="#demo" className="btn btn-primary" onClick={(e) => scrollToSection(e, 'demo')}>
                  Start Free Trial
                </a>
              </ClickSpark>
              </div>
            </div>
          </Shimmer>
        </Bounce>
      </div>
    </section>
  )
}

export default Pricing

