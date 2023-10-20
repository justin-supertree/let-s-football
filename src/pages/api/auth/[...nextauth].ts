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
          console.log('credentials in api >', credentials);
          try {
            const res = await kakaoUserLogin({ code: credentials.code });
            console.log('res >', res);

            if (res && res.user) {
              // const { user: userInfo } = res;
              // return {
              //   accessToken: res.access_token,
              //   refreshToken: res.refresh_token,
              //   id: userInfo.id.toString(),
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
        token.id = user.id;
        token.email = user.email;
        token.userInfo = user.userInfo;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      session.refreshToken = token.refreshToken as string;
      session.userInfo = token.userInfo;
      session.isFirst = !token.userInfo.walletAddress;
      return session;
    },
  },
});
