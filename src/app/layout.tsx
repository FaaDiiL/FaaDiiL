import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio - Fadil Al Farhan',
  description: 'See all my latest projects and contact me!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
