# 1. Entry
入口（entry）指示webpack 以哪个文件为入口起点开始打包，分析构建内部依赖图

# 2. Output
输出（output）指示webpack 打包后的资源 bundles 输出到那里去，以及如何命名

# 3. Loader
loader 让 Webpack能够去处理那些 非Js 文件（webpack自身只理解Js）

# 4. Plugins
插件（Plugins）可以用于执行更广的任务，插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量

# 5. Mode
模式(mode)指示 Webpack 使用相应模式的配置
development： 能让代码本地调试的运行环境
production  能让代码优化上线的运行环境