require('./myBind');

function greet(name) {
  return `Hello, ${name}! My age is ${this.age}.`;
}

const person = {
  name: 'John',
  age: 30,
};

describe('Function.prototype.myBind', () => {
  it('should bind the function to the context', () => {
    const boundGreet = greet.myBind(person);
    expect(boundGreet('Alice')).toBe('Hello, Alice! My age is 30.');
  });

  it('should pass arguments to the bound function', () => {
    const boundGreet = greet.myBind(person);
    expect(boundGreet('Bob')).toBe('Hello, Bob! My age is 30.');
  });

  it('should allow partial application of arguments', () => {
    const boundGreet = greet.myBind(person, 'Charlie');
    expect(boundGreet()).toBe('Hello, Charlie! My age is 30.');
  });

  it('should preserve the original function', () => {
    const boundGreet = greet.myBind(person);
    expect(boundGreet('David')).toBe('Hello, David! My age is 30.');
    expect(greet('David')).toBe('Hello, David! My age is undefined.');
  });
});
