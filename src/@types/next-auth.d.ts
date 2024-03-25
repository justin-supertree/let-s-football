import type { DefaultSession } from 'next-auth';
import type { PlayerInfo, UserInfo } from '@/types/partner';
import { Overwrite } from '@/types/utility';
import { LoginResponse } from '@/types/auth';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session extends Overwrite<DefaultSession['user'], UserInfo> {
    accessToken?: string;
    refreshToken?: string;
    tokenType?: string;
    expiresIn?: string | number;
    refreshTokenExpiresIn?: string | number;
    user: LoginResponse;
  }

  interface User extends Overwrite<DefaultSession['user'], UserInfo> {
    accessToken?: string;
    refreshToken?: string;
    tokenType?: string;
    expiresIn?: string | number;
    refreshTokenExpiresIn?: string | number;
    user: LoginResponse;
  }
}
declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT extends Overwrite<DefaultSession['user'], UserInfo> {
    accessToken?: string;
    refreshToken?: string;
    tokenType?: string;
    expiresIn?: string | number;
    refreshTokenExpiresIn?: string | number;
    user: LoginResponse;
  }
}
