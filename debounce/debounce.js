const debounce = (func, delay) => {
  let timeout;

  return function (...args) {
    const context = this;
    // 如果函数又被调用了，就清空之前的定时器，重新设置一个
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  };
};

module.exports = debounce;
