"use client"

import { useEffect, useState, useRef } from "react";
import LightModeIcon from "../../../public/lightmode.svg";
import DarkModeIcon from "../../../public/darkmode.svg";
import { useParams } from "next/navigation";
import { languages } from "@/lang";
import Link from "next/link";

export default function Header() {
  const headerRef = useRef<HTMLElement | null>(null)
  const [darkMode, setDarkMode] = useState<Boolean | null>(null)
  const { lang } = useParams<{ lang: keyof typeof languages }>()

  useEffect(() => {
    if (darkMode === null && (localStorage.theme === 'dark' || (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches))) {
      setDarkMode(true)
    }
    document.documentElement.classList.toggle('dark', !!darkMode)
  }, [darkMode])

  return (
    <>
      <header ref={headerRef} className={`print-hidden flex justify-end p-4 ${headerRef.current ? 'fixed top-0 w-full' : ''}`}>
        <Link href={`/${lang === 'en' ? 'sv' : 'en'}`} className="block w-10 h-10 rounded-full shadow bg-center mr-2" style={{ backgroundImage: `url(/lang-${lang === 'en' ? 'sv' : 'en'}.png)` }}>
          <span style={{ visibility: 'hidden' }}>{lang === 'en' ? 'Svenska' : 'English'}</span>
        </Link>
        <button
          className="bg-slate-300 dark:bg-slate-800 w-10 h-10 rounded-full shadow"
          onClick={() => {
            setDarkMode(!darkMode)
            localStorage.setItem('theme', !darkMode ? 'dark' : 'light')
          }}
        >
          {darkMode ? <LightModeIcon alt="Light mode" className="m-auto" /> : <DarkModeIcon alt="Dark mode" className="m-auto" />}
        </button>
      </header>
      {headerRef.current && <div className="print-hidden" style={{ height: headerRef.current?.clientHeight }} />}
    </>
  );
}
