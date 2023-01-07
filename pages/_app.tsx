import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth'

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps<{
  session: Session
}>) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  )
}
