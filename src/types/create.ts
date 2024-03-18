export type InputValueProps = {
  result: boolean;
  value: string;
  type?: string;
};

export type CreateRequestParams = {
  teamName: InputValueProps;
  sports: InputValueProps;
  trainingPlace: InputValueProps;
  teamFormation: InputValueProps;
  Contact: InputValueProps;
};
