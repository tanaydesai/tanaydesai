import "@/styles/globals.css"
import { Inter } from 'next/font/google'

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
        <hr className='my-[100px] mx-auto h-[1px] w-[50px] relative border-gray-400'></hr>
      </body>
    </html>
  )
}
