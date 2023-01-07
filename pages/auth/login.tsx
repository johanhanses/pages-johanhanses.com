import { GetServerSideProps } from 'next'
import { getCsrfToken, signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'
import Layout from '../../components/Layout'

type SignInProps = {
  csrfToken: string
}

export default function Login({ csrfToken }: SignInProps) {
  const router = useRouter()
  const [values, setValues] = useState({
    username: '',
    password: ''
  })
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await signIn('credentials', { ...values, redirect: false })
      if (response && response.ok) return router.push('/secret')
      setError('Wrong credentials...')
    } catch (error) {
      console.error(error)
      setError('Other error...')
    }
  }

  return (
    <Layout>
      <form
        method="post"
        action="/api/auth/callback/credentials"
        className="space-y-6 w-full sm:w-1/2 md:w-1/3 mx-auto"
        onSubmit={handleSubmit}
      >
        <input
          name="csrfToken"
          type="hidden"
          defaultValue={csrfToken}
        />
        <input
          // required
          name="username"
          type="text"
          onChange={(e) => setValues({ ...values, username: e.target.value })}
        />
        <input
          // required
          name="password"
          type="password"
          onChange={(e) => setValues({ ...values, password: e.target.value })}
        />
        <button
          type="submit"
          title="Login"
          className="mx-auto block"
        >
          Login
        </button>
      </form>
      {error && (
        <p className="mt-6 text-center text-sm text-white bg-red-400 sm:w-1/2 md:w-1/3 mx-auto rounded-md py-1">
          {error}
        </p>
      )}
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
