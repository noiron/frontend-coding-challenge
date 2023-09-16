function format(numberString) {
  let [integer, fraction] = numberString.split('.');

  integer = integer.replace(/(\d)(?=(\d{3})+$)/g, '$1,');

  if (fraction === undefined) return integer;
  return integer + '.' + fraction;
}

module.exports = format;

// 另一种实现
// (?=...) 这个正则的主要部分包裹在正向查找中，匹配位置但不捕获
// \B 表示匹配位置不在字符边界
// return numberString.replace(/\B(?=(\d{3})+(?!\d))/g,',')
