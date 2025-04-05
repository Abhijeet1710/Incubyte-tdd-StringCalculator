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

  it("Invalid number in string should return 'Characters not allowed : <invalid_number>'", () => {
    expect(stringCalculator.add("1,4,A")).toBe("Characters not allowed : A");
  });

  it("Should support \n as a delimeter", () => {
    expect(stringCalculator.add("1,4\n5")).toBe(10);
  });

  it("Should support duplicate delimeter", () => {
    expect(stringCalculator.add("1,,,,4\n\n\n5")).toBe(10);
  });

  it("Should support dynamic delimeters", () => {
    let dynamicDelimeter: RegExp = /[,\n,|]/;
    stringCalculator = new StringCalculator(dynamicDelimeter);
    expect(stringCalculator.add("1,4\n5,10|20")).toBe(40);
  });

  it("Negative numbers should return 'Negative number not allowed : <negative_number>'", () => {
    let dynamicDelimeter: RegExp = /[,\n,|]/;
    stringCalculator = new StringCalculator(dynamicDelimeter);
    expect(stringCalculator.add("1,-4\n5,10|20")).toBe(
      "Negative numbers not allowed : -4"
    );
  });

  it("All Negative numbers should return in message 'Negative numbers not allowed : <negative_numbers>'", () => {
    let dynamicDelimeter: RegExp = /[,\n,|]/;
    stringCalculator = new StringCalculator(dynamicDelimeter);
    expect(stringCalculator.add("1,-4\n5,10|20,-6|5\n-9")).toBe(
      "Negative numbers not allowed : -4,-6,-9"
    );
  });

  it("All Negative numbers and Invalid chars should return in message 'Characters not allowed : <> And Negative numbers not allowed : <>'", () => {
    let dynamicDelimeter: RegExp = /[,\n,|]/;
    stringCalculator = new StringCalculator(dynamicDelimeter);
    expect(stringCalculator.add("1,-4\n5,10|20,-6|5\n-9,A,8,3,Z")).toBe(
      "Characters not allowed : A,Z And Negative numbers not allowed : -4,-6,-9"
    );
  });
});
