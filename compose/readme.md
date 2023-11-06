实现一个 `compose` 函数。它从右至左组合多个函数，例如 `compose(f, g, h)` 会得到 `(...args) => f(g(h(...args)))`。

```javascript
function fn1(x) {
  return x + 1;
}

function fn2(x) {
  return x + 2;
}

function fn3(x) {
  return x + 3;
}

function fn4(x) {
  return x + 4;
}

const a = compose(fn1, fn2, fn3, fn4);

console.log(a(1)); // 1 + 4 + 3 + 2 + 1 = 11
```
