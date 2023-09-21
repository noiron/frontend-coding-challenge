实现 `promisify` 函数，将一个接收回调函数的函数转换成一个返回 promise 的函数。

```javascript
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  document.head.append(script);
}

function promisify(f) {
  // ...
}


let loadScriptPromise = promisify(loadScript);
loadScriptPromise(...).then(...);
```

---

> 参考：https://javascript.info/promisify
