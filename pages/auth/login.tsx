import { GetServerSideProps } from 'next'
import { getCsrfToken } from 'next-auth/react'
import Layout from '../../components/Layout'

type SignInProps = {
  csrfToken: string
}

export default function Login({ csrfToken }: SignInProps) {
  return (
    <Layout>
      <form
        method="post"
        action="/api/auth/callback/credentials"
        className="space-y-4 w-full sm:w-1/2 md:w-1/3 mx-auto"
      >
        <input
          name="csrfToken"
          type="hidden"
          defaultValue={csrfToken}
        />
        <input
          name="username"
          type="text"
        />
        <input
          name="password"
          type="password"
        />
        <button
          type="submit"
          title="Login"
          className="mx-auto block"
        >
          Login
        </button>
      </form>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      csrfToken: await getCsrfToken(context)
    }
  }
}
