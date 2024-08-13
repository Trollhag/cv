'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Page() {
  const router = useRouter()
  useEffect(() => {
    const lang = window.navigator?.language?.split('-').shift() || 'en'
    router.replace(`/${lang}`)
  }, [router])

  return null
}
