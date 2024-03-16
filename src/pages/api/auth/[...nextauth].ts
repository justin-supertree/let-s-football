import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { kakaoUserLogin } from '@/api/auth';
import { userInformation } from '@/api/user';

import type { PlayerInfo } from '@/types/partner';

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

            if (!data || !data.access_token) {
              throw new Error('Failed to authenticate with Kakao');
            }

            const userData = await userInformation({
              token: data.access_token,
              snsType: 'kakao',
            });

            if (!userData) {
              throw new Error('Failed to update sns user information');
            }

            if (data && userData) {
              return {
                user: userData,
                accessToken: data.access_token,
                refreshToken: data.refresh_token,
                tokenType: data.token_type,
                expiresIn: data.expires_in,
                refreshTokenExpiresIn: data.refresh_token_expires_in,
                id: '',
              };
            }
          } catch (error) {
            throw new Error('Failed to authenticate');
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
        token.user = user.user;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      session.refreshToken = token.refreshToken as string;
      session.tokenType = token.tokenType as string;
      session.expiresIn = token.expiresIn as string | number;
      session.refreshTokenExpiresIn = token.refreshTokenExpiresIn as string;
      session.user = token.user as PlayerInfo;
      return session;
    },
  },
});
