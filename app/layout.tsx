import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Swing It Events',
  description: 'Swing It Events',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> */}
          {/* <div className="mx-auto max-w-3xl"> */}
            {children}
          {/* </div> */}
        {/* </div> */}
      </body>
    </html>
  )
}
