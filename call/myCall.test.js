require('./myCall.js');

describe('myCall function', () => {
  it('should call the function with the specified context', () => {
    const obj = {
      value: 42,
    };

    function getValue() {
      return this.value;
    }

    // Call getValue function using myCall and specify the context as obj
    const result = getValue.myCall(obj);

    expect(result).toBe(42);
  });

  it('should pass arguments to the called function', () => {
    function add(a, b) {
      return this.value + a + b;
    }

    const obj = {
      value: 10,
    };

    // Call add function using myCall, specify the context as obj, and pass two arguments
    const result = add.myCall(obj, 5, 7);

    expect(result).toBe(22);
  });

  it('should work with built-in methods', () => {
    const arr = [1, 2, 3];

    // Call the push method of the array using myCall and pass one element
    Array.prototype.push.myCall(arr, 4);

    expect(arr).toEqual([1, 2, 3, 4]);
  });
});