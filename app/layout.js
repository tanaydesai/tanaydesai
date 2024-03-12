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
      <body className={inter.className}>
        {children}
        {/* <div className="absolute left-[50%] bottom-5 translate-x-[-50%]"><Navbar /></div> */}
      </body>
    </html>
  )
}
