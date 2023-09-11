const myNew = require('./myNew');

function Person(name) {
  this.name = name;
}

describe('myNew function', () => {
  it('should create an instance of the constructor function', () => {
    const person = myNew(Person, 'Alice');
    expect(person instanceof Person).toBe(true);
  });

  it('should set the properties of the instance correctly', () => {
    const person = myNew(Person, 'Bob');
    expect(person.name).toBe('Bob');
  });

  it('should work with constructors that return objects', () => {
    function Car(make) {
      this.make = make;
      return { make: 'Toyota' };
    }

    const car = myNew(Car, 'Honda');
    expect(car instanceof Car).toBe(false);
    expect(car.make).toBe('Toyota');
  });

  it('should work with constructors that return primitives', () => {
    function NumberWrapper(value) {
      this.value = value;
      return 42;
    }

    const num = myNew(NumberWrapper, 7);
    expect(num instanceof NumberWrapper).toBe(true);
    expect(num.value).toBe(7);
  });
});
