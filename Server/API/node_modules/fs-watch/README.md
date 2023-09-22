# fs-watch

修复mac中的fs.watch的限制

## 原理
在watch不能使用的地方，用watchFile来替换

## 用法

````js
var watch = require('../');

watch('./a.txt', function () {
  console.log('file is changed');
});

````


