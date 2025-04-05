import { StatsTracker } from "../src/calculator/StatsTracker";
import { StringCalculator } from "../src/calculator/StringCalculator";
import { OperationType } from "../src/utils/Constants";

describe("StatsTracker : Calculations", () => {
  let stringCalculator: StringCalculator;

  beforeEach(() => {
    stringCalculator = StringCalculator.getInstance(new StatsTracker());
  });

  it("Should return 0 for no calls so far", () => {
    expect(stringCalculator.getOperationCalls(OperationType.ADD)).toBe(0);
  });

  it("Should return n add calls, after calling calculate for ADD n times", () => {
    stringCalculator.calculate("1,4", OperationType.ADD);
    stringCalculator.calculate("1,4,5", OperationType.ADD);
    stringCalculator.calculate("1,4\n10", OperationType.ADD);

    expect(stringCalculator.getOperationCalls(OperationType.ADD)).toBe(3);
  });

  it("Should return n total calls, after calling calculate n times for any operation", () => {
    stringCalculator.calculate("1,4", OperationType.ADD);
    stringCalculator.calculate("1,4,5", OperationType.ADD);
    stringCalculator.calculate("1,4\n10", OperationType.ADD);
    stringCalculator.calculate("1,4", OperationType.ADD);
    stringCalculator.calculate("1,4,5", OperationType.ADD);
    stringCalculator.calculate("1,4\n10", OperationType.ADD);

    expect(stringCalculator.getOperationCalls(null)).toBe(9);
  });
});
