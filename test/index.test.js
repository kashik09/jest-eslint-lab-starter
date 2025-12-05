const { capitalizeWords, filterActiveUsers, logAction } = require('../index')

test('capitalizeWords handles normal input', () => {
  expect(capitalizeWords('hello world')).toBe('Hello World');
});

test('capitalizeWords handles empty string', () => {
  expect(capitalizeWords('')).toBe('');
});

test('capitalizeWords handles special characters', () => {
  expect(capitalizeWords('hello-world')).toBe('Hello-World');
});

test('capitalizeWords handles single word', () => {
  expect(capitalizeWords('hello')).toBe('Hello');
});