({
  baseUrl: './js',
  appDir: '../www',
  dir: '../www-build',
  mainConfigFile: '../www/js/config.js',
  optimizeCss: 'standard',
  modules: [{
      name: 'config',
      include: [
        'jquery',
        'utils'
      ]
    }, {
      name: 'modules/page1',
      exclude: ['config']
    },
    {
      name: 'modules/page2',
      exclude: ['config']
    }
  ],
  fileExclusionRegExp: /^(r|build)\.js|.*\.scss$/, // 正则匹配过滤文件，匹配到的文件将不会被输出到输出目录去。这里过滤掉的是r.js/build.js/*.scss三类文件
  removeCombined: true,
  paths: {
    jquery: 'lib/jquery-1.11.1.min',
    utils: 'modules/utils'
  }
})