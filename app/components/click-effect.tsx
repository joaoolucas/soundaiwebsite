'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ClickEffect {
  x: number
  y: number
  id: number
}

export default function ClickEffect() {
  const [effects, setEffects] = useState<ClickEffect[]>([])

  const handleClick = useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const newEffect: ClickEffect = {
      x: event.clientX,
      y: event.clientY,
      id: Date.now(),
    }
    setEffects((prevEffects) => [...prevEffects, newEffect])

    // Remove the effect after animation completes
    setTimeout(() => {
      setEffects((prevEffects) => prevEffects.filter((effect) => effect.id !== newEffect.id))
    }, 1000)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      <div className="absolute inset-0" onMouseDown={handleClick}>
        <AnimatePresence>
          {effects.map((effect) => (
            <motion.div
              key={effect.id}
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 4, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              style={{
                position: 'absolute',
                left: effect.x,
                top: effect.y,
                width: 50,
                height: 50,
                borderRadius: '50%',
                backgroundColor: 'rgba(249, 115, 22, 0.3)',
                transform: 'translate(-50%, -50%)',
              }}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}

