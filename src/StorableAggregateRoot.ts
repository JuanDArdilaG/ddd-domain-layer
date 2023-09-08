import {
  AggregateRoot,
  IdentifierValueObject,
} from "@juandardilag/value-objects";
import { Repository } from "./Repository";

export abstract class StorableAggregateRoot extends AggregateRoot {
  constructor(
    _id: IdentifierValueObject<string>,
    private _repo: Repository<StorableAggregateRoot>
  ) {
    super(_id);
  }

  async persist(): Promise<void> {
    await this._repo.persist(this);
  }

  async update(): Promise<void> {
    await this._repo.updateOne(this);
  }

  async getAll(): Promise<StorableAggregateRoot[]> {
    return await this._repo.getAll();
  }

  async get(): Promise<StorableAggregateRoot> {
    return await this._repo.getByID(this._id);
  }
}
