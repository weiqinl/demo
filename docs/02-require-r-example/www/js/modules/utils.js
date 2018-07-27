define(function () {
  var utils = {}

  function print() {
    return '现在时间：' + new Date()
  }
  utils.print = print
  return utils

})