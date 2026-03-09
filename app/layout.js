import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../app/components/Navbar'
import Footer from '../app/components/Footer'
import AnimatedBackground from '../app/components/AnimatedBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nishant Jaiswal - Full Stack Developer',
  description: 'Full Stack Developer Portfolio - React, Next.js, and Modern Web Technologies',
  keywords: 'web developer, full stack, portfolio, React, Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-950 text-white">
          <AnimatedBackground />
          <div className="relative z-10">
            <Navbar />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}