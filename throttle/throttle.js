function throttle(func, delay) {
  let inThrottle;

  return function () {
    if (inThrottle) return;

    func.apply(this, arguments);
    inThrottle = true;
    setTimeout(() => {
      inThrottle = false;
    }, delay);
  };
}

module.exports = throttle;
