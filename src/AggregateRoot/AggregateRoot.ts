import { DomainEvent } from "../DomainEvent/DomainEvent";
import { IdentifierValueObject } from "@juandardilag/value-objects";

export abstract class AggregateRoot {
  private domainEvents: Array<DomainEvent>;

  constructor(protected _id: IdentifierValueObject<string>) {
    this.domainEvents = [];
  }

  get id(): IdentifierValueObject<string> {
    return this._id;
  }

  set id(id: IdentifierValueObject<string>) {
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
