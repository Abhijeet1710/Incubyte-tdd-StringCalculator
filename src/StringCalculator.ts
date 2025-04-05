export class StringCalculator {
  constructor() {}

  public add(numbers: string): number | string {
    let sum = 0;
    if (numbers === "") {
      return sum;
    }
    try {
      sum = numbers
        .split(",")
        .reduce(
          (additionTillNow, currNum) =>
            additionTillNow + this.getNumber(currNum),
          0
        );
    } catch (e: unknown) {
      return (e as Error).message;
    }

    return sum;
  }

  private getNumber(num: string): number {
    const parsedNum = Number(num);
    if (isNaN(parsedNum)) {
      throw new Error(`Invalid Input : ${num}`);
    }
    return parsedNum;
  }
}
