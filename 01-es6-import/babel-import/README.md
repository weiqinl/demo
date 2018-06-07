## 运行该案例
```
npm install
npm start
```

该案例生成方法
### 初始化
```
npm init
```
### 安装
通过 npm: 
```
npm install --save-dev babel-preset-env babel-cli
```
### 使用
没有选项的默认行为将运行所有transform（与 [`babel-preset-latest`](https://babeljs.io/docs/plugins/preset-latest/) 相同）。
新建一个`.babelrc`文件，并在里面写入：

```
{
    "presets": ["env"]
}
```
