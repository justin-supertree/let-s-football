import api from '@/api/index';
import { AxiosError } from 'axios';

import { ResponseError } from '@/types/fetch';

import type { ResponseData } from '@/types/fetch';
import type {
  LoginProps,
  LoginResponse,
  RequestSnsLogin,
  RequestTermsPolicy,
  snsLoginData,
} from '@/types/auth';

const USER_URL = `/v1/user`;

export const socialLogin = async ({ token, snsType }: LoginProps) => {
  try {
    const { data } = await api.post<ResponseData<LoginResponse>>(
      `${USER_URL}/sns/login`,
      {
        token,
        snsType,
      },
    );

    if (!data.result && data.message) {
      throw new ResponseError(data.message, '10');
    }

    return data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new ResponseError(error.response?.data.message, '10');
    }
    if (error instanceof ResponseError) {
      throw error;
    }
  }
};
export const kakaoUserLogin = async ({
  code,
  redirect,
}: RequestSnsLogin): Promise<snsLoginData | void> => {
  try {
    console.log('kakaoUserLogin code >', code);
    const response = await api.get<ResponseData<snsLoginData>>(
      `/v1/auth/kakao?code=${code}&redirect=${process.env.NEXT_PUBLIC_URL}`,
    );

    const data = response.data;

    if (!data.result && data.message) {
      throw new ResponseError(data.message, '10');
    }

    return data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log('error >', error);
      // throw new ResponseError(error.response?.data.message, '10');
    }
    if (error instanceof ResponseError) {
      throw error;
    }
  }
};

export const googleUserLogin = async ({
  code,
}: RequestSnsLogin): Promise<snsLoginData | void> => {
  try {
    const { data } = await api.post<ResponseData<snsLoginData>>(
      `/v1/auth/google/redirect?code=${code}`,
    );

    if (!data.result && data.message) {
      throw new ResponseError(data.message, '10');
    }

    return data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new ResponseError(error.response?.data.message, '10');
    }
    if (error instanceof ResponseError) {
      throw error;
    }
  }
};

export const termsPolicy = async ({
  isAllowTerms,
  isAllowPrivacy,
  isAdult,
  isAllowAd,
  serviceId,
}: RequestTermsPolicy) => {
  try {
    const { data } = await api.post(
      '/v1/auth/terms',
      {
        isAllowTerms,
        isAllowPrivacy,
        isAdult,
        isAllowAd,
      },
      {
        headers: {
          'service-id': serviceId,
        },
      },
    );

    if (!data.result && data.message) {
      throw new ResponseError(data.message, '10');
    }

    return data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new ResponseError(error.response?.data.message, '10');
    }
    if (error instanceof ResponseError) {
      throw error;
    }
  }
};

export default null;
