import { User } from '@prisma/client'
import { Session, SessionOptions } from 'next-auth'
import { useSession, signIn, signOut } from 'next-auth/react'

type MySession = Session & {
  user: User
}

export default function LogInOutButton() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        Signed in as {(session.user as MySession).user.username} <br />
        <button
          onClick={() =>
            signOut({
              callbackUrl: `${window.location.origin}`
            })
          }
        >
          Sign out
        </button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}
