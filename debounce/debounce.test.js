const debounce = require('./debounce');
// const debounce = require('./debounce.blank');

describe('debounce function', () => {
  jest.useFakeTimers(); // 使用Jest的模拟定时器功能

  it('should debounce a function call', () => {
    const mockFunction = jest.fn();
    const debouncedFunction = debounce(mockFunction, 200);

    // 调用debouncedFunction多次，但只希望最后一次调用真正执行
    debouncedFunction();
    debouncedFunction();
    debouncedFunction();

    // 快进到定时器等待时间结束
    jest.runAllTimers();

    // 只有一次调用应该被触发
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });

  it('should debounce a function call with the correct context and arguments', () => {
    const mockFunction = jest.fn();
    const debouncedFunction = debounce(mockFunction, 200);
    const context = { key: 'value' };
    const args = [1, 2, 3];

    // 调用debouncedFunction多次，但只希望最后一次调用真正执行
    debouncedFunction.apply(context, args);

    // 快进到定时器等待时间结束
    jest.runAllTimers();

    // 只有一次调用应该被触发
    expect(mockFunction).toHaveBeenCalledTimes(1);
    
    // 调用应该具有正确的上下文和参数
    expect(mockFunction).toHaveBeenCalledWith(...args);
    expect(mockFunction.mock.instances[0]).toBe(context);
  });
});
