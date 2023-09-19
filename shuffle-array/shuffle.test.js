const shuffle = require('./shuffle');

describe('shuffle function', () => {
  it('should return an array with the same length', () => {
    const input = [1, 2, 3, 4, 5];
    const originalLength = input.length;
    shuffle(input);
    expect(input).toHaveLength(originalLength);
  });

  it('should return an array with the same elements', () => {
    const input = [1, 2, 3, 4, 5];
    const originalInput = [...input];
    shuffle(input);
    originalInput.forEach((item) => {
      expect(input).toContain(item);
    });
  });

  it('should return a different order of elements', () => {
    const input = [1, 2, 3, 4, 5];
    const originalOrder = [...input];
    shuffle(input);
    expect(input).not.toEqual(originalOrder);
  });

});
