export type UserInfo = {};

export type PlayerInfo = {
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
      userId: number;
      address: string;
      status: 'normal' | string;
      inputDate: string;
      updateDate: string;
    },
  ];
};
