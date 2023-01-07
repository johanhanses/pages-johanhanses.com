import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Button from './Button'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  if (theme === 'dark')
    return (
      <button onClick={() => setTheme('light')}>
        <MoonIcon className="w-6 h-6" />
      </button>
    )
  if (theme === 'light' || theme === 'system')
    return (
      <button onClick={() => setTheme('dark')}>
        <SunIcon className="w-6 h-6" />
      </button>
    )
  return null
}
