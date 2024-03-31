export type InputValueProps = {
  result: boolean;
  value: string;
  type?: string;
};

export type Formation = {
  formation: string;
  players: number;
};

export type CreateRequestParams = {
  teamName: InputValueProps;
  sports: InputValueProps;
  trainingPlace: InputValueProps;
  teamFormation: {
    value: Formation;
    result: boolean;
  };
  // contact: InputValueProps;
};
