import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Trinetra Consulting Pvt. Ltd. | Defence AI',
  description: 'Next-Gen AI Solutions for Strategic Defence & Enterprise Operations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}