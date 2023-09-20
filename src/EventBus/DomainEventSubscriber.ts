import { DomainEvent, DomainEventClass } from "@juandardilag/value-objects";

export interface DomainEventSubscriber<T extends DomainEvent> {
  subscribedTo(): Array<DomainEventClass>;
  on(domainEvent: T): Promise<void>;
}
