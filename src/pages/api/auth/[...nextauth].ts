import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { googleUserLogin, kakaoUserLogin } from '@/api/auth';
import { ResponseError } from '@/types/fetch';

export default NextAuth({
  providers: [
    CredentialsProvider({
      id: 'kakao-credentials',
      name: 'Credentials',
      credentials: {
        code: {
          label: 'code',
          type: 'text',
        },
      },

      async authorize(credentials) {
        if (credentials?.code) {
          console.log('credentials in api >', credentials);
          try {
            const res = await kakaoUserLogin({
              code: credentials.code,
              redirect: `${process.env.NEXT_PUBLIC_URL}/callback/kakao`,
            });
            console.log('res in next auth >', res);

            // if (res && res) {
            //   return {
            //     accessToken: res.access_token,
            //     refreshToken: res.refresh_token,
            //     tokenType: res.token_type,
            //     expiresIn: res.expires_in,
            //     refreshTokenExpiresIn: res.refresh_token_expires_in,
            //   };
            // }
          } catch (e) {
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
      if (user?.email) {
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
      return session;
    },
  },
});
