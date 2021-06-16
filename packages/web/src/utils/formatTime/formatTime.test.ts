import formatTime from "./formatTime";

describe("formatTime function", () => {
  test("should format date correctly", () => {
    expect(formatTime(1722)).toBe("28:42");
    expect(formatTime(1443)).toBe("24:03");
    expect(formatTime(1813)).toBe("30:13");
    expect(formatTime(1745)).toBe("29:05");
    expect(formatTime(1409)).toBe("23:29");
  });
});
