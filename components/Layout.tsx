import Head from 'next/head'
import { ReactNode } from 'react'
import Header from './Header'
import { Open_Sans, Playfair_Display } from '@next/font/google'

const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-openSans' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Johan Hanses"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <div className={`${openSans.variable} ${playfair.variable} p-6 font-openSans`}>
        <Header />
        <main className="max-w-5xl mx-auto py-16">{children}</main>
      </div>
    </>
  )
}
