import Head from 'next/head'
import Layout from '../components/Layout'

export default function Secret() {
  return (
    <>
      <Head>
        <title>Johan Hanses | Secret</title>
      </Head>
      <Layout>
        <div>
          <h1 className="text-xl">This is a secret for everybody</h1>
        </div>
      </Layout>
    </>
  )
}
