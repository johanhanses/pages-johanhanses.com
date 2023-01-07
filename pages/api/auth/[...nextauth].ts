import NextAuth from 'next-auth'
import CredentialProvider from 'next-auth/providers/credentials'
import prisma from '../../../lib/prisma'
import bcrypt from 'bcrypt'
import { User } from '@prisma/client'

export default NextAuth({
  providers: [
    CredentialProvider({
      name: 'credentials',

      credentials: {
        username: {
          label: 'Username',
          type: 'text',
          placeholder: 'username'
        },
        password: { label: 'Password', type: 'password' }
      },

      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: {
            username: credentials?.username
          }
        })

        if (user && bcrypt.compareSync(credentials!.password, user.password)) {
          return {
            id: user.id,
            username: user.username
          }
        }

        return null
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    jwt: ({ token, user, account, profile, isNewUser }) => {
      if (user) token.user = user

      return token
    },
    session: ({ session, token }) => {
      if (token) session.user = token

      return session
    }
  },

  pages: {
    signIn: '/auth/login/'
  }
})
