import { commonAnimate, duration } from '@/data/animate';

const SELECT_CATEGORY = 'selectCategory';

export const getCategory = () => {
  if (typeof window !== 'undefined' && localStorage)
    return localStorage.getItem(SELECT_CATEGORY) ?? '';

  return '';
};

export const setCategory = (title: string) =>
  localStorage.setItem(SELECT_CATEGORY, title);

export const clearCategory = () => localStorage.removeItem(SELECT_CATEGORY);

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
