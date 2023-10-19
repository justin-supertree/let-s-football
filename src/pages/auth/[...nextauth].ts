import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { googleUserLogin, kakaoUserLogin, naverUserLogin } from '@/api/auth';
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
          try {
            const res = await kakaoUserLogin({
              code: credentials.code,
              serviceId: process.env.NEXT_PUBLIC_SERVICE_ID as string,
              callbackUrl: `${process.env.NEXT_PUBLIC_URL}/callback/kakao`,
            });

            if (res && res.user) {
              const { user: userInfo } = res;
              return {
                accessToken: res.accessToken,
                refreshToken: res.refreshToken,
                id: userInfo.id.toString(),
                email: userInfo.email,
                userInfo,
              };
            }
          } catch (e) {
            console.log('login Error', e);
            if (e instanceof ResponseError) {
              throw new Error(e.message);
            }
          }
        }
        return null;
      },
    }),

    CredentialsProvider({
      id: 'google-credentials',
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
            const res = await googleUserLogin({
              code: credentials.code,
              serviceId: process.env.NEXT_PUBLIC_SERVICE_ID as string,
              callbackUrl: `${process.env.NEXT_PUBLIC_URL}/callback/google`,
            });

            if (res && res.user) {
              const { user: userInfo } = res;
              return {
                accessToken: res.accessToken,
                refreshToken: res.refreshToken,
                id: userInfo.id.toString(),
                email: userInfo.email,
                userInfo,
              };
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