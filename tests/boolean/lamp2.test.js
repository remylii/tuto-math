const check = require("../../src/boolean/lamp2");

test(`Blue: true, Yellow: true should return true`, () => {
  const blue = true;
  const yellow = true;
  expect(check(blue, yellow)).toBe(true);
});
