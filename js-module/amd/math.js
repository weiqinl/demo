
define(['name'],function (name) {
  'use strict';
  
  console.log('loader-mathjs')

  var name = name + '- math.js'

  function add(a, b) {
    return a + b;
  }

  // amd 模式导出模块，使用return
  return {
    add: add,
    name: name
  }
});