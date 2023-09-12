function myInstanceof(left, right) {
  while (left) {
    left = Object.getPrototypeOf(left);
    if (left === right.prototype) return true;
  }
  return false;
}

module.exports = myInstanceof;
