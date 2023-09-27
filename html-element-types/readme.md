写一个函数 `htmlElementTypes()` 统计页面 `body` 中共有多少种标签。

如下结构应该返回3（div、p、span）。

```javascript
document.body.innerHTML = `
  <div></div>
  <div></div>
  <p></p>
  <p></p>
  <span></span>
`;
```
