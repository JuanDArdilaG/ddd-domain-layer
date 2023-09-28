import { InMemoryRepository } from "../../src/Repository/InMemoryRepository";
import { TTest } from "./TTest";

describe("InMemoryRepository", () => {
  const repo = new InMemoryRepository<TTest>(TTest.empty());
  beforeAll(() => {
    repo.persist(new TTest("test", 1));
  });

  it("should getBy key", async () => {
    const res = await repo.getBy("value", "test");

    expect(res.value).toBe("test");
  });

  it("should get empty getBy key", async () => {
    expect(repo.getBy("value", "test2")).rejects.toThrowError();
  });
});
