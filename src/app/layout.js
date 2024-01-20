import { Inter } from 'next/font/google'
import './globals.css'
import Nav from './components/navgationbar/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Nav />
        <div className=''>
          {children}
        </div>
      </body>
    </html>
  )
}