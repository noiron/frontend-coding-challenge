实现函数的柯里化。

```javascript
const curry = (fn, ...args) => {
  // ...
};

function add1(x, y, z) {
  return x + y + z;
}
const add = curry(add1);

console.log(add(1, 2, 3));
console.log(add(1)(2)(3));
console.log(add(1, 2)(3));
console.log(add(1)(2, 3));
```
