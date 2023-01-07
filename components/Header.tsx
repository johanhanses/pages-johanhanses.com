import Link from 'next/link'
import LogInOutButton from './LogInOutButton'
import ToggleColorMode from './ToggleColorMode'

export default function Header() {
  return (
    <header className="flex items-center justify-between p-6 bg-black dark:bg-slate-100 text-slate-100 dark:text-slate-900 shadow font-playfair rounded-md">
      <Link href="/">
        <h1 className="text-2xl font-semi-bold">Home</h1>
      </Link>
      <div className="flex items-center gap-6">
        <nav className="flex items-center gap-6">
          <Link
            href="/secret"
            className="hover:underline"
          >
            Secret page
          </Link>
          <LogInOutButton />
        </nav>
        <ToggleColorMode />
      </div>
    </header>
  )
}
