// https://archive.jestjs.io/docs/en/22.x/getting-started

const calculator = require('./sum');

test('test adding method', () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.add(2, -2)).toBe(0);
});

test('test multiplication method', () => {
  expect(calculator.multiplication(2, -2)).toBe(-4);
  expect(calculator.multiplication(-2, -2)).toBe(4);
});


test('test division to throw error', () => {
  expect(() => calculator.division(1,0)).toThrow("Cannot divide by zero");
});

test('division test part 2 ', () => { 
  expect(calculator.division(4,2)).toBe(2);
})

test('subtraction test', () => {
  expect(calculator.sub(5,3)).toBe(2);
});