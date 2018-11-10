## JavaScript模块化CommonJS/AMD/CMD/UMD/ES6Module的区别

## JS-模块化进程
随着js技术的不断发展，途中会遇到各种问题，比如模块化。

那什么是模块化呢,他们的目的是什么？

>定义：如何把一段代码封装成一个有用的单元，以及如何注册此模块的能力、输出的值  
>依赖引用：如何引用其它代码单元

到目前为止，大概分为以下几个里程碑式节点。
```
原始的开发方式 ---> CommonJS ---> AMD ---> CMD ---> UMD ---> ES6Module
```
## 原始的开发方式
最开始的时候，JS自身是没有模块机制的。项目有多个js文件。
```
// a.js
function foo() {}
// b.js
function bar() {}
// c.js
foo()
```
HTML加载
```
<script src="a.js"></script>
<script src="b.js"></script>
<script src="c.js"></script>
```
原始的开发方式，随着项目的复杂度，代码量越来越多，所需要加载的文件也越来越多，这个时候，就要考虑几个问题了：

1. 命名问题：所有文件的方法都是挂载到`global`上，会污染全局环境，并且需要考虑命名冲突问题。
2. 依赖问题：`script`是顺序加载的，如果各文件之间有依赖，那我们得考虑加载`.js`文件的书写顺序。
3. 网络问题。如果文件过多，所需请求次数会增多，增加加载时间。

## CommonJS && node.js
`CommonJS`规范，主要运行于服务器端，同步加载模块，而加载的文件资源大多数在本地服务器，所以执行速度或时间没问题。`Node.js`很好的实现了该规范。  
该规范指出，一个单独的文件就是一个模块。  
模块功能主要的几个命令：`require`和`module.exports`。`require`命令用于输入其他模块提供的功能，`module.exports`命令用于规范模块的对外接口，输出的是一个值的拷贝，输出之后就不能改变了，会缓存起来。

```
// moduleA.js
var name = 'weiqinl'
function foo() {}

module.exports = exports =  {
  name,
  foo
}

// moduleB.js
var ma = require('./moduleA') // 可以省略后缀.js
exports.bar = function() {
  ma.name === 'weiqinl' // true
  ma.foo() // 执行foo方法
}

// moduleC.js
var mb = require('./moduleB')
mb.bar()

```
通过例子，我们可以看出`require(moduleId)`来加载其他模块的内容，其返回值就是其引用的外部模块所暴露的API，之后再通过`module.exports`或者`exports`来为当前模块的方法和变量提供输出接口。

最后通过`node`来执行模块。

## AMD && Require.js
[AMD规范文档](https://github.com/amdjs/amdjs-api/wiki/AMD)    
AMD(Asynchronous Module Definition - 异步加载模块定义)规范，制定了定义模块的规则,一个单独的文件就是一个模块，模块和模块的依赖可以被异步加载。主要运行于浏览器端，这和浏览器的异步加载模块的环境刚好适应，它不会影响后面语句的运行。该规范是在RequireJs的推广过程中逐渐完善的。

模块功能主要的几个命令：`define`、`require`、`return`和`define.amd`。`define`是全局函数，用来定义模块,`define(id?, dependencies?, factory)`。`require`命令用于输入其他模块提供的功能，`return`命令用于规范模块的对外接口，`define.amd`属性是一个对象，此属性的存在来表明函数遵循`AMD`规范。

```
// moduleA.js
define(['jQuery','lodash'], function($, _) {
  var name = 'weiqinl',
  function foo() {}
  return {
    name,
    foo
  }
})

// index.js
require(['moduleA'], function(a) {
  a.name === 'weiqinl' // true
  a.foo() // 执行A模块中的foo函数
  // do sth...
})

// index.html
<script src="js/require.js" data-main="js/index"></script>
```
在这里，我们使用`define`来定义模块，`return`来输出接口， `require`来加载模块，这是AMD官方推荐用法。当然也可以使用其他兼容性的写法，比如对 [Simplified CommonJS Wrapper](http://requirejs.org/docs/api.html#cjsmodule) 格式的支持，但背后还是原始`AMD`的运行逻辑。  
`AMD`的运行逻辑是：提前加载，提前执行。在`Requirejs`中，申明依赖模块时，会第一时间加载并执行模块内的代码，使后面的回调函数能在所需的环境中运行。 
为了更好地优化请求，同时推出了打包工具`r.js`，使所需加载的文件数减少。

## CMD && Sea.js
[CMD规范文档](https://github.com/cmdjs/specification/blob/master/draft/module.md)  
CMD(Common Module Definition - 通用模块定义)规范主要是`Sea.js`推广中形成的，一个文件就是一个模块，可以像`Node.js`一般书写模块代码。主要在浏览器中运行，当然也可以在`Node.js`中运行。  
```
// moduleA.js
// 定义模块
define(function(require, exports, module) {
  var func = function() {
    var a = require('./a') // 到此才会加载a模块
    a.func()
    if(false) {
      var b = require('./b') // 到此才会加载b模块
      b.func()
    }
  }
  // do sth...
  exports.func = func;
})

// index.js
// 加载使用模块
seajs.use('moduleA.js', function(ma) {
  var ma = math.func()
})

// HTML，需要在页面中引入sea.js文件。
<script src="./js/sea.js"></script>
<script src="./js/index.js"></script>
```
这里`define`是一个全局函数，用来定义模块，并通过`exports`向外提供接口。之后，如果要使用某模块，可以通过`require`来获取该模块提供的接口。最后使用某个组件的时候，通过`seajs.use()`来调用。

>1. **通过`exports`暴露接口**。这意味着不需要命名空间了，更不需要全局变量。
>2. **通过`require`引入依赖**。这可以让依赖内置，我们只需要关心当前模块的依赖。**关注度分离**

CMD推崇依赖就近，延迟执行。在上面例子中，通过`require`引入的模块，只有当程序运行到此处的时候，模块才会自动加载执行。

同时推出了`spm(static package manager)`的打包方式，听说支付宝的项目在使用。

## UMD && webpack
[UMD文档](https://github.com/umdjs/umd)  
UMD(Universal Module Definition - 通用模块定义)模式，该模式主要用来解决`CommonJS`模式和`AMD`模式代码不能通用的问题，并同时还支持老式的`全局`变量规范。
```
// 使用Node, AMD 或 browser globals 模式创建模块
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD模式. 注册为一个匿名函数
        define(['b'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node等类CommonJS的环境
        module.exports = factory(require('b'));
    } else {
        // 浏览器全局变量 (root is window)
        root.returnExports = factory(root.b);
    }
}(typeof self !== 'undefined' ? self : this, function (b) {
    // 以某种方式使用 b

    //返回一个值来定义模块导出。(即可以返回对象，也可以返回函数)
    return {};
}));
```
1. 判断`define`为函数，并且是否存在`define.amd`，来判断是否为`AMD规范`,  
2. 判断`module`是否为一个对象，并且是否存在`module.exports`来判断是否为`CommonJS规范`  
3. 如果以上两种都没有，设定为原始的代码规范。

这种模式，通常会在`webpack`打包的时候用到。`output.libraryTarget`将模块以哪种规范的文件输出。

## ES6 Module && ES6
[ES6模块加载文档](http://es6.ruanyifeng.com/#docs/module-loader)  
在ECMAScript 2015版本出来之后，确定了一种新的模块加载方式，我们称之为ES6 Module。它和前几种方式有区别和相同点。

1. 它因为是标准，所以未来很多浏览器会支持，可以很方便的在浏览器中使用。
2. 它同时兼容在`node`环境下运行。
3. 模块的导入导出，通过`import`和`export`来确定。
4. 可以和`Commonjs`模块混合使用。
5. `CommonJS`输出的是一个**值的拷贝**。ES6模块输出的是**值的引用**,加载的时候会做静态优化。
6. `CommonJS`模块是运行时加载确定输出接口，ES6模块是编译时确定输出接口。

ES6模块功能主要由两个命令构成：`import`和`export`。`import`命令用于输入其他模块提供的功能。`export`命令用于规范模块的对外接口。

`export`的几种用法
```
// 输出变量
export var name = 'weiqinl'
export var year = '2018'

// 输出一个对象（推荐）
var name = 'weiqinl'
var year = '2018'
export { name, year}


// 输出函数或类
export function add(a, b) {
  return a + b;
}

// export default 命令
export default function() {
  console.log('foo')
}
```
`import`导入其他模块

```
// 正常命令
import { name, year } from './module.js' //后缀.js不能省略

// 如果遇到export default命令导出的模块
import ed from './export-default.js'

```
模块编辑好之后，它可以以多种形式加载。
### 1. 浏览器加载
浏览器加载ES6模块，使用`<script>`标签，但是要加入`type="module"`属性  
外链js文件
```
<script type="module" src="index.js"></script>
```

也可以内嵌在网页中
```
<script type="module">
  import utils from './utils.js';
  // other code
</script>
```
对于加载外部模块，需要注意：  
* 代码是在模块作用域之中运行，而不是在全局作用域运行。模块内部的顶层变量，外部不可见。
* 模块脚本自动采用严格模式，不管有没有声明`use strict`。  
* 模块之中，可以使用`import`命令加载其他模块（.js后缀不可省略，需要提供绝对 URL 或相对 URL），也可以使用`export`命令输出对外接口。  
* 模块之中，顶层的`this`关键字返回`undefined`，而不是指向`window`。也就是说，在模块顶层使用`this`关键字，是无意义的。
* 同一个模块如果加载多次，将只执行一次。

### 2. Node加载
Node要求 ES6 模块采用`.mjs`后缀文件名。也就是说，只要脚本文件里面使用`import`或者`export`命令，就必须采用`.mjs`后缀名。
这个功能还在试验阶段。安装`Node V8.5.0`或以上版本，要用`--experimental-modules`参数才能打开该功能。
```
$ node --experimental-modules my-app.mjs
```
`Node`的`import`命令只支持异步加载本地模块(`file: `协议)，不支持加载远程模块。


## 总结
以上即是，我对js模块化概念，理论结合实践完成的简单梳理。通过阅读前辈的文章或者各种`Issue`,也大概了解了JS的历史进程。以史为鉴，可以知兴替。此时不断成为历史，历史终将定论。

## 参考
0. [各模块化使用的例子](https://github.com/weiqinl/demo)
1. [Require.js](https://requirejs.org/)
2. [Sea.js](https://github.com/seajs/seajs)
3. [UMD](https://github.com/umdjs/umd)
4. [ES6 Module](http://es6.ruanyifeng.com/#docs/module-loader)
5. [JavaScript模块化七日谈](http://huangxuan.me/js-module-7day/#/)

[完]