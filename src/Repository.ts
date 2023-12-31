import { IIdentifier } from "@juandardilag/value-objects";
import { AggregateRoot } from "./AggregateRoot/AggregateRoot";

export interface Repository<T extends AggregateRoot> {
  persist(aggregateRoot: T): Promise<void>;
  updateOne(aggregateRoot: T): Promise<void>;
  getAll(): Promise<T[]>;
  getByID(id: IIdentifier): Promise<T>;
}
