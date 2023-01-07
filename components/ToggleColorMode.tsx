import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Button from './Button'

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  if (theme === 'dark') return <Button onClick={() => setTheme('light')}>Go to Lightness</Button>
  if (theme === 'light' || theme === 'system') return <Button onClick={() => setTheme('dark')}>Go to Darkness</Button>
  return null
}
