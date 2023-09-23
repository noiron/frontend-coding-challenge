实现 `bind`。

```javascript
Function.prototype.myBind = function(context, ...args) {
  // ...
}

const test = {
  name: "test",
  showName: function (last) {
    console.log(this.name + " is " + last);
  },
};

test.showName("handsome");
test.showName.bind({ name: "test2" })("handsome");
test.showName.bindNew({ name: "test2" })("handsome");
```
