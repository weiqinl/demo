// 这个是commonjs规范的写法，需要通过node来执行：
// node index.js

// 引用自定义的模块时候，参数包含路径，可以省略.js
var math = require('./math')

var add = math.add(1, 2)

console.log(add, math.name) // 3 'weiqinl.com'