import React from 'react'
import { Bounce } from './reactbits'

const Footer = () => {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <Bounce>
            <div className="footer-section">
              <h3>Culinz</h3>
              <p>Transforming UK businesses with smart QR code solutions and online shops.</p>
            </div>
          </Bounce>
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')}>QR Code Solutions</a></li>
              <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Online Shop Creation</a></li>
              <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Business Analytics</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a></li>
              <li><a href="#demo" onClick={(e) => scrollToSection(e, 'demo')}>Request Demo</a></li>
              <li><a href="#faq" onClick={(e) => scrollToSection(e, 'faq')}>FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Culinz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

