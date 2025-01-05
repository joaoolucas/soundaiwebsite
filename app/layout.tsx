import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KronSound',
  description: 'KronSound is revolutionizing the world of sound. Experience the future of music creation.',
  keywords: ['AI', 'music', 'artificial intelligence', 'sound generation', 'audio production', 'song'],
  icons: {
    icon: [
      {
        url: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/favicon.ico',
        sizes: 'any',
      }
    ],
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'KronSound - Revolutionizing the world of sound',
    description: 'Experience the future of music creation with KronSound.',
    type: 'website',
    url: 'https://kronsound.com',
    images: [
      {
        url: '/icon.png',
        width: 192,
        height: 192,
        alt: 'KronSound - Revolutionizing the world of sound',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KronSound - Revolutionizing the world of sound',
    description: 'Experience the future of music creation with KronSound.',
    images: ['/icon.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  )
}

