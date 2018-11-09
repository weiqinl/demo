(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['jquery', 'underscore'], factory);
  } else if (typeof exports === 'object') {
    // Node, CommonJS之类的
    module.exports = factory(require('jquery'), require('underscore'));
  } else {
    // 浏览器全局变量(root 即 window)
    root.returnExports = factory(root.jQuery, root._);
  }
}(this, function ($, _) {
  //    方法
  function a() {}; //    私有方法，因为它没被返回 (见下面)
  function b() {
    console.log('b')
  }; //    公共方法，因为被返回了
  function c() {
    console.log('c')
  }; //    公共方法，因为被返回了

  //    暴露公共方法
  return {
    b: b,
    c: c
  }
}));