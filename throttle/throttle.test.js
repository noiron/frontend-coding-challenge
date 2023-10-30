const throttle = require('./throttle');
// const throttle = require('./throttle.blank');

describe('throttle function', () => {
  jest.useFakeTimers(); // Use Jest's fake timers

  it('should throttle a function to be called once within the specified delay', () => {
    const callback = jest.fn();
    const throttled = throttle(callback, 1000);

    // First call, should execute immediately
    throttled();
    expect(callback).toHaveBeenCalledTimes(1);

    // Multiple consecutive calls, should only execute once within the delay time
    throttled();
    throttled();
    throttled();
    expect(callback).toHaveBeenCalledTimes(1);

    // Wait for the delay time to pass
    jest.advanceTimersByTime(1000);

    // Call again, should execute once more
    throttled();
    expect(callback).toHaveBeenCalledTimes(2);
  });

  it('should pass arguments and context correctly to the throttled function', () => {
    const callback = jest.fn();
    const context = { value: 42 };
    const throttled = throttle(callback, 1000);

    // Call and pass arguments and context
    throttled.call(context, 1, 2, 3);

    // Should execute immediately
    expect(callback).toHaveBeenCalledWith(1, 2, 3);
    expect(callback).toHaveBeenLastCalledWith(1, 2, 3);

    // Wait for the delay time to pass
    jest.advanceTimersByTime(1000);

    // Call again, ensure the context is still correct
    throttled();
    expect(callback).toHaveBeenLastCalledWith();
    expect(callback.mock.instances[0]).toBe(context);
  });
});
