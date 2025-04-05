import { OperationType } from "../utils/Constants";

export class StatsTracker {
  private totalCalls: number = 0;
  private operationCalls: Record<OperationType, number> = {
    [OperationType.ADD]: 0,
  };

  recordCall(op: OperationType) {
    this.totalCalls++;
    this.operationCalls[op]++;
  }

  getTotalCalls(): number {
    return this.totalCalls;
  }

  getOperationCalls(op: OperationType | null): number {
    return op ? this.operationCalls[op] : this.getTotalCalls();
  }
}
