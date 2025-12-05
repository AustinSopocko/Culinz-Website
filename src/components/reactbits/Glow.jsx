import React from 'react'
import './Glow.css'

const Glow = ({ children, intensity = 'medium', color = '#667eea' }) => {
  return (
    <div 
      className={`glow-wrapper glow-${intensity}`}
      style={{ '--glow-color': color }}
    >
      {children}
    </div>
  )
}

export default Glow

