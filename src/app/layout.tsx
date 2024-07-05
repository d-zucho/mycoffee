import type { Metadata } from 'next'
import { Inter, Fraunces, Barlow } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav/Nav'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces' })
const barlow = Barlow({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
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
      <body className={cn(fraunces.className, barlow.className, 'bg-cream')}>
        <Nav />

        {children}
      </body>
    </html>
  )
}
