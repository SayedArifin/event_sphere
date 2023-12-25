import type { Metadata } from 'next'
import { Josefin_Sans } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

const josefin_sans = Josefin_Sans({ subsets: ['latin'], weight: ["400", "500", "600", "700"], variable: "--font-primary" })

export const metadata: Metadata = {
  title: 'Event Sphere',
  description: 'Event Sphere is a platform for event management',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={josefin_sans.variable}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
