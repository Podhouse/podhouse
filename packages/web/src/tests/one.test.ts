describe("Should sum", () => {
  it("should sum correctly", () => {
    const sum = (a: number, b: number) => a + b;

    expect(sum(2, 2)).toBe(4);
  });
});
