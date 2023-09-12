const myInstanceof = require('./myInstanceof');

class Animal {}
class Dog extends Animal {}

describe('myInstanceof function', () => {
  it('should return true when an object is an instance of its constructor', () => {
    const animal = new Animal();
    expect(myInstanceof(animal, Animal)).toBe(true);
  });

  it('should return true when an object is an instance of a parent constructor', () => {
    const dog = new Dog();
    expect(myInstanceof(dog, Animal)).toBe(true);
  });

  it('should return false when an object is not an instance of a constructor', () => {
    const animal = new Animal();
    expect(myInstanceof(animal, Dog)).toBe(false);
  });

  it('should return false when an object is not an instance of its constructor', () => {
    const obj = {};
    expect(myInstanceof(obj, Animal)).toBe(false);
  });

  it('should handle null and undefined values', () => {
    expect(myInstanceof(null, Animal)).toBe(false);
    expect(myInstanceof(undefined, Animal)).toBe(false);
  });
});
