export type MeetingResponse = {
  id: number;
  makerId: number;
  categoryId: number;
  title: string;
  participants: number;
  participantsMax: number;
  content: {
    categoryId: number;
    type: {
      FULL: string;
      HALF: string;
      FOOT: string;
      EDUCATION: string;
    };
    formation: {
      FORMATION_3142: string;
      FORMATION_343: string;
      FORMATION_352: string;
      FORMATION_41212: string;
      FORMATION_4141: string;
      FORMATION_4231: string;
      FORMATION_424: string;
      FORMATION_433: string;
      FORMATION_4411: string;
      FORMATION_442: string;
      FORMATION_532: string;
      FORMATION_541: string;
    };
  };
  inputData: string;
};

export type GetMeetingResponse = {
  total: number;
  list: MeetingResponse[];
};
