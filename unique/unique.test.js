const unique = require('./unique');

describe('unique', () => {
  it('should remove duplicate values from an array', () => {
    const arr = [1, 2, 2, 3, 4, 4, 5];
    const result = unique(arr);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle an empty array', () => {
    const arr = [];
    const result = unique(arr);
    expect(result).toEqual([]);
  });

  it('should handle an array with no duplicate values', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = unique(arr);
    expect(result).toEqual(arr);
  });

  it('should handle an array with mixed data types', () => {
    const arr = [1, 'two', 2, 'three', 3, 4, 5];
    const result = unique(arr);
    expect(result).toEqual([1, 'two', 2, 'three', 3, 4, 5]);
  });
});
