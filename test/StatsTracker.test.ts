import { StringCalculator } from "../src/calculator/StringCalculator";
import { OperationType } from "../src/utils/Constants";

describe("StatsTracker : Calculations", () => {
  let stringCalculator: StringCalculator;

  beforeEach(() => {
    stringCalculator = new StringCalculator();
  });

  it("should return 0 for an empty string", () => {
    expect(stringCalculator.getStatsAddCalls()).toBe(0);
  });
});
