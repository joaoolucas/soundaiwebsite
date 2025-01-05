'use client'

import { useState, useEffect, useCallback } from 'react'

interface Note {
  name: string;
  frequency: number;
}

const NOTES: Note[] = [
  { name: 'C', frequency: 261.63 },
  { name: 'D', frequency: 293.66 },
  { name: 'E', frequency: 329.63 },
  { name: 'F', frequency: 349.23 },
  { name: 'G', frequency: 392.00 },
  { name: 'A', frequency: 440.00 },
  { name: 'B', frequency: 493.88 }
]

const PianoSound = () => {
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null)
  const [pianoSamples, setPianoSamples] = useState<{ [key: string]: AudioBuffer }>({})
  const [isAudioEnabled, setIsAudioEnabled] = useState(false)

  useEffect(() => {
    const initAudioContext = async () => {
      const context = new (window.AudioContext || (window as any).webkitAudioContext)()
      setAudioContext(context)
      setIsAudioEnabled(true)

      const samplesObj: { [key: string]: AudioBuffer } = {}

      for (const note of NOTES) {
        try {
          const response = await fetch(`/piano-samples/${note.name}4.mp3`)
          const arrayBuffer = await response.arrayBuffer()
          const audioBuffer = await context.decodeAudioData(arrayBuffer)
          samplesObj[note.name] = audioBuffer
        } catch (error) {
          console.warn(`Failed to load sample for note ${note.name}:`, error)
        }
      }

      setPianoSamples(samplesObj)
    }

    const handleInteraction = () => {
      if (!audioContext) {
        initAudioContext()
      } else {
        audioContext.resume().then(() => setIsAudioEnabled(true))
      }
    }

    window.addEventListener('click', handleInteraction)
    window.addEventListener('touchstart', handleInteraction)

    return () => {
      window.removeEventListener('click', handleInteraction)
      window.removeEventListener('touchstart', handleInteraction)
      if (audioContext) {
        audioContext.close()
      }
    }
  }, [audioContext])

  const playNote = useCallback((note: Note) => {
    if (!audioContext || !isAudioEnabled) return

    const gainNode = audioContext.createGain()
    gainNode.gain.setValueAtTime(0.7, audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.00001, audioContext.currentTime + 1.5)

    if (pianoSamples[note.name]) {
      const source = audioContext.createBufferSource()
      source.buffer = pianoSamples[note.name]
      source.connect(gainNode)
      source.start()
      source.stop(audioContext.currentTime + 1.5)
    } else {
      const oscillator = audioContext.createOscillator()
      oscillator.type = 'sine'
      oscillator.frequency.setValueAtTime(note.frequency, audioContext.currentTime)
      oscillator.connect(gainNode)
      oscillator.start()
      oscillator.stop(audioContext.currentTime + 0.5)
    }

    gainNode.connect(audioContext.destination)
  }, [audioContext, isAudioEnabled, pianoSamples])

  const handleClick = useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const x = event.clientX
    const y = event.clientY
    const width = window.innerWidth
    const height = window.innerHeight

    // Define a "safe zone" in the center of the screen
    const safeZoneWidth = 300 // Adjust as needed
    const safeZoneHeight = 200 // Adjust as needed
    const safeZoneLeft = (width - safeZoneWidth) / 2
    const safeZoneTop = (height - safeZoneHeight) / 2

    // Check if the click is outside the safe zone
    if (x < safeZoneLeft || x > safeZoneLeft + safeZoneWidth ||
        y < safeZoneTop || y > safeZoneTop + safeZoneHeight) {
      const noteIndex = Math.floor((x / width) * NOTES.length)
      playNote(NOTES[noteIndex])
    }
  }, [playNote])

  return (
    <div 
      className="absolute inset-0 z-10" 
      onMouseDown={handleClick}
      style={{ cursor: 'default' }}
    />
  )
}

export default PianoSound

