function promiseAll(promises) {
  const results = [];
  let count = 0;

  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      resolve([]);
    }

    const checkComplete = () => {
      count++;
      if (count === promises.length) {
        resolve(results);
      }
    };

    for (let i = 0; i < promises.length; i++) {
      const promise = promises[i];
      if (promise instanceof Promise) {
        promise.then(
          (res) => {
            results[i] = res;
            checkComplete();
          },
          (err) => {
            reject(err);
          }
        );
      } else {
        // 如果传入一个非 promise 元素，希望将该元素原样返回
        results[i] = promise;
        checkComplete();
      }
    }
  });
}

module.exports = promiseAll;
