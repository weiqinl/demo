define(function (require, factory) {
  'use strict';

  console.log('index.js-loader-cmd')

  var math = require('./math.js')
  // 不管math.js中以何种方式导出，使用方式都一样
  console.log(math.name)
  console.log(math.add(1, 2))
});