const curry = (fn, ...args) => {
  // 如果传入的参数个数大于等于 fn 所需的参数个数，则直接执行 fn
  if (args.length >= fn.length) {
    return fn(...args);
  }
  // 如果传入的参数个数小于 fn 所需的参数个数
  // 则继续对当前函数进行柯里化，返回一个接收所有参数（当前参数和剩余参数）的新函数
  return (...args2) => curry(fn, ...args, ...args2);
};

module.exports = curry;
