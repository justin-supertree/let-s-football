import { UserInfo } from '@/types/user';

export type RequestSnsLogin = {
  code: string;
};

export type snsLoginData = {
  access_token: string;
  token_type: string;
  refresh_token: string;
  expires_in: number;
  refresh_token_expires_in: number;
  user: UserInfo;
};

export type RequestTermsPolicy = {
  isAllowTerms: boolean;
  isAllowPrivacy: boolean;
  isAdult: boolean;
  isAllowAd: boolean;
  serviceId: string;
};
