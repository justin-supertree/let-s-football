import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { kakaoUserLogin } from '@/api/auth';
import { ResponseError } from '@/types/fetch';

export default NextAuth({
  providers: [
    CredentialsProvider({
      id: 'social-credentials',
      name: 'Credentials',
      credentials: {
        code: {
          label: 'code',
          type: 'text',
        },
      },

      async authorize(credentials) {
        if (credentials?.code) {
          try {
            const data = await kakaoUserLogin({
              code: credentials.code,
              redirect: 'http://localhost:3000',
            });

            if (data && data) {
              return {
                accessToken: data.access_token,
                refreshToken: data.refresh_token,
                tokenType: data.token_type,
                expiresIn: data.expires_in,
                refreshTokenExpiresIn: data.refresh_token_expires_in,
                id: '',
              };
            }
          } catch (e) {
            console.log('error:', e);

            if (e instanceof ResponseError) {
              throw new Error(e.message);
            }
          }
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async signIn() {
      return true;
    },
    async jwt({ token, user }) {
      if (user?.accessToken) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.tokenType = user.tokenType;
        token.expiresIn = user.expiresIn;
        token.refreshTokenExpiresIn = user.refreshTokenExpiresIn;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      session.refreshToken = token.refreshToken as string;
      session.tokenType = token.tokenType as string;
      session.expiresIn = token.expiresIn as string | number;
      session.refreshTokenExpiresIn = token.refreshTokenExpiresIn as string;
      return session;
    },
  },
});
