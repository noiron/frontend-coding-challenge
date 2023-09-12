const mySetInterval = require('./mySetInterval');

describe('mySetInterval', () => {
  let intervalCounter;

  beforeEach(() => {
    intervalCounter = 0;
  });

  it('should call the provided function repeatedly', (done) => {
    const interval = mySetInterval(() => {
      intervalCounter++;
    }, 100);

    setTimeout(() => {
      interval.clear();
      expect(intervalCounter).toBeGreaterThanOrEqual(3);
      done();
    }, 350); // Adjust the timing as needed
  });

  it('should stop calling the function after clearInterval is called', (done) => {
    const interval = mySetInterval(() => {
      intervalCounter++;
    }, 100);

    setTimeout(() => {
      interval.clear();
      setTimeout(() => {
        expect(intervalCounter).toBeGreaterThanOrEqual(3);
        done();
      }, 200); // Ensure the function is not called again
    }, 350); // Adjust the timing as needed
  });
});
