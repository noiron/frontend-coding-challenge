Function.prototype.myBind = function (context, ...args) {
  return (...newArgs) => this.apply(context, [...args, ...newArgs]);
};

// const test = {
//   name: "test",
//   showName: function (last) {
//     console.log(this.name + " is " + last);
//   },
// };

// test.showName("handsome");
// test.showName.bind({ name: "test2" })("handsome");
// test.showName.myBind({ name: "test2" })("handsome");

module.exports = {};
