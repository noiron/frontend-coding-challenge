const flat = require('./flat');

describe('flat function', () => {
  it('should flatten a shallow nested array', () => {
    const input = [1, 2, [3, 4], 5];
    const expected = [1, 2, 3, 4, 5];
    const result = flat(input);
    expect(result).toEqual(expected);
  });

  it('should flatten a deeply nested array', () => {
    const input = [1, [2, [3, [4, 5]]]];
    const expected = [1, 2, 3, 4, 5];
    const result = flat(input, Infinity);
    expect(result).toEqual(expected);
  });

  it('should return a copy of the original array when depth is 0', () => {
    const input = [1, 2, [3, 4], 5];
    const result = flat(input, 0);
    expect(result).toEqual(input.slice());
  });
});
