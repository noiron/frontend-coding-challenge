function flat(arr, depth = 1) {
  if (depth <= 0) return arr.slice();

  return arr.reduce((acc, val) => {
    return acc.concat(Array.isArray(val) ? flat(val, depth - 1) : val);
  }, []);
}

const arr = [1, 2, [3, 4, [5, 6]]];

console.log(flat(arr, 1))
console.log(arr.flat(1));
