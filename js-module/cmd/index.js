/**
 * script加载两种不同的方式 和 index两种不同写法的方式，可以混合使用，
 * 但是一定要有一个地方使用seajs.use(module,factory)，所以也就是有3种写法。
 */
// 第一种方式，官方推荐
define(function (require, factory) {
  'use strict';
  console.log('loader-index.js')

  var math = require('./math.js')
  
  // 不管math.js中以何种方式导出，使用方式都一样
  console.log(math.add(1, 2))
  
  var name = require('./name')
  
  console.log(name.name  + '-index.js')
});

// 第二种方式, 类CMD写法
// seajs.use(['./math','./name'], function (math, name) {
//   // var math = require('./math.js')

//   console.log('loader-index.js')

//   // var name = require('./name')

//   console.log(name.name + '-index.js')

//   // 不管math.js中以何种方式导出，使用方式都一样
//   console.log(math.add(1, 2))
// })