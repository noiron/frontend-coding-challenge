Function.prototype.myCall = function (context, ...rest) {
  context.fn = this;
  const result = context.fn(...rest);
  delete context.fn;
  return result;
};

// const obj = {
//   name: 'test',
// }

// function test(arg1, arg2, arg3) {
//   console.log(this.name);
//   console.log(arg1, arg2, arg3);
// }

// test.call(obj, 1, 2, 3);
// test.myCall(obj, 1, 2, 3);
