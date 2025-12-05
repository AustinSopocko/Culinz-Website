import React from 'react'
import { Bounce, Glow } from './reactbits'

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'Consultation',
      description: 'We discuss your business needs and goals to create the perfect solution.'
    },
    {
      number: '2',
      title: 'Design & Setup',
      description: 'We create your QR codes and online shop with your branding and requirements.'
    },
    {
      number: '3',
      title: 'Launch & Support',
      description: 'We launch your digital presence and provide ongoing support and training.'
    }
  ]

  return (
    <section className="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2>How It Works</h2>
          <p>Simple steps to transform your business</p>
        </div>
        <div className="steps-container">
          {steps.map((step, index) => (
            <Bounce key={index}>
              <Glow intensity="medium" color="#667eea">
                <div className="step">
                  <div className="step-number">{step.number}</div>
                  <div className="step-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              </Glow>
            </Bounce>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

