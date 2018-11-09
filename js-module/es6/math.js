console.log('math.js-loader')

var name = 'ES6-weiqinl.com'

function add(a, b) {
  return a * b;
}

// 通过 export 提供整个接口对象

// 默认模式
// export default {
//   add,
//   name
// }

// 通过自定义的名称
export const math = {
  add,
  name
}

// CommonJS模块输出
// module.exports = {
//   add: add,
//   name: name
// }