import { AggregateRoot, Identifier } from "@juandardilag/value-objects";

export interface Repository<T extends AggregateRoot>
  extends CreatorRepository<T>,
    ReaderRepository<T>,
    UpdaterRepository<T>,
    DeleterRepository<T> {}

export interface CreatorRepository<T extends AggregateRoot> {
  persist(_: T): Promise<void>;
}

export interface ReaderRepository<T extends AggregateRoot> {
  getAll(): Promise<T[]>;
  getByID(id: Identifier<string | number>): Promise<T>;
  getBy(key: string, value: any): Promise<T[]>;
}

export interface UpdaterRepository<T extends AggregateRoot> {
  updateOne(_: T): Promise<void>;
}

export interface DeleterRepository<T extends AggregateRoot> {
  deleteOne(_: T): Promise<void>;
}
