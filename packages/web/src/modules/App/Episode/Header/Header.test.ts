import { Route } from "react-router-dom";

const sum = (a: number, b: number): number => a + b;

describe("Episode Header", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
