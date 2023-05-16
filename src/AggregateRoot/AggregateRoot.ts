import { DomainEvent } from "../DomainEvent/DomainEvent";
import { IdentifierValueObject } from "@juandardilag/value-objects";

export abstract class AggregateRoot {
  private domainEvents: Array<DomainEvent>;

  constructor(protected _id: IdentifierValueObject) {
    this.domainEvents = [];
  }

  get id(): IdentifierValueObject {
    return this._id;
  }

  set id(id: IdentifierValueObject) {
    this._id = id;
  }

  pullDomainEvents(): Array<DomainEvent> {
    const domainEvents = this.domainEvents.slice();
    this.domainEvents = [];

    return domainEvents;
  }

  record(event: DomainEvent): void {
    this.domainEvents.push(event);
  }

  abstract toPrimitives(): any;
  abstract fromPrimitives(instance: any): AggregateRoot;
}
