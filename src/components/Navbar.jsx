import React, { useState, useEffect } from 'react'
import { Bounce } from './reactbits'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    handleLinkClick()
  }

  return (
    <nav className="navbar" style={{
      background: scrolled ? 'rgba(15, 23, 42, 0.98)' : 'rgba(15, 23, 42, 0.95)',
      boxShadow: scrolled ? '0 2px 20px rgba(0, 0, 0, 0.3)' : 'none'
    }}>
      <div className="nav-container">
        <Bounce>
          <div className="nav-logo">
            <h2>Culinz</h2>
          </div>
        </Bounce>
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-link" onClick={(e) => scrollToSection(e, 'home')}>Home</a>
          <a href="#services" className="nav-link" onClick={(e) => scrollToSection(e, 'services')}>Services</a>
          <a href="#contact" className="nav-link" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>
          <a href="#demo" className="nav-link cta-button" onClick={(e) => scrollToSection(e, 'demo')}>Request Demo</a>
        </div>
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

