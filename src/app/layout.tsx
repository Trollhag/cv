import type { Metadata } from 'next'
import '@/app/globals.css'
import { ReactNode } from 'react'
import Package from '@/package.json'

export const metadata: Metadata = {
  title: `Oscar Trollhag - CV (v${Package.version})`,
  description: '',
}

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
