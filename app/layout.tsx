import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HEMAN DJ Portfolio',
  description: 'Experience the Sound of the Future',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}