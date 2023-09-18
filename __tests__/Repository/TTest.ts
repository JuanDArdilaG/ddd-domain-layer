import { AggregateRoot, UUIDValueObject } from "@juandardilag/value-objects";

export class TTest extends AggregateRoot {
  value: string;
  other: number;
  constructor() {
    super(UUIDValueObject.random());
    this.value = "test";
    this.other = 1;
  }
  fromPrimitives(_: any): AggregateRoot {
    throw new Error("Method not implemented.");
  }
  toPrimitives() {
    return {
      value: this.value,
      other: this.other,
    };
  }
}
