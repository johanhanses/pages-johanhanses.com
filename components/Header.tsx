import Link from 'next/link'
import LogInOutButton from './LogInOutButton'
import ToggleColorMode from './ToggleColorMode'
import { CommandLineIcon } from '@heroicons/react/24/outline'

export default function Header() {
  return (
    <header className="flex items-center justify-between p-6 bg-black text-slate-100 shadow font-playfair rounded-md dark:rounded-none font-semibold text-lg dark:border-b border-slate-100">
      <Link href="/">
        <h1 className="text-3xl flex items-center justify-center gap-3">
          <CommandLineIcon className="w-8 h-8" />
          Johan Hanses
        </h1>
      </Link>
      <div className="flex items-center gap-6">
        <nav className="flex items-center gap-6">
          <Link
            href="/secret"
            className=""
          >
            CV
          </Link>
        </nav>
        <LogInOutButton />
        <ToggleColorMode />
      </div>
    </header>
  )
}
