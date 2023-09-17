import {
  AggregateRoot,
  IdentifierValueObject,
} from "@juandardilag/value-objects";
import { Repository } from "./Repository/Repository";

export abstract class StorableAggregateRoot extends AggregateRoot {
  constructor(
    _id: IdentifierValueObject<string>,
    readonly repo: Repository<AggregateRoot>
  ) {
    super(_id);
  }
}
