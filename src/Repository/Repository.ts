import { AggregateRoot, Identifier } from "@juandardilag/value-objects";

export interface Repository<T extends AggregateRoot>
  extends CreatorRepository<T>,
    ReaderRepository<T>,
    UpdaterRepository<T>,
    DeleterRepository {}

export interface CreatorRepository<T extends AggregateRoot> {
  persist(_: T): Promise<void>;
}

export interface ReaderRepository<T extends AggregateRoot> {
  getAll(): Promise<T[]>;
  get(id: Identifier<string | number>): Promise<T>;
  getBy(key: string, value: string): Promise<T>;
}

export interface UpdaterRepository<T extends AggregateRoot> {
  updateOne(_: T): Promise<void>;
}

export interface DeleterRepository {
  deleteOne(id: Identifier<string | number>): Promise<void>;
}
