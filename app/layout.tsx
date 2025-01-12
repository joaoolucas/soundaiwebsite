import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EchoForge',
  description: 'EchoForge is elevating the art of audio. Experience the future of music creation.',
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
    title: 'EchoForge - Elevating the art of audio',
    description: 'Experience the future of music creation with EchoForge.',
    type: 'website',
    url: 'https://echoforge.com',
    images: [
      {
        url: '/icon.png',
        width: 192,
        height: 192,
        alt: 'EchoForge - Elevating the art of audio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EchoForge - Elevating the art of audio',
    description: 'Experience the future of music creation with EchoForge.',
    images: ['/icon.png'],
    creator: '@EchoForgee',
    site: '@EchoForgee',
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

