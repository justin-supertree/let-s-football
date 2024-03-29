import api from '@/api/index';
import { AxiosError } from 'axios';

import { ResponseError } from '@/types/fetch';

import type { UserInfoRequestParams } from '@/types/user';

export const userInformation = async ({
  token,
  snsType,
}: UserInfoRequestParams) => {
  try {
    const { data } = await api.post('/v1/users/sns/login', { token, snsType });
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
