import type { Metadata } from 'next'
import { Fraunces, Barlow } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav/Nav'
import { cn } from '@/lib/utils'
import Footer from '@/components/Footer'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['900'],
})
const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-barlow',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={cn(fraunces.variable, barlow.variable, 'bg-cream')}>
        <Nav />

        {children}
        <Footer />
      </body>
    </html>
  )
}
