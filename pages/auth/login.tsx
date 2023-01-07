import { GetServerSideProps } from 'next'
import { getCsrfToken, signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { FormEvent, useEffect, useState } from 'react'
import ErrorMessage from '../../components/ErrorMessage'
import Button from '../../components/Form/Button'
import Input from '../../components/Form/Input'
import Layout from '../../components/Layout'

type SignInProps = {
  csrfToken: string
}

export default function Login({ csrfToken }: SignInProps) {
  const router = useRouter()
  const { data, status } = useSession()
  const [values, setValues] = useState({
    username: '',
    password: ''
  })
  const [error, setError] = useState('')

  useEffect(() => {
    if (status === 'authenticated') router.push('/secret')
  }, [router, status])

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
        <Input
          required
          name="username"
          type="text"
          placeholder="Username"
          onChange={(e) => setValues({ ...values, username: e.target.value })}
        />
        <Input
          required
          name="password"
          type="password"
          placeholder="Password"
          onChange={(e) => setValues({ ...values, password: e.target.value })}
        />
        <Button
          type="submit"
          title="Login"
        >
          Login
        </Button>
      </form>
      <ErrorMessage error={error} />
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
