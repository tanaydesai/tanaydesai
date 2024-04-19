import "@/styles/globals.css"
import { Inter } from 'next/font/google'
import { Navbar } from "@/components/navbar"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tanay Desai',
  description: 'my little portfolio site.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta charSet="UTF-8" />
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
