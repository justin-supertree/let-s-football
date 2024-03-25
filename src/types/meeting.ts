export type MeetingResponse = {
  id: number;
  makerId: number;
  categoryId: number;
  title: string;
  participants: number;
  participantsMax: number;
  content: {
    categoryId: number;
    type: string;
    formation: string;
  };
  inputData: string;
};

export type GetMeetingResponse = {
  total: number;
  list: MeetingResponse[];
};
