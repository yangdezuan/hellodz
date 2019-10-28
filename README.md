# 一个简单的hello插件
学习npm插件第一步
# 控制脚本延迟的脚本
```js
function sleep(long) {
  var start = Date.now()
  while (Date.now() - start < long) {}
  console.log('finish!')
}
```
