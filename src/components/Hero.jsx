import React from 'react'
import { Bounce, Glow, Shimmer, Particles } from './reactbits'
import LightRays from './LightRays'

const Hero = () => {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="home" className="hero">
      <LightRays intensity="strong" color="rgba(102, 126, 234, 0.2)" />
      <Particles count={60} color="rgba(102, 126, 234, 0.4)" />
      <div className="hero-container">
        <div className="hero-content">
          <Bounce>
            <Shimmer speed="3s">
              <h1 className="hero-title">
                Transform Your Business with 
                <span className="highlight"> Smart QR Codes</span>
              </h1>
            </Shimmer>
          </Bounce>
          <p className="hero-subtitle">
            We help UK restaurants and small businesses create seamless digital experiences 
            with QR code solutions and custom online shops that boost customer engagement.
          </p>
          <div className="hero-buttons">
            <Glow intensity="strong" color="#667eea">
              <a href="#demo" className="btn btn-primary" onClick={(e) => scrollToSection(e, 'demo')}>
                Get Started Today
              </a>
            </Glow>
            <a href="#services" className="btn btn-secondary" onClick={(e) => scrollToSection(e, 'services')}>
              Learn More
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <Glow intensity="strong" color="#667eea">
            <div className="qr-showcase">
              <div className="qr-code">
                <div className="qr-pattern"></div>
                <i className="fas fa-qrcode"></i>
              </div>
            </div>
          </Glow>
        </div>
      </div>
    </section>
  )
}

export default Hero

