# com.jiabo.vue



### vue-cli升级3.0

npm install -g @vue/cli

vue -V 查看vue版本



### 创建项目

vue create 项目名

或者使用 vue ui 命令启动界面

![1546143779315](.\README.assets\1546143779315.png)



### 管理依赖

**![1546143833053](.\README.assets\1546143833053.png)**



### 在根目录下创建vue.config.js

修改项目结构

![1546144226394](.\README.assets\1546144226394.png)

```
let path = require('path')
let glob = require('glob')
//	jquery 不使用jQuery可以删除 , 以及删除下方
// plugins: [
//      new webpack.ProvidePlugin({
//        $: 'jquery',
//
//        jQuery: 'jquery',
//
//        'windows.jQuery': 'jquery'
//      })
//    ]
const webpack = require('webpack')

//配置pages多页面获取当前文件夹下的html和js
function getEntry(globPath) {
  let entries = {},
    basename,
    tmp,
    pathname,
    appname

  glob.sync(globPath).forEach(function(entry) {
    basename = path.basename(entry, path.extname(entry))
    // console.log(entry)
    tmp = entry.split('/').splice(-3)
    console.log(tmp)
    pathname = basename // 正确输出js和html的路径

    // console.log(pathname)
    entries[pathname] = {
      entry: 'src/' + tmp[0] + '/' + tmp[1] + '/' + tmp[1] + '.js',
      template: 'src/' + tmp[0] + '/' + tmp[1] + '/' + tmp[2],
      title: tmp[2],
      filename: tmp[2]
    }
  })
  return entries
}

let pages = getEntry('./src/pages/**?/*.html')
console.log(pages)
//配置end

module.exports = {
  //禁用eslint
  lintOnSave: true,

  baseUrl: '',
  productionSourceMap: true,
  pages,

  devServer: {
    index: 'index.html', //默认启动serve 打开index页面

    open: process.platform === 'darwin',
    host: '',
    port: 9999,
    https: false,
    hotOnly: false,
    proxy: {
      '/xrf/': {
        target: 'http://reg.tool.hexun.com/',
        changeOrigin: true,
        pathRewrite: {
          '^/xrf': ''
        }
      },
      '/wa/': {
        target: 'http://api.match.hexun.com/',
        changeOrigin: true,
        pathRewrite: {
          '^/wa': ''
        }
      }
    }, // 设置代理
    before: app => {}
  },

  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => {
        // 修改它的选项...
        options.limit = 100
        return options
      })
    Object.keys(pages).forEach(entryName => {
      config.plugins.delete(`prefetch-${entryName}`)
    })
    if (process.env.NODE_ENV === 'production') {
      config.plugin('extract-css').tap(() => [
        {
          path: path.join(__dirname, './dist'),
          filename: 'css/[name].[contenthash:8].css'
        }
      ])
    }
  },

  configureWebpack: {
    module: {
      rules: [
        {
          include: path.resolve('node_modules', 'bootstrap-vue'),
          sideEffects: false
        }
      ]
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',

        jQuery: 'jquery',

        'windows.jQuery': 'jquery'
      })
    ]
  }

  //     outputDir: undefined,
  //     assetsDir: undefined,
  //     runtimeCompiler: undefined,
  //     parallel: undefined,
  //     css: undefined
}

```

引入jQuery

package.json中找到eslintConfig 添加"jquery": true

![1546144304192](.\README.assets\1546144304192.png)





## Project setup

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
