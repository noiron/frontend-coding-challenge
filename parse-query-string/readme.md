给定一个 url，将其中的 query string 部分解析成一个对象。

```javascript
const url = 'http://www.domain.com/?user=admin&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';

parseQueryString(url);

/* 结果
{ user: 'admin',
  id: [ 123, 456 ], // 将重复出现的 key 按数组返回，能被转成数字的就转成数字类型
  city: '北京', // 中文需解码
  enabled: true, // 未指定值的 key 约定为 true
}
*/
```
