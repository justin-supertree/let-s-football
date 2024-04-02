import api from '@/api/index';
import { AxiosError } from 'axios';

import { ResponseData, ResponseError } from '@/types/fetch';

import type { GetMeetingResponse, NewTeamRequest } from '@/types/meeting';

export const getMeetingInformation = async (id: number) => {
  try {
    const { data } = await api.get<ResponseData<GetMeetingResponse>>(
      `/v1/activity/list/${id}`,
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

export const postCreateNewTeam = async ({
  categoryId,
  title,
  place,
  placeUrl,
  x,
  y,
  participantsMax,
  type,
  formation,
}: NewTeamRequest) => {
  try {
    const { data } = await api.post('/v1/activity', {
      categoryId,
      title,
      place,
      placeUrl,
      x,
      y,
      participantsMax,
      type,
      formation,
    });
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
