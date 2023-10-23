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

      async authorize(credentials, req) {
        if (credentials?.code) {
          console.log('req >', req);
          console.log('credentials in api >', credentials);
          try {
            const res = await kakaoUserLogin({
              code: credentials.code,
              redirect: `${process.env.NEXT_PUBLIC_URL}/callback/kakao`,
            });
            console.log('res in next auth >', res);

            if (res && res) {
              // const { user: userInfo } = res;
              // return {
              //   accessToken: res.access_token,
              //   refreshToken: res.refresh_token,
              // };
            }
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
