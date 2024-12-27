const { sum, wordpair } = require('./sum'); 

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('returns even-length words from a string', () => {
  expect(wordpair('hello mohameed')).toBe('mohameed');
});
