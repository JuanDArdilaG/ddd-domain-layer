"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TTest = void 0;
const value_objects_1 = require("@juandardilag/value-objects");
class TTest extends value_objects_1.AggregateRoot {
    constructor() {
        super(value_objects_1.UUIDValueObject.random());
        this.value = "test";
        this.other = 1;
    }
    fromPrimitives(_) {
        throw new Error("Method not implemented.");
    }
    toPrimitives() {
        return {
            value: this.value,
            other: this.other,
        };
    }
}
exports.TTest = TTest;
