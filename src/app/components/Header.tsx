"use client"

import { useEffect, useState, useRef } from "react";
import LightModeIcon from "../../../public/lightmode.svg";
import DarkModeIcon from "../../../public/darkmode.svg";
import EN from "../../../public/lang-en.png";
import SV from "../../../public/lang-sv.png";
import { useParams } from "next/navigation";
import { languages } from "@/lang";
import Link from "next/link";
import Image from "next/image";

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
        <Link href={`/${lang === 'en' ? 'sv' : 'en'}`} className="mr-2">
          <Image src={lang === 'en' ? SV : EN} width="40" height="40" alt={lang === 'en' ? 'Svenska' : 'English'} className="rounded-full shadow object-cover object-center" unoptimized />
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
