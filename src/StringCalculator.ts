export class StringCalculator {
  private supportedDelimeters: RegExp;
  constructor(delimeters?: RegExp) {
    this.supportedDelimeters = delimeters ? delimeters : /[,\n]/;
  }

  public add(numbers: string): number | string {
    let sum = 0;
    if (numbers === "") {
      return sum;
    }
    try {
      sum = numbers
        .split(this.supportedDelimeters)
        .reduce(
          (additionTillNow, currNum) =>
            additionTillNow + this.validateAndReturn(currNum),
          0
        );
    } catch (e: unknown) {
      return (e as Error).message;
    }

    return sum;
  }

  private validateAndReturn(num: string): number {
    const parsedNum = Number(num);
    if (isNaN(parsedNum)) {
      throw new Error(`Invalid input : ${num}`);
    }

    if (parsedNum < 0) {
      throw new Error(`Negative number not allowed : ${num}`);
    }
    return parsedNum;
  }
}
