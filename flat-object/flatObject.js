function flatObject(obj) {
  const res = {};
  flat(obj);
  return res;

  function flat(item, prevKey = '') {
    const entries = Object.entries(item);

    // flat({}, 'emptyObj')
    if (entries.length === 0) {
      if (prevKey) {
        res[prevKey] = item;
      }
    }

    Object.entries(item).forEach(([key, value]) => {
      let newKey = key;

      // 处理至 obj.b = [1, 2, 3] 时，此时调用的是 flat(obj.b, 'b')
      // item = obj.b = [1, 2, 3], prevKey = 'b'
      if (Array.isArray(item)) {
        newKey = `${prevKey}[${key}]`;
      } else {
        newKey = prevKey ? `${prevKey}.${key}` : key;
      }

      if (value !== null && typeof value === 'object') {
        flat(value, newKey);
      } else {
        res[newKey] = value;
      }
    });
  }
}

// const obj = {
//   a: 'a',
//   b: [1, { c: true }, [3]],
//   d: { e: undefined, f: 3 },
//   g: null,
// };

// console.log(flatObject(obj));

// {
//   a: 'a',
//   'b[0]': 1,
//   'b[1].c': true,
//   'b[2][0]': 3,
//   'd.e': undefined,
//   'd.f': 3,
//   g: null
// }

module.exports = flatObject;

// https://leetcode.cn/circle/discuss/c2Qriu/
