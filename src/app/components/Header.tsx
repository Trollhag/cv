"use client"
import React, { useEffect, useState } from "react";
import LightModeIcon from "../../../public/lightmode.svg";
import DarkModeIcon from "../../../public/darkmode.svg";

export default function Header() {
  const [darkMode, setDarkMode] = useState<Boolean | null>(null)
  useEffect(() => {
    if (darkMode === null && (localStorage.theme === 'dark' || (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches))) {
      setDarkMode(true)
    }
    document.documentElement.classList.toggle('dark', !!darkMode)
  }, [darkMode])
  return (
    <header className="position-absolute top-0 flex justify-end">
      <button
        className="print-hidden m-4 bg-slate-300 dark:bg-slate-800 w-10 h-10 rounded-full shadow"
        onClick={() => {
          setDarkMode(!darkMode)
          localStorage.setItem('theme', !darkMode ? 'dark' : 'light')
        }}
      >
        {darkMode ? <LightModeIcon alt="Light mode" className="m-auto" /> : <DarkModeIcon alt="Dark mode" className="m-auto" />}
      </button>
    </header>
  );
}
