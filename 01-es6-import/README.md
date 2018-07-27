ES6语法的模块导入导出(`import/export`)功能,我们在使用它的时候，可能会报错：
```
SyntaxError: Unexpected token import
语法错误：此处不应该出现import
```
![SyntaxError: Unexpected token import](https://images2018.cnblogs.com/blog/564792/201806/564792-20180607183245630-1138898436.png)

我遇到的情况是`import`语法不识别导致的。在这里，有两种方法可以解决。

## 1: 使用node的v8及之后的版本
因为，node需要v8.x之后的版本才支持ECMAScript Modules 和 imort 语法
目前，node稳定版本是v8.11.2
[可以使用`nvm`来安装管理查看多个node版本](http://www.cnblogs.com/weiqinl/p/7503123.html#3992842)。

可以使用`--experimental-modules`实验模块标志来启用加载ECMAScript Modules的特性。
而且作为ES模块加载的文件名，必须以`.mjs`后缀结尾
```
node --experimental-modules my-app.mjs
```
此种方法，在输出的时候会提示：
```
(node:16208) ExperimentalWarning: The ESM module loader is experimental.
```
表示是个实验模块，到时候可能会修改。
例子：https://github.com/weiqinl/demo/tree/master/01-es6-import

## 2: 使用babel，通用方法
![浏览器支持import](https://images2018.cnblogs.com/blog/564792/201806/564792-20180607183255371-564482670.png)


浏览器直接支持`import`程度比较低，所以需要babel来将`import`转换为es5语法。

### 安装
 通过 npm: 
```
npm install --save-dev babel-preset-env babel-cli
```

或者通过 yarn：
```
yarn add babel-preset-env --dev
```
### 使用
没有选项的默认行为将运行所有transform（与 [`babel-preset-latest`](https://babeljs.io/docs/plugins/preset-latest/) 相同）。
新建一个`.babelrc`文件，并在里面写入：

```
{
    "presets": ["env"]
}
```

## 执行
```
babel-node index.js
```

我的例子： https://github.com/weiqinl/demo/tree/master/01-es6-import
babel官方给出的一个例子：https://github.com/babel/example-node-server

参考： https://github.com/nodejs/help/issues/53