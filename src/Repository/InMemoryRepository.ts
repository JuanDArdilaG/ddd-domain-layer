import { AggregateRoot, Identifier } from "@juandardilag/value-objects";
import { Repository } from "./Repository";

export class InMemoryRepository<T extends AggregateRoot>
  implements Repository<T>
{
  protected _repo: T[] = [];

  async deleteOne(item: T): Promise<void> {
    this._repo = this._repo.filter((i) => i !== item);
  }

  async getAll(): Promise<T[]> {
    return this._repo;
  }

  async getBy(key: string, value: any): Promise<T> {
    const item = this._repo.find((i) => i.toPrimitives()[key] === value);
    if (!item) throw new Error("Item not found");
    return item;
  }

  async getByID(id: Identifier<string | number>): Promise<T> {
    const item = this._repo.find((i) => i.id === id);
    if (!item) throw new Error("Item not found");
    return item;
  }

  async persist(item: T): Promise<void> {
    this._repo.push(item);
  }

  async updateOne(item: T): Promise<void> {
    let id = -1;
    const find = this._repo.find((i, idx) => {
      if (i.id === item.id) {
        id = idx;
        return true;
      }
      return false;
    });
    if (!find) throw new Error("Item not found");
    this._repo[id] = item;
  }
}
