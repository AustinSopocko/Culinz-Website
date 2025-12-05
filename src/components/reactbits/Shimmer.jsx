import React from 'react'
import './Shimmer.css'

const Shimmer = ({ children, speed = '2s' }) => {
  return (
    <div className="shimmer-wrapper" style={{ '--shimmer-speed': speed }}>
      {children}
    </div>
  )
}

export default Shimmer

