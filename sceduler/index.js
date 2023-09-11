class Scheduler {
  constructor(limit) {
    this.queue = [];
    this.limit = limit;
    this.runningCount = 0;
  }

  add(promiseCreator) {
    this.queue.push(promiseCreator);
    this.run();
  }

  run() {
    // 这里先判断下已经在运行的任务是否超出了限制
    if (!this.queue.length || this.runningCount >= this.limit) {
      return;
    }

    this.runningCount++;
    const currentTask = this.queue.shift();
    currentTask().then(() => {
      this.runningCount--;
      // 执行完一个任务后可以去执行其它任务
      this.run();
    });
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
