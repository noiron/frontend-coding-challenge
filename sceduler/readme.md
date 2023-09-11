实现一个带并发限制的异步调度器 Scheduler，保证同时运行的任务最多有两个。

```javascript
class Scheduler {
  add(promiseCreator) {
    // ...
  }
}

const timeout = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

const scheduler = new Scheduler(2);

const addTask = (time, order) => {
  scheduler.add(() => timeout(time).then(() => console.log(order)));
};

addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');

// 2
// 3
// 1
// 4
```
