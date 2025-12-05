const { capitalizeWords, filterActiveUsers, logAction } = require('../index')

test('capitalizeWords handles normal input', () => {
  expect(capitalizeWords('hello world')).toBe('Hello World');
});