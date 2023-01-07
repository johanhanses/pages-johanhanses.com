import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-white dark:bg-black text-slate-900 dark:text-white antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
