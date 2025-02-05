'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Clipboard, Check, Twitter } from 'lucide-react'

export default function SocialLinks() {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('CA: soon').then(() => {
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    })
  }

  return (
    <div className="flex flex-col items-center -mt-2 z-30 relative w-full">
      <div className="flex items-center justify-center mb-2 w-full">
        <span className="text-white text-lg mr-2">CA :</span>
        <motion.div
          className="text-orange-500 cursor-pointer select-all text-lg font-semibold flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCopy}
          title="Click to copy"
        >
          <span className="truncate">soon</span>
          <motion.div
            className="ml-2 flex-shrink-0"
            initial={false}
            animate={{ scale: isCopied ? 0.8 : 1 }}
            transition={{ duration: 0.2 }}
          >
            {isCopied ? (
              <Check className="text-orange-500 w-3.5 h-3.5" />
            ) : (
              <Clipboard className="text-orange-500 w-3.5 h-3.5" />
            )}
          </motion.div>
        </motion.div>
      </div>
      <motion.a
        href="https://x.com/EchoForgee"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-orange-500 transition-colors flex items-center gap-1 mt-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Twitter className="w-6 h-6" />
      </motion.a>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-white/50 text-sm mt-4 animate-pulse"
      >
        Click anywhere to play piano notes
      </motion.p>
    </div>
  )
}

