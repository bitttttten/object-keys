import { expect, describe, it } from "vitest";
import { objectKeys } from ".";

describe("object keys", () => {
  it("handles simple object", () => {
    expect(objectKeys({ a: 1, b: 2 })).toEqual(["a", "b"]);
  });

  it("handles deeply nested object", () => {
    expect(objectKeys({ a: 1, b: { c: 1, d: { e: 1, f: {} } } })).toEqual([
      "a",
      "b",
    ]);
  });

  it("handles empty object", () => {
    expect(objectKeys({})).toEqual([]);
  });

  it("handles array", () => {
    expect(objectKeys([])).toEqual([]);
  });
});
