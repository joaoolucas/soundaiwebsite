'use client'

import { motion, useAnimation } from 'framer-motion'
import { useState } from 'react'

export default function Logo() {
  const [isHovered, setIsHovered] = useState(false)
  const controls = useAnimation()

  const handleHover = () => {
    setIsHovered(true)
    controls.start({
      scale: [1, 1.1, 1],
      transition: { duration: 0.3 },
    })
  }

  const handleHoverEnd = () => {
    setIsHovered(false)
  }

  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      onHoverStart={handleHover}
      onHoverEnd={handleHoverEnd}
      animate={controls}
      className="text-5xl md:text-7xl font-bold tracking-wider cursor-pointer z-10"
    >
      <span className="text-white">Kron</span>
      <motion.span
        animate={isHovered ? { rotate: [0, 5, -5, 0] } : {}}
        transition={{ duration: 0.5 }}
        className="text-red-500"
      >
        Sound
      </motion.span>
    </motion.h1>
  )
}

