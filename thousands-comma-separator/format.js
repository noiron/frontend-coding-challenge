function format(numberString) {
  // (?=...) 这个正则的主要部分包裹在正向查找中，匹配位置但不捕获
  // \B 表示匹配位置不在字符边界
  return numberString.replace(/\B(?=(\d{3})+(?!\d))/g,',')
}

module.exports = format;
