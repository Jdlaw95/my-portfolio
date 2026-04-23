import type { Metadata } from 'next'
import { Instrument_Serif, DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'
import Cursor from '@/components/Cursor'
import Loader from '@/components/Loader'
import ScrollRevealProvider from '@/components/ScrollRevealProvider'

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-serif',
})

const dmSans = DM_Sans({
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-sans',
})

const dmMono = DM_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Jason Lawrence — Builder',
  description:
    'Founder of KaiBlu — a Cape Town studio building mobile apps, AI-powered automation, and web platforms for small businesses and consumers.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSerif.variable} ${dmSans.variable} ${dmMono.variable}`}
      >
        <Cursor />
        <Loader />
        <ScrollRevealProvider />
        {children}
      </body>
    </html>
  )
}
