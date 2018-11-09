define(function (require, exports, module) {
  'use strict';
  console.log('math.js-loader')

  var name = 'CMD-weiqinl.com'

  function add(a, b) {
    return a + b;
  }
  // 通过 exports 对外提供接口对象
  // exports.name = name
  // exports.add = add

  // 或者通过 module.exports 提供整个接口对象
  module.exports = {
    add: add,
    name: name
  }
});