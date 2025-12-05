import React from 'react'
import './StarBorder.css'

const StarBorder = ({ children, color = '#60a5fa', speed = '3s' }) => {
  return (
    <div
      className="star-border-wrapper"
      style={{
        '--star-color': color,
        '--animation-speed': speed
      }}
    >
      <div className="star-border">
        <div className="star star-1">✦</div>
        <div className="star star-2">✦</div>
        <div className="star star-3">✦</div>
        <div className="star star-4">✦</div>
        <div className="star star-5">✦</div>
        <div className="star star-6">✦</div>
        <div className="star star-7">✦</div>
        <div className="star star-8">✦</div>
      </div>
      <div className="star-border-content">
        {children}
      </div>
    </div>
  )
}

export default StarBorder

