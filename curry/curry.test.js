const curry = require('./curry');

function add1(x, y, z) {
  return x + y + z;
}

const add = curry(add1);

describe('curry function', () => {
  it('should return the correct result when called with multiple arguments', () => {
    const result1 = add(1, 2, 3);
    expect(result1).toBe(6);
  });

  it('should return the correct result when called with curried arguments', () => {
    const result2 = add(1)(2)(3);
    expect(result2).toBe(6);

    const result3 = add(1, 2)(3);
    expect(result3).toBe(6);

    const result4 = add(1)(2, 3);
    expect(result4).toBe(6);
  });

  it('should work with different argument orders', () => {
    const result1 = add(1)(2)(3);
    expect(result1).toBe(6);

    const result2 = add(1)(3)(2);
    expect(result2).toBe(6);

    const result3 = add(3)(1)(2);
    expect(result3).toBe(6);
  });

  it('should return a curried function when not all arguments are provided', () => {
    const curriedFunction = add(1);
    expect(typeof curriedFunction).toBe('function');

    const result = curriedFunction(2)(3);
    expect(result).toBe(6);
  });
});
