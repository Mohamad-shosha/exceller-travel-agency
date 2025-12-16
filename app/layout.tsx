// app/layout.tsx
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Excelor - Premium Travel Experiences',
  icons: {
    icon: '/screenshot.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {/* Added min-h-screen and overflow-x-hidden for mobile responsiveness */}
      <body className={`font-sans antialiased min-h-screen overflow-x-hidden`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
