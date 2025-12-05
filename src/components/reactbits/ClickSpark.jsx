import React, { useState, useRef } from 'react'
import './ClickSpark.css'

const ClickSpark = ({ children, sparkColor = '#fbbf24', sparkCount = 12 }) => {
  const [sparks, setSparks] = useState([])
  const containerRef = useRef(null)

  const handleClick = (e) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const newSparks = Array.from({ length: sparkCount }, (_, i) => {
      const angle = (360 / sparkCount) * i
      const distance = 60
      const radians = (angle * Math.PI) / 180
      const endX = Math.cos(radians) * distance
      const endY = Math.sin(radians) * distance

      return {
        id: Date.now() + i,
        startX: centerX,
        startY: centerY,
        endX,
        endY,
        color: sparkColor
      }
    })

    setSparks(newSparks)

    setTimeout(() => {
      setSparks([])
    }, 600)
  }

  return (
    <div
      ref={containerRef}
      className="click-spark-container"
      onClick={handleClick}
      style={{ display: 'inline-block' }}
    >
      {children}
      {sparks.map((spark) => (
        <div
          key={spark.id}
          className="spark"
          style={{
            left: `${spark.startX}px`,
            top: `${spark.startY}px`,
            '--spark-color': spark.color,
            '--spark-end-x': `${spark.endX}px`,
            '--spark-end-y': `${spark.endY}px`
          }}
        />
      ))}
    </div>
  )
}

export default ClickSpark

