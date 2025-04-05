import { OperationType } from "../utils/Constants";
import { StringAddition } from "./operations/StringAddition";

export class OperationFactory {
  static getOperation(
    type: OperationType,
    delimeter: RegExp
  ): IStringOperation {
    switch (type) {
      case OperationType.ADD:
        return new StringAddition(delimeter);
      default:
        throw new Error("Invalid operation type");
    }
  }
}
