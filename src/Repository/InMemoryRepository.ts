import { AggregateRoot, Identifier } from "@juandardilag/value-objects";
import { Repository } from "./Repository";

export class InMemoryRepository<T extends AggregateRoot>
  implements Repository<T>
{
  protected _repo: Record<string, any>[] = [];
  constructor(protected _example: T) {}

  async deleteOne(id: Identifier<string | number>): Promise<void> {
    this._repo = this._repo.filter((i) => i.id.valueOf() === id.valueOf());
  }

  async getAll(): Promise<T[]> {
    return this._repo.map((i) => this._example.fromPrimitives(i)) as T[];
  }

  async getBy(key: string, value: any): Promise<T> {
    const item = this._repo.find((i) => i[key] === value);
    if (!item) throw new Error("Item not found");
    return this._example.fromPrimitives(item) as T;
  }

  async get(id: Identifier<string | number>): Promise<T> {
    const item = this._repo.find((i) => i.id === id);
    if (!item) throw new Error("Item not found");
    return this._example.fromPrimitives(item) as T;
  }

  async persist(item: T): Promise<void> {
    this._repo.push(item.toPrimitives());
  }

  async updateOne(item: T): Promise<void> {
    let _id = 0;
    const find = this._repo.find((i, idx) => {
      if (i.id.valueOf() === item.id.valueOf()) {
        _id = idx;
        return true;
      }
      return false;
    });
    if (!find) throw new Error("Item not found");
    this._repo[_id] = item.toPrimitives();
  }
}
