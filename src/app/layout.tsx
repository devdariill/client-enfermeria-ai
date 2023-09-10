import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'InfoJobs - Mejora la descripcion',
  description: 'Herramienta para mejorar la descripcion de las ofertas de InfoJobs'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es'>
      <body className={inter.className}>
        <header className='py-10 bg-[#0f8ece]'>
          <h1 className='flex flex-col items-center justify-center text-lg'>
            <img src='/logo.png' alt='' />
            <strong className='font-semibold tracking-wider capitalize'> Summary for low complexity nursing records. </strong>
          </h1>
        </header>
        {children}
      </body>
    </html>
  )
}
