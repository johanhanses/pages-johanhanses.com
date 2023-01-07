import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-slate-100 dark:bg-black text-slate-900 dark:text-slate-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
