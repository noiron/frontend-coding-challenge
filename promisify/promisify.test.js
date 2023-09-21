const promisify = require('./promisify');

// 模拟的异步函数，用于测试
function asyncFunction(value, callback) {
  setTimeout(() => {
    callback(null, value);
  }, 100);
}

describe('promisify function', () => {
  it('should return a function', () => {
    const promisifiedFn = promisify(asyncFunction);
    expect(typeof promisifiedFn).toBe('function');
  });

  it('should resolve with the result when the original function succeeds', async () => {
    const promisifiedFn = promisify(asyncFunction);
    const result = await promisifiedFn('Success');
    expect(result).toBe('Success');
  });

  it('should reject with an error when the original function fails', async () => {
    const errorFn = (value, callback) => {
      setTimeout(() => {
        callback(new Error('Failed'));
      }, 100);
    };

    const promisifiedFn = promisify(errorFn);

    try {
      await promisifiedFn('Failure');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe('Failed');
    }
  });

});
