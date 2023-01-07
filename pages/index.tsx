import Head from 'next/head'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Johan Hanses | Home</title>
      </Head>
      <Layout>
        <div className="">
          <h1 className="text-xl">Hej</h1>
        </div>
      </Layout>
    </>
  )
}
