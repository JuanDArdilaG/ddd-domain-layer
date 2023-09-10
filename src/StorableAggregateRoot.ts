import {
  AggregateRoot,
  IdentifierValueObject,
} from "@juandardilag/value-objects";
import { Repository } from "./Repository/Repository";

export abstract class StorableAggregateRoot extends AggregateRoot {
  constructor(
    _id: IdentifierValueObject<string>,
    private _repo: Repository<AggregateRoot>
  ) {
    super(_id);
  }

  async persist(): Promise<void> {
    await this._repo.persist(this);
  }

  async update(): Promise<void> {
    await this._repo.updateOne(this);
  }

  async getAll(): Promise<AggregateRoot[]> {
    return await this._repo.getAll();
  }

  async get(): Promise<AggregateRoot> {
    return await this._repo.getByID(this._id);
  }
}
