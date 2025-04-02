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
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'sv' }]
}

export default async function Layout(
  props: Readonly<{ children: ReactNode; params: Promise<{ lang: string }> }>,
) {
  const params = await props.params
  return (
    <html lang={params.lang}>
      <body
        className={`${inter.className} bg-white dark:bg-slate-900 min-h-screen pt-4 sm:pt-20 pb-20 sm:pb-4 print:p-0`}
      >
        {props.children}
        <Actions />
      </body>
    </html>
  )
}
