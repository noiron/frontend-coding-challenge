require('./myApply');

describe('myApply function', () => {
  it('should call the function with the specified context and arguments', () => {
    const obj = {
      value: 42,
    };

    function add(a, b) {
      return this.value + a + b;
    }

    // Call add function using myApply, specify the context as obj, and pass an array of arguments
    const result = add.myApply(obj, [5, 7]);

    expect(result).toBe(54);
  });

  it('should work with an empty array of arguments', () => {
    const obj = {
      value: 10,
    };

    function getValue() {
      return this.value;
    }

    // Call getValue function using myApply with an empty array of arguments
    const result = getValue.myApply(obj, []);

    expect(result).toBe(10);
  });

  it('should work with functions that do not expect arguments', () => {
    const obj = {
      value: 100,
    };

    function getValue() {
      return this.value;
    }

    // Call getValue function using myApply without passing arguments
    const result = getValue.myApply(obj, null);

    expect(result).toBe(100);
  });

  // it('should work with functions that return a value without context', () => {
  //   function getAnswer() {
  //     return 42;
  //   }

  //   // Call getAnswer function using myApply without specifying a context
  //   const result = getAnswer.myApply(null, []);

  //   expect(result).toBe(42);
  // });

});
