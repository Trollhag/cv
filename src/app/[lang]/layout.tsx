import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import { Actions } from '@/app/components/Actions'
import Package from '@/package.json'
import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `Oscar Trollhag - CV (v${Package.version})`,
  description: '',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-192x192.png', sizes: '192x192' },
      { url: '/favicon-512x512.png', sizes: '512x512' },
    ],
    shortcut: '/favicon-512x512.png',
    apple: '/apple-touch-icon.png',
  },
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'sv' }]
}

export default function Layout({
  children,
  params,
}: Readonly<{ children: ReactNode; params: { lang: string } }>) {
  return (
    <html lang={params.lang}>
      <body
        className={`${inter.className} bg-white dark:bg-slate-900 min-h-screen pt-4 sm:pt-20 pb-20 sm:pb-4 print:p-0`}
      >
        {children}
        <Actions />
      </body>
    </html>
  )
}
