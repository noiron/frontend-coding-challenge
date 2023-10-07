const promiseWithTimeout = require('./promiseWithTimeout');
// const promiseWithTimeout = require('./promiseWithTimeout.blank');

describe('promiseWithTimeout function', () => {
  it('should return the original promise if it resolves before the timeout', async () => {
    const promise = new Promise((resolve) => {
      setTimeout(() => resolve('Resolved!'), 100);
    });

    const result = await promiseWithTimeout(promise, 200);

    expect(result).toBe('Resolved!');
  });

  it('should return a timeout error if the promise does not resolve before the timeout', async () => {
    const promise = new Promise(() => {
      // This promise will never resolve
    });

    try {
      await promiseWithTimeout(promise, 100);
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
      expect(err.message).toBe('Promise timed out');
    }
  });

  it('should work with promises that reject before the timeout', async () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error('Promise rejected')), 100);
    });

    try {
      await promiseWithTimeout(promise, 200);
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
      expect(err.message).toBe('Promise rejected');
    }
  });

  // Add more test cases as needed...
});
