# webpack

## 为什么我们需要构建工具

* 转换 ES6 语法
* 转换 JSX
* CSS 前缀补全/预处理器
* 压缩混淆
* 图片压缩

## 构建工具演变历史

ant + YUI Tool ---> grunt ---> gulp ---> rollup/webpack/parcel

grunt => task runner 任务流, 每一个任务处理完存放在本地磁盘temp里面 效率低
gulp => 任务跟grunt一样，文件流的概念，存放内存里面，打包效率提高
webpack => 社区生态丰富，配置灵活和插件化扩展，官方迭代速度快

## 配置

entry: 入口，单入口/多入口
output: 告诉我们 webpack 如何将编译后的文件输出到磁盘

```javascript
output: {
  path: __dirname + '/dist',
  filename: '[name].js' // 占位符
}
```

### loaders

webpack 开箱只支持 JS 和 JSON 两种文件类型，通过 Loaders 去支持其他文件类型并把它们转换成有效到模块，并且可以添加到依赖图中。

本身是一个函数，接受源文件作为参数，返回转换的结果。

```JavaScript
module: {
  rules: [
    {
      test: /\.txt$/, //指定匹配规则
      use: 'raw-loader' // use指定使用的loader名称
    }
  ]
}
```

* babel-loader 转换 ES6，ES7等 JS 新特性语法

### plugins

插件用于 bundle 文件的优化，资源管理和环境变量注入，作用于整个构建过程。

### mode

### js-loader

### css-loader

链式调用，从右向左。

css-loader 用于加载 .css 文件，并转换成 commonjs 对象
style-loader 将样式通过 `<style>` 标签插入到 head 中

### file-loader

### 热更新

webpack-dev-server

WDS 不刷新浏览器/不输出文件，放内存里
使用 HotModuleReplacementPlugin 插件

webpack-dev-middleware

### 文件指纹

Hash
Chunkhash
Contenthash

### 代码压缩

HTML 压缩 html-webpack-plugin 设置压缩参数
CSS 压缩 optimize-css-assets-webpack-plugin & cssnano
JS 压缩 内置了 uglifyjs-webpack-plugin 并行压缩

### CleanWebpackPlugin

清理dist
autoprefixer

### 静态资源内联

raw-loader

### 使用sourceMap

通过 source map 定位到源代码

eval: 使用eval包裹模块代码
source map: 产生.map文件
cheap: 不包含列信息
inline: 将.map作为DataURI嵌入，不单独生成.map文件
module: 包含loader的sourcemap

### 提取页面公共资源

splitChunkPlugin 替换 CommonsChunkPlugin

chunks参数说明：

* async
* 
