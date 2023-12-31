import './globals.css'
import { Bebas_Neue } from 'next/font/google'

const bebas_Neue = Bebas_Neue({ subsets: ['latin-ext'] ,weight: '400'})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={bebas_Neue.className + " bg-[url('/images/background.jpg')] bg-no-repeat bg-cover w-full max-lg:bg-none"}>{children}</body>
    </html>
  )
}
