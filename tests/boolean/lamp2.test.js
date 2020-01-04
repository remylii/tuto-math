const check = require("../../src/boolean/lamp2");

describe(`check()`, () => {
  it.each([
    [true, true, true],
    [true, false, false],
    [false, true, true],
    [false, false, true]
  ])(`return `, (a, b, expected) => {
    expect(check(a, b)).toBe(expected);
  });
});
