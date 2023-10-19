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
          console.log('credentials >', credentials);
          try {
            const res = await kakaoUserLogin({ code: credentials.code });

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
        return null as any;
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
            const res = await googleUserLogin({ code: credentials.code });

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
        return null as any;
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
