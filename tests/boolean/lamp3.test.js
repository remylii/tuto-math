const check = require("../../src/boolean/lamp3");

describe(`lamp3 check()`, () => {
  it.each([
    [true, true, true, true],
    [true, true, false, false],
    [true, false, false, false],
    [false, true, true, true],
    [false, true, false, true],
    [false, false, true, true],
    [false, false, false, true]
  ])(`return `, (a, b, c, expected) => {
    const res = check(a, b, c);
    expect(res).toBe(expected);
  });
});
