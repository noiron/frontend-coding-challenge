function camelToDash(str) {
  // 匹配一个小写字母后面跟着一个大写字母的情况
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

function dashToCamel(str) {
  return str.replace(/-(\w)/g, (match, letter) => letter.toUpperCase());
}

module.exports = {
  camelToDash,
  dashToCamel,
};
