import { InMemoryRepository } from "../../src/Repository/InMemoryRepository";
import { TTest } from "./TTest";

describe("InMemoryRepository", () => {
  const repo = new InMemoryRepository<TTest>();
  beforeAll(() => {
    repo.persist(new TTest());
  });

  it("should getBy key", async () => {
    const res = await repo.getBy("value", "test");

    expect(res).toHaveLength(1);
    expect(res[0].value).toBe("test");
  });

  it("should get empty getBy key", async () => {
    const res = await repo.getBy("value", "test2");

    expect(res).toHaveLength(0);
  });
});
