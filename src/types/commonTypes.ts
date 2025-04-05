export type ValidateAndReturnResponseType = {
  isInvalidIp?: boolean;
  invalidInput?: string;
  isNegative?: boolean;
  negativeNumber?: string;
  parsedNumber?: number;
};

export type ResponseHolderType = {
  isErrored: boolean;
  negativeNumbers?: string;
  invalidNumbers?: string;
};
