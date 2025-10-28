// https://archive.jestjs.io/docs/en/22.x/getting-started

const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});