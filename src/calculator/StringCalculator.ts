import { OperationType } from "../utils/Constants";
import { OperationFactory } from "./OperationFactory";
import { StatsTracker } from "./StatsTracker";

export class StringCalculator {
  statsTracker: StatsTracker;
  constructor(statsTracker: StatsTracker) {
    this.statsTracker = statsTracker;
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

  getStatsAddCalls(): number {
    return this.statsTracker.getOperationCalls(OperationType.ADD);
  }
}
