'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

export default function SonarWaves() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const controls = useAnimation()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    controls.start((i) => ({
      scale: [1, 2, 3, 4],
      opacity: [0.7, 0.5, 0.3, 0],
      transition: { 
        duration: 2, 
        repeat: Infinity,
        delay: i * 0.2,
      }
    }))
  }, [controls])

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          custom={i}
          animate={controls}
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
          }}
          className="absolute rounded-full border border-red-500 pointer-events-none"
        />
      ))}
    </div>
  )
}

