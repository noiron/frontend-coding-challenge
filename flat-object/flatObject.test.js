const flatObject = require('./flatObject');
// const flatObject = require('./flatObject.blank');

describe('flatObject', () => {
  it('should flatten a nested object', () => {
    const obj = {
      a: 'a',
      b: [1, { c: true }, [3]],
      d: { e: undefined, f: 3 },
      g: null,
    };

    const result = flatObject(obj);

    const expected = {
      a: 'a',
      'b[0]': 1,
      'b[1].c': true,
      'b[2][0]': 3,
      'd.e': undefined,
      'd.f': 3,
      g: null,
    };

    expect(result).toEqual(expected);
  });

  it('should handle an empty object', () => {
    const obj = {};
    const result = flatObject(obj);

    expect(result).toEqual({});
  });

  it('should handle an object with no nested properties', () => {
    const obj = {
      name: 'John',
      age: 30,
    };

    const result = flatObject(obj);

    expect(result).toEqual(obj);
  });

  it('should handle an object with empty arrays and objects', () => {
    const obj = {
      emptyArray: [],
      emptyObject: {},
    };

    const result = flatObject(obj);

    expect(result).toEqual(obj);
  });
});
