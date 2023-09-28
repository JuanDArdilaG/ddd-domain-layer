import { AggregateRoot, UUIDValueObject } from "@juandardilag/value-objects";

export class TTest extends AggregateRoot {
  constructor(readonly value: string, readonly other: number) {
    super(UUIDValueObject.random());
  }

  static empty(): TTest {
    return new TTest("", 0);
  }

  fromPrimitives(body: any): TTest {
    return new TTest(body.value as string, body.other as number);
  }

  toPrimitives() {
    return {
      value: this.value,
      other: this.other,
    };
  }
}
