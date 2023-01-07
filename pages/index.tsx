// import { User } from '@prisma/client'
// import { Session } from 'next-auth'
import Head from 'next/head'
import Layout from '../components/Layout'

// type MySession = Session & {
//   user: User
// }

export default function Home() {
  return (
    <>
      <Head>
        <title>Johan Hanses | Home</title>
      </Head>
      <Layout>
        {/* Signed in as {(session.user as MySession).user.username} <br /> */}
        <div className="">
          <h1 className="text-xl">Hej</h1>
        </div>
      </Layout>
    </>
  )
}
