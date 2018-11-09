var name = 'weiqinl.com'

function add(a, b) {
  return a + b
}

// 不管使用哪种输出方式，导入(require)的时候都一样使用。

// 1. 第二种输出方式（默认，常用的方式)
module.exports = {
  add,
  name
}

// 2. 第一种输出方式
// module.exports = exports =  {
//   add: add,
//   name: name
// }

// 3. 第三种输出方式
// exports.add = function(a, b) {
//   return a + b
// }

// exports.name = 'weiqinl.com'