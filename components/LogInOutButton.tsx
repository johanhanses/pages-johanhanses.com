import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'

export default function LogInOutButton() {
  const { data: session } = useSession()

  if (session) {
    return (
      <button
        onClick={() =>
          signOut({
            callbackUrl: `${window.location.origin}`
          })
        }
      >
        Log out
      </button>
    )
  }
  return <Link href="/auth/login">Log in</Link>
}
