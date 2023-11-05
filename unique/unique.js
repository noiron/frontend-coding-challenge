function unique(arr) {
  return arr.filter((value, index) => index === arr.indexOf(value));
}

module.exports = unique;
