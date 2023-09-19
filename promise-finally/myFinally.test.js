const myFinally = require('./myFinally');

describe('myFinally function', () => {
  it('onFinally should be called when fulfilled', async () => {
    const promise = Promise.resolve('Resolved');
    const finallyCallback = jest.fn();

    await myFinally(promise, finallyCallback);

    expect(finallyCallback).toHaveBeenCalled();
  });

  it('onFinally should be called when rejected', async () => {
    const promise = Promise.reject(new Error('Rejected'));
    const finallyCallback = jest.fn();

    try {
      await myFinally(promise, finallyCallback);
    } catch (error) {
      // Ignore the error
    }

    expect(finallyCallback).toHaveBeenCalled();
  });

  it('onFinally should not alter the fulfilled value', async () => {
    const promise = Promise.resolve('Resolved');
    const finallyCallback = () => 'Altered';

    const result = await myFinally(promise, finallyCallback);

    expect(result).toBe('Resolved');
  });

  it('onFinally should not alter the fulfilled value with promise', async () => {
    const promise = Promise.resolve('Resolved');
    const finallyCallback = () => Promise.resolve('Altered');

    const result = await myFinally(promise, finallyCallback);

    expect(result).toBe('Resolved');
  });

  it('if onFinally returns promise, it should be waited', async () => {
    const promise = Promise.resolve('Resolved');
    const finallyCallback = () => Promise.resolve('Altered');

    const result = await myFinally(promise, finallyCallback);

    expect(result).toBe('Resolved');
  });

  it('if onFinally rejects promise, it should be waited and used', async () => {
    const promise = Promise.reject(new Error('Rejected'));
    const finallyCallback = () => Promise.reject(new Error('Altered'));

    try {
      await myFinally(promise, finallyCallback);
    } catch (error) {
      expect(error.message).toBe('Altered');
    }
  });

  it('onFinally should not alter the rejection reason', async () => {
    const promise = Promise.reject(new Error('Rejected'));
    const finallyCallback = () => 'Altered';

    try {
      await myFinally(promise, finallyCallback);
    } catch (error) {
      expect(error.message).toBe('Rejected');
    }
  });

  it('throwing in onFinally should lead to rejection', async () => {
    const promise = Promise.resolve('Resolved');
    const finallyCallback = () => {
      throw new Error('Thrown in finally');
    };

    try {
      await myFinally(promise, finallyCallback);
    } catch (error) {
      expect(error.message).toBe('Thrown in finally');
    }
  });
});

