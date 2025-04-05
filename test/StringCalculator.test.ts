import { StatsTracker } from "../src/calculator/StatsTracker";
import { StringCalculator } from "../src/calculator/StringCalculator";
import { OperationType } from "../src/utils/Constants";

describe("StringCalculator : calculateition", () => {
  let stringCalculator: StringCalculator;

  beforeEach(() => {
    stringCalculator = new StringCalculator(new StatsTracker());
  });

  it("should return 0 for an empty string", () => {
    expect(stringCalculator.calculate("", OperationType.ADD)).toBe(0);
  });

  it("should return 5 for 1,4", () => {
    expect(stringCalculator.calculate("1,4", OperationType.ADD)).toBe(5);
  });

  it("Invalid number in string should return 'Characters not allowed : <invalid_number>'", () => {
    expect(stringCalculator.calculate("1,4,A", OperationType.ADD)).toBe(
      "Characters not allowed : A"
    );
  });

  it("Should support \n as a delimeter", () => {
    expect(stringCalculator.calculate("1,4\n5", OperationType.ADD)).toBe(10);
  });

  it("Should support duplicate delimeter", () => {
    expect(stringCalculator.calculate("1,,,,4\n\n\n5", OperationType.ADD)).toBe(
      10
    );
  });

  it("Should support multiple duplicate delimeter", () => {
    expect(
      stringCalculator.calculate("1,,,,4\n\n\n,\n5", OperationType.ADD)
    ).toBe(10);
  });

  it("Should support dynamic delimeters", () => {
    let dynamicDelimeter: RegExp = /[,\n,|]/;
    expect(
      stringCalculator.calculate(
        "1,4\n5,10|20",
        OperationType.ADD,
        dynamicDelimeter
      )
    ).toBe(40);
  });

  it("Negative numbers should return 'Negative number not allowed : <negative_number>'", () => {
    let dynamicDelimeter: RegExp = /[,\n,|]/;
    expect(
      stringCalculator.calculate(
        "1,-4\n5,10|20",
        OperationType.ADD,
        dynamicDelimeter
      )
    ).toBe("Negative numbers not allowed : -4");
  });

  it("All Negative numbers should return in message 'Negative numbers not allowed : <negative_numbers>'", () => {
    let dynamicDelimeter: RegExp = /[,\n,|]/;
    expect(
      stringCalculator.calculate(
        "1,-4\n5,10|20,-6|5\n-9",
        OperationType.ADD,
        dynamicDelimeter
      )
    ).toBe("Negative numbers not allowed : -4,-6,-9");
  });

  it("All Negative numbers and Invalid chars should return in message 'Characters not allowed : <> And Negative numbers not allowed : <>'", () => {
    let dynamicDelimeter: RegExp = /[,\n,|]/;
    expect(
      stringCalculator.calculate(
        "1,-4\n5,10|20,-6|5\n-9,A,8,3,Z",
        OperationType.ADD,
        dynamicDelimeter
      )
    ).toBe(
      "Characters not allowed : A,Z And Negative numbers not allowed : -4,-6,-9"
    );
  });
});
