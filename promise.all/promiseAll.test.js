const promiseAll = require('./promiseAll');

describe('PromiseAll function', () => {
  it('should resolve an array of resolved promises', async () => {
    const promises = [
      Promise.resolve(1),
      Promise.resolve(2),
      Promise.resolve(3),
    ];

    const result = await promiseAll(promises);
    expect(result).toEqual([1, 2, 3]);
  });

  it('should reject if any promise in the array rejects', async () => {
    const promises = [
      Promise.resolve(1),
      Promise.reject('Error occurred'),
      Promise.resolve(3),
    ];

    await expect(promiseAll(promises)).rejects.toEqual('Error occurred');
  });

  it('should work with an empty array of promises', async () => {
    const promises = [];

    const result = await promiseAll(promises);
    expect(result).toEqual([]);
  });

  it('should maintain the order of resolved values', async () => {
    const promises = [
      new Promise((resolve) => setTimeout(() => resolve(1), 200)),
      new Promise((resolve) => setTimeout(() => resolve(2), 100)),
      new Promise((resolve) => setTimeout(() => resolve(3), 300)),
    ];

    const result = await promiseAll(promises);
    expect(result).toEqual([1, 2, 3]);
  });

  it('should reject with the first error if multiple promises reject', async () => {
    const promises = [
      new Promise((resolve) => setTimeout(() => resolve(1), 200)),
      new Promise((_, reject) => setTimeout(() => reject('Error 1'), 100)),
      new Promise((_, reject) => setTimeout(() => reject('Error 2'), 300)),
    ];

    await expect(promiseAll(promises)).rejects.toEqual('Error 1');
  });

  it('should return non-Promise values as-is', async () => {
    const promises = [Promise.resolve(1), 'hello', Promise.resolve(3), 42];

    const result = await promiseAll(promises);
    expect(result).toEqual([1, 'hello', 3, 42]);
  });
});
