'use client'

import { useCallback } from 'react'
import Particles from 'react-particles'
import type { Engine, ISourceOptions } from 'tsparticles-engine'
import { loadSlim } from 'tsparticles-slim'

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const options: ISourceOptions = {
    background: {
      color: {
        value: '#000',
      },
    },
    fpsLimit: 120,
    particles: {
      color: {
        value: '#EF4444', // Changed to red
      },
      move: {
        enable: true,
        direction: 'none',
        outModes: {
          default: 'out',
        },
        random: true,
        speed: 0.5,
        straight: false,
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200,
        },
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 200,
      },
      opacity: {
        value: 0.8,
        animation: {
          enable: true,
          speed: 0.2,
          minimumValue: 0.1,
        },
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 2, max: 6 },
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.5,
        },
      },
    },
    detectRetina: true,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'grab',
        },
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 1,
          },
        },
      },
    },
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
      className="absolute inset-0"
    />
  )
}

