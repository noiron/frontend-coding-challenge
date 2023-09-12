模板字符串使用 `{{ something }}` 这样的语法，希望你能将其替换成具体的值。

举例：

```javascript
const template = `{{ name }} eats {{ food }}.`;
const data = {
  name: 'Anna',
  food: 'cake',
};

generate(template, data);
// 得到的结果：Anna eats cake.
```

实现这里的 `generate(template, data)` 函数。
