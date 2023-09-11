const Scheduler = require('./scheduler');

const timeout = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

describe('Scheduler class', () => {
  it('should execute tasks with the specified limit', async () => {
    const scheduler = new Scheduler(2);
    const results = [];
    
    const addTask = (time, order) => {
      scheduler.add(() => timeout(time).then(() => results.push(order)));
    };
    
    addTask(1000, '1');
    addTask(500, '2');
    addTask(300, '3');
    addTask(400, '4');
    
    // Wait for all tasks to complete
    await timeout(2000);
    
    expect(results).toEqual(['2', '3', '1', '4']);
  });

  it('should execute tasks with a limit of 1', async () => {
    const scheduler = new Scheduler(1);
    const results = [];
    
    const addTask = (time, order) => {
      scheduler.add(() => timeout(time).then(() => results.push(order)));
    };
    
    addTask(1000, '1');
    addTask(500, '2');
    addTask(300, '3');
    addTask(400, '4');
    
    // Wait for all tasks to complete
    await timeout(3000);
    
    expect(results).toEqual(['1', '2', '3', '4']);
  });
});
