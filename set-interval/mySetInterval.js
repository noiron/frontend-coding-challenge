function mySetInterval(fn, ms) {
  let timer = null;

  function repeat() {
    fn();
    timer = setTimeout(repeat, ms);
  }

  timer = setTimeout(repeat, ms);

  return {
    clear: () => clearTimeout(timer),
  };
}

// const { clear } = mySetInterval(() => {
//   console.log('Hello World');
// }, 1000);

// setTimeout(() => {
//   clear();
// }, 5500);

module.exports = mySetInterval;
