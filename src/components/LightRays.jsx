import React from 'react'
import './LightRays.css'

const LightRays = ({ intensity = 'medium', color = 'rgba(255, 255, 255, 0.1)' }) => {
  return (
    <div className={`light-rays light-rays-${intensity}`} style={{ '--ray-color': color }}>
      <div className="ray ray-1"></div>
      <div className="ray ray-2"></div>
      <div className="ray ray-3"></div>
      <div className="ray ray-4"></div>
      <div className="ray ray-5"></div>
      <div className="ray ray-6"></div>
      <div className="ray ray-7"></div>
      <div className="ray ray-8"></div>
    </div>
  )
}

export default LightRays

