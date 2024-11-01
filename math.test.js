
const sum = require('./math');

test('soma dois números positivos', () => {
  expect(sum(2, 3)).toBe(5);
});

test('soma dois números negativos', () => {
  expect(sum(-2, -3)).toBe(-5);
});

test('soma um número positivo com zero', () => {
  expect(sum(5, 0)).toBe(5);
});
