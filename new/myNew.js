function myNew(fn, ...args) {
  const obj = {};
  Object.setPrototypeOf(obj, fn.prototype);
  const result = fn.apply(obj, args);
  return typeof result === 'object' ? result : obj;
}

module.exports = myNew;
