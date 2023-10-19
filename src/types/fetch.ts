export type ResponseData<T> = {
  result: boolean;
  data: T;
  message?: string;
};

export class ResponseError extends Error {
  constructor(message: string, code: string) {
    super(message);
    this.code = code;
    this.message = message;
  }

  code: string;

  message: string;
}
