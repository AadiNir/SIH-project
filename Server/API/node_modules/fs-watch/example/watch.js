var watch = require('../');

watch('./a.txt', function () {
  console.log('file is changed');
});