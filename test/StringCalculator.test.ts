import { StringCalculator } from "../src/StringCalculator";

describe("StringCalculator : Addition", () => {
  let stringCalculator: StringCalculator;

  beforeEach(() => {
    stringCalculator = new StringCalculator();
  });

  it("should return 0 for an empty string", () => {
    expect(stringCalculator.add("")).toBe(0);
  });

  it("should return 5 for 1,4", () => {
    expect(stringCalculator.add("1,4")).toBe(5);
  });

  it("Invalid number in string should return 'Invalid input' message with invalid number/input", () => {
    expect(stringCalculator.add("1,4,A")).toBe("Invalid Input : A");
  });

  it("Should support \n as a delimeter", () => {
    expect(stringCalculator.add("1,4\n5")).toBe(10);
  });

  it("Should support dynamic delimeters", () => {
    let dynamicDelimeter: RegExp = /[,\n,|]/;
    stringCalculator = new StringCalculator(dynamicDelimeter);
    expect(stringCalculator.add("1,4\n5,10|20")).toBe(40);
  });
});
