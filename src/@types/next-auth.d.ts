import type { DefaultSession } from 'next-auth';
import type { PartnerInfo } from '@/types/partner';
import { Overwrite } from '@/types/utility';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session extends Overwrite<DefaultSession['user'], PartnerInfo> {
    accessToken?: string;
    refreshToken?: string;
  }

  interface User extends Overwrite<DefaultSession['user'], PartnerInfo> {
    accessToken?: string;
    refreshToken?: string;
  }
}
declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT extends Overwrite<DefaultSession['user'], PartnerInfo> {
    accessToken?: string;
    refreshToken?: string;
  }
}
