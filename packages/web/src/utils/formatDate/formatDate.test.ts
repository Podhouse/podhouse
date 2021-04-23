import formatDate from "./formatDate";

describe("formatDate function", () => {
  test("should format date correctly", () => {
    expect(formatDate(1617098400)).toBe("30 Mar 2021");
    expect(formatDate(1619171188)).toBe("23 Apr 2021");
    expect(formatDate(1619084750)).toBe("22 Apr 2021");
    expect(formatDate(1618998513)).toBe("21 Apr 2021");
    expect(formatDate(1618911900)).toBe("20 Apr 2021");
  });
});
