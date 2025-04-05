export class StringCalculator {
  constructor() {}

  public add(numbers: string): number {
    let sum = 0;
    if (numbers === "") {
      return sum;
    }

    sum = numbers
      .split(",")
      .reduce(
        (additionTillNow, currNum) => additionTillNow + parseInt(currNum),
        0
      );

    return sum;
  }
}
