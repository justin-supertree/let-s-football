import { commonAnimate, duration } from '@/data/animate';

const GET_SELECT_CATEGORY = 'getSelectCategory';
const SET_SELECT_CATEGORY = 'setSelectCategory';

export const getCategory = () => {
  if (typeof window !== 'undefined' && localStorage)
    return localStorage.getItem(GET_SELECT_CATEGORY) ?? '';

  return '';
};

export const setCategory = (serviceId: string) =>
  localStorage.setItem(SET_SELECT_CATEGORY, serviceId);

export const getAnimate = (
  variant: 'exit' | 'enter',
  idx?: number,
  customDelay?: number,
) => {
  if (variant === 'exit') return { ...commonAnimate.exit };

  return {
    ...commonAnimate.enter,
    transition: {
      delay: customDelay ?? duration * (idx ?? 0),
      duration,
    },
  };
};
