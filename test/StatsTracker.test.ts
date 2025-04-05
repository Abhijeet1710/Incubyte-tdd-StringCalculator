import { StatsTracker } from "../src/calculator/StatsTracker";
import { StringCalculator } from "../src/calculator/StringCalculator";
import { OperationType } from "../src/utils/Constants";

describe("StatsTracker : Calculations", () => {
  let stringCalculator: StringCalculator;

  beforeEach(() => {
    stringCalculator = new StringCalculator(new StatsTracker());
  });

  it("should return 0 for no calls so far", () => {
    expect(stringCalculator.getStatsAddCalls()).toBe(0);
  });
});
