import React from 'react'
import './Bounce.css'

const Bounce = ({ children, className = '' }) => {
  return (
    <div className={`bounce-wrapper ${className}`}>
      {children}
    </div>
  )
}

export default Bounce

