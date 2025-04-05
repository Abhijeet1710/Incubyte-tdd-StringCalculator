import { OperationType } from "../utils/Constants";
import { OperationFactory } from "./OperationFactory";
import { StatsTracker } from "./StatsTracker";

export class StringCalculator {
  private static instance: StringCalculator;
  private statsTracker: StatsTracker;

  private constructor(statsTracker: StatsTracker) {
    this.statsTracker = statsTracker;
  }

  public static getInstance(statsTracker: StatsTracker): StringCalculator {
    if (!StringCalculator.instance)
      StringCalculator.instance = new StringCalculator(statsTracker);
    return StringCalculator.instance;
  }

  calculate(
    input: string,
    operation: OperationType,
    delimeter: RegExp = /[,\n]/
  ): string | number {
    this.statsTracker.recordCall(operation);

    const operator = OperationFactory.getOperation(operation, delimeter);
    return operator.operate(input);
  }

  getOperationCalls(operation: OperationType | null): number {
    return this.statsTracker.getOperationCalls(operation);
  }
}
