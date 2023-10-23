import api from '@/api/index';
import { AxiosError } from 'axios';

import { ResponseError } from '@/types/fetch';

import type { ResponseData } from '@/types/fetch';
import type {
  RequestSnsLogin,
  RequestTermsPolicy,
  snsLoginData,
} from '@/types/auth';

export const kakaoUserLogin = async ({
  code,
  redirect,
}: RequestSnsLogin): Promise<snsLoginData | void> => {
  try {
    console.log('kakaoUserLogin in api >', code);

    const res = await api.post<ResponseData<snsLoginData>>(
      `/auth/kakao/redirect`,
      { code, redirect },
    );

    console.log('kakaoUserLogin data >', res);

    if (!res.data.result && res.data.message) {
      throw new ResponseError(res.data.message, '10');
    }
    return res.data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new ResponseError(error.response?.data.message, '10');
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
