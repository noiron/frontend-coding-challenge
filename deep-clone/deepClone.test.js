const deepClone = require('./deepClone');
// const deepClone = require('./deepClone.blank');

describe('deepClone function', () => {
  it('should deep clone an object', () => {
    const originalObj = {
      name: 'Alice',
      age: 30,
      address: {
        city: 'New York',
        zip: '10001',
      },
    };

    const clonedObj = deepClone(originalObj);

    // 修改克隆对象不应影响原始对象
    clonedObj.age = 31;
    clonedObj.address.city = 'Los Angeles';

    expect(originalObj.age).toBe(30);
    expect(originalObj.address.city).toBe('New York');
  });

  it('should deep clone an array', () => {
    const originalArr = [1, 2, [3, 4], { key: 'value' }];

    const clonedArr = deepClone(originalArr);

    // 修改克隆数组不应影响原始数组
    clonedArr[2][0] = 99;
    clonedArr[3].key = 'new value';

    expect(originalArr[2][0]).toBe(3);
    expect(originalArr[3].key).toBe('value');
  });

  it('should handle null and non-object values', () => {
    const nullValue = null;
    const stringValue = 'Hello, world!';
    const numberValue = 42;

    expect(deepClone(nullValue)).toBe(nullValue);
    expect(deepClone(stringValue)).toBe(stringValue);
    expect(deepClone(numberValue)).toBe(numberValue);
  });

  it('should deep clone an object with circular reference', () => {
    const originalObj = {
      name: 'Alice',
    };
    originalObj.self = originalObj; // 添加循环引用

    const clonedObj = deepClone(originalObj);

    // 修改克隆对象不应影响原始对象
    clonedObj.name = 'Bob';

    expect(originalObj.name).toBe('Alice');
    expect(clonedObj.name).toBe('Bob');
    expect(clonedObj.self).toBe(clonedObj); // 验证克隆对象的循环引用
  });
});
