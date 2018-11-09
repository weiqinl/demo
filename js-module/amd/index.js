require(['./math'], function (math) {
  console.log('index.js-loader-amd')
  
  console.log(math.name)
  console.log(math.add(1, 2))
})