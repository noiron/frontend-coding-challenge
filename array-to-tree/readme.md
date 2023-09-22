现有如下的数组结构，请将其转换成树结构。返回值可以是一个对象：`{ id: 0, name: 'root', children: []}`。

```javascript
const arr = [
  {
    id: 2,
    name: 'B',
    parentId: 0,
  },
  {
    id: 3,
    name: 'C',
    parentId: 1,
  },
  {
    id: 1,
    name: 'A',
    parentId: 2,
  },
  {
    id: 4,
    name: 'D',
    parentId: 1,
  },
  {
    id: 5,
    name: 'E',
    parentId: 2,
  },
  {
    id: 6,
    name: 'F',
    parentId: 3,
  },
  {
    id: 7,
    name: 'G',
    parentId: 2,
  },
  {
    id: 8,
    name: 'H',
    parentId: 4,
  },
];

function arrayToTree(arr) {

}
```

这是转换完成后的树的样子

```
            B
       /    |    \
      A     E     G
    /   \
   C     D
   |     |
   F     H
```
