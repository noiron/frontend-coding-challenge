实现会超时的 Promise，如果在给定的时间里 promise 没有返回，就返回一个 reject 的 promise。这个 reject 的 promise 的 reason 应该是 `new Error('Promise timed out')`。

```javascript
const promiseWithTimeout = (promise, ms) => {

};
```
