const promiseWithTimeout = (promise, ms) => {
  let timeoutId;

  const timeoutPromise = new Promise((resolve, reject) => {
    timeoutId = setTimeout(() => {
      reject(new Error('Promise timed out'));
    }, ms);
  });

  return Promise.race([promise, timeoutPromise]);
};

module.exports = promiseWithTimeout;
