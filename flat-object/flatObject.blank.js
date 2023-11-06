function flatObject(obj) {

}

const obj = {
  a: 'a',
  b: [1, { c: true }, [3]],
  d: { e: undefined, f: 3 },
  g: null,
};

console.log(flatObject(obj));

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
