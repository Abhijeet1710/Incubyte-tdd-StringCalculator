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
});
