import { UserInfo } from '@/types/user';

export type LoginProps = {
  token: string;
  snsType: string;
};

export type RequestSnsLogin = {
  code: string;
  redirect: string;
};

export type snsLoginData = {
  access_token: string;
  token_type: string;
  refresh_token: string;
  expires_in: number;
  refresh_token_expires_in: number;
};

export type RequestTermsPolicy = {
  isAllowTerms: boolean;
  isAllowPrivacy: boolean;
  isAdult: boolean;
  isAllowAd: boolean;
  serviceId: string;
};

export type LoginResponse = {
  usersInfo: {
    id: number;
    email: string;
    name: string;
    contact: string;
    experience: number;
    gender: null;
    sns: 'kakao' | string;
    status: 'associate' | string;
    inputDate: string;
    updateDate: string;
    visitDate: string;
    kakaoPk: string;
    comment: string;
    address: [
      {
        id: number;
        userId: 0;
        address: string;
        status: 'normal' | string;
        inputDate: string;
        updateDate: string;
        user: string;
      },
    ];
  };
  jwt: string;
};
