class MyPromise {
  constructor(executor) {
    this.state = 'pending';
    this.value = undefined;
    this.reason = undefined;

    const resolve = (value) => {
      this.state = 'fulfilled';
      this.value = value;
    };

    const reject = (reason) => {
      this.state = 'rejected';
      this.reason = reason;
    };

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(onFulfilled, onRejected) {
    if (this.state === 'fulfilled') {
      onFulfilled(this.value);
    }
    if (this.state === 'rejected') {
      onRejected(this.reason);
    }
  }
}

// const p = new MyPromise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve(1);
//   }, 500);
// });
// p.then(function (x) {
//   console.log(x);
// });

module.exports = MyPromise;
