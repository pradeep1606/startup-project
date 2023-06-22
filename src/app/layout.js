import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './globals.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Thats My College',
  description: 'Find a college and Get Admission',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body className={`bg-[#e6e6e6]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
