import {
  math
} from './math.js'
// import { PI,foo } from './name-exports.js'
import  * as w from './name-exports.js'

console.log('index.js-loader-cmd')

// 不管math.js中以何种方式导出，使用方式都一样
console.log(math)
console.log(math.add(1, 5))

var a = w.foo
console.log(a(), w.PI)
setTimeout(() => {
  console.log(w.PI)
}, 2000)

// ES6模块 加载 CommonJS模块 .用node执行
// import  math from './math.js'
// console.log(math.add(1,5), math.name)