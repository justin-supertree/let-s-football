import { UserInfo } from '@/types/user';

export type RequestSnsLogin = {
  code: string;
};

export type snsLoginData = {
  accessToken: string;
  refreshToken: string;
  user: UserInfo;
};

export type RequestTermsPolicy = {
  isAllowTerms: boolean;
  isAllowPrivacy: boolean;
  isAdult: boolean;
  isAllowAd: boolean;
  serviceId: string;
};
