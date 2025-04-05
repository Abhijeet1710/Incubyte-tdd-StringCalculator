import { OperationType } from "../utils/Constants";
import { OperationFactory } from "./OperationFactory";

export class StringCalculator {
  calculate(
    input: string,
    operation: OperationType,
    delimeter: RegExp = /[,\n]/
  ): string | number {
    const operator = OperationFactory.getOperation(operation, delimeter);
    return operator.operate(input);
  }
}
