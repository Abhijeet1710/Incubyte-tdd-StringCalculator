import {
  ResponseHolderType,
  ValidateAndReturnResponseType,
} from "./types/commonTypes";

export class StringCalculator {
  private supportedDelimeters: RegExp;
  constructor(delimeters?: RegExp) {
    this.supportedDelimeters = delimeters ? delimeters : /[,\n]/;
  }

  public add(numbers: string): number | string {
    let sum = 0;
    let responseHolder: ResponseHolderType = { isErrored: false };

    if (numbers === "") {
      return sum;
    }
    try {
      const allNumbersToAdd: string[] = numbers.split(this.supportedDelimeters);

      for (let number of allNumbersToAdd) {
        const resp: ValidateAndReturnResponseType =
          this.validateAndReturn(number);

        if (
          !resp.isInvalidIp &&
          !resp.isNegative &&
          !responseHolder.isErrored
        ) {
          sum += Number(resp.parsedNumber);
        } else {
          responseHolder.isErrored = true;
          if (resp.isInvalidIp) {
            if (!responseHolder.invalidNumbers) {
              responseHolder.invalidNumbers = resp.invalidInput;
            } else {
              responseHolder.invalidNumbers += `,${resp.invalidInput}`;
            }
          }
          if (resp.isNegative) {
            if (!responseHolder.negativeNumbers) {
              responseHolder.negativeNumbers = resp.negativeNumber;
            } else {
              responseHolder.negativeNumbers += `,${resp.negativeNumber}`;
            }
          }
        }
      }

      return this.prepareFinalAnswer(responseHolder, sum);
    } catch (e: unknown) {
      return (e as Error).message;
    }
  }

  private validateAndReturn(num: string): ValidateAndReturnResponseType {
    const resp: ValidateAndReturnResponseType = {};

    const parsedNum = Number(num);
    resp.parsedNumber = parsedNum;

    if (isNaN(parsedNum)) {
      resp.isInvalidIp = true;
      resp.invalidInput = num;
    }

    if (parsedNum < 0) {
      resp.isNegative = true;
      resp.negativeNumber = num;
    }

    return resp;
  }

  private prepareFinalAnswer(
    responseHolder: ResponseHolderType,
    sum: number
  ): string | number {
    console.log("responseHolder", responseHolder);

    if (responseHolder.isErrored) {
      let errorMessage = "";
      if (responseHolder.invalidNumbers) {
        errorMessage += `Characters not allowed : ${responseHolder.invalidNumbers}`;
      }
      if (responseHolder.negativeNumbers) {
        if (responseHolder.invalidNumbers) errorMessage += " And ";
        errorMessage += `Negative numbers not allowed : ${responseHolder.negativeNumbers}`;
      }
      return errorMessage;
    }

    return sum;
  }
}
