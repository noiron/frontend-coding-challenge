Function.prototype.myApply = function (context, args) {
  context.fn = this;

  let result;
  if (!args) {
    result = context.fn();
  } else {
    result = context.fn(...args);
  }

  delete context.fn;
  return result;
};
