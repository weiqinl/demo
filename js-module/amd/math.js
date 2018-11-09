define(function () {
  'use strict';
  console.log('mathjs-loader')
  
  var name = 'AMD-weiqinl.com'

  function add(a, b) {
    return a + b;
  }

  // amd 模式导出模块，使用return
  return {
    add: add,
    name: name
  }
});