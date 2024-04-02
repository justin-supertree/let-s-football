type FormationProps =
  | '3142'
  | '343'
  | '352'
  | '41212'
  | '4141'
  | '4231'
  | '424'
  | '433'
  | '4411'
  | '442'
  | '532'
  | '541';

type FootballTypeProps = 'full' | 'half' | 'foot' | 'education';

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

export type NewTeamRequest = {
  categoryId: number;
  title: string;
  place: string;
  placeUrl: string;
  x: string;
  y: string;
  participantsMax: number;
  type: FootballTypeProps;
  formation: FormationProps;
};
