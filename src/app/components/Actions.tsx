'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import type { languages } from '@/lang'
import DarkModeIcon from '@/public/icons/darkmode.svg'
import LightModeIcon from '@/public/icons/lightmode.svg'
import PrintIcon from '@/public/icons/print.svg'
import EN from '@/public/lang-en.png'
import SV from '@/public/lang-sv.png'

export const Actions = () => {
  const [darkMode, setDarkMode] = useState<boolean | null>(null)
  const { lang } = useParams<{ lang: keyof typeof languages }>()

  useEffect(() => {
    const cached = localStorage.theme
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (darkMode === null && (cached === 'dark' || (!cached && prefersDarkMode))) {
      setDarkMode(true)
    }
    document.documentElement.classList.toggle('dark', !!darkMode)
  }, [darkMode])

  return (
    <div className="print-hidden fixed bottom-0 sm:top-0 sm:bottom-auto left-0 p-4 w-full flex justify-end">
      <Link
        href={`/${lang === 'en' ? 'sv' : 'en'}`}
        title={lang === 'en' ? 'Svenska' : 'English'}
        className="mr-2"
      >
        <Image
          src={lang === 'en' ? SV : EN}
          width="40"
          height="40"
          alt={lang === 'en' ? 'Svenska' : 'English'}
          className="rounded-full shadow object-cover object-center"
          unoptimized
        />
      </Link>
      <button
        className="bg-slate-300 dark:bg-slate-800 w-10 h-10 rounded-full shadow mr-2"
        title={darkMode ? 'Toggle lightmode' : 'Toggle darkmode'}
        onClick={() => {
          setDarkMode(!darkMode)
          localStorage.setItem('theme', !darkMode ? 'dark' : 'light')
        }}
      >
        {darkMode ? (
          <LightModeIcon alt="Light mode" className="m-auto" />
        ) : (
          <DarkModeIcon alt="Dark mode" className="m-auto" />
        )}
      </button>
      <button
        className="bg-slate-300 dark:bg-slate-800 w-10 h-10 rounded-full shadow"
        title={lang === 'en' ? 'Print' : 'Skriv ut'}
        onClick={() => typeof window?.print === 'function' && window.print()}
      >
        <PrintIcon alt="Print" className="m-auto" />
      </button>
    </div>
  )
}
