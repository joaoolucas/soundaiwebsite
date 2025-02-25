import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nyx Sound',
  description: 'Nyx Sound is empowering the future of audio technology. Experience the future of music creation.',
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
    title: 'Nyx Sound - Empowering the future of audio technology',
    description: 'Experience the future of music creation with Nyx Sound.',
    type: 'website',
    url: 'https://nyxsound.com',
    images: [
      {
        url: '/icon.png',
        width: 192,
        height: 192,
        alt: 'Nyx Sound - Empowering the future of audio technology',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nyx Sound - Empowering the future of audio technology',
    description: 'Experience the future of music creation with Nyx Sound.',
    images: ['/icon.png'],
    creator: '@SoundNyx',
    site: '@SoundNyx',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-background text-foreground">{children}</body>
    </html>
  )
}

