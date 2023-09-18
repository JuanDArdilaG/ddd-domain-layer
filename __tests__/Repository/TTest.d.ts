import { AggregateRoot } from "@juandardilag/value-objects";
export declare class TTest extends AggregateRoot {
    value: string;
    other: number;
    constructor();
    fromPrimitives(_: any): AggregateRoot;
    toPrimitives(): {
        value: string;
        other: number;
    };
}
