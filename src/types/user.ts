export type UserInfo = {
  id: number;
  email: string;
  loginType: string;
  externalLoginId: string;
  serviceId: string;
  walletAddress: string;
  termsAndConditionsInfo: {
    isAllowTerms: boolean;
    isAllowPrivacy: boolean;
    isAdult: boolean;
    isAllowAd: boolean;
    adConfirmedAt: string;
  };
  language: string;
  createdAt: string;
};

export type requestUserData = {
  serviceId: string;
};

export type requestLanguage = {
  language: string;
  serviceId: string;
};
