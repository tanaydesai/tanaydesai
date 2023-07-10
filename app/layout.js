import styles from '@/styles/globals.css';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tanay Desai',
  description: "His Imperial Royal Highness Sir Lord Shri Maharaja The Great Conquerer, Tanay Desai's Sophisticated Empire of Apps.",
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
