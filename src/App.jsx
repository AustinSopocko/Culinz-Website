import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Benefits from './components/Benefits'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import DemoSection from './components/DemoSection'
import Contact from './components/Contact'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <Benefits />
      <Pricing />
      <Testimonials />
      <DemoSection />
      <Contact />
      <FAQ />
      <Footer />
    </>
  )
}

export default App

