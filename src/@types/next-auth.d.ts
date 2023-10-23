import type { DefaultSession } from 'next-auth';
import type { PlayerInfo } from '@/types/partner';
import { Overwrite } from '@/types/utility';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session extends Overwrite<DefaultSession['user'], PlayerInfo> {
    accessToken?: string;
    refreshToken?: string;
    tokenType?: string;
    expiresIn?: string | number;
    refreshTokenExpiresIn?: string | number;
  }

  interface User extends Overwrite<DefaultSession['user'], PlayerInfo> {
    accessToken?: string;
    refreshToken?: string;
    tokenType?: string;
    expiresIn?: string | number;
    refreshTokenExpiresIn?: string | number;
  }
}
declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT extends Overwrite<DefaultSession['user'], PlayerInfo> {
    accessToken?: string;
    refreshToken?: string;
    tokenType?: string;
    expiresIn?: string | number;
    refreshTokenExpiresIn?: string | number;
  }
}
