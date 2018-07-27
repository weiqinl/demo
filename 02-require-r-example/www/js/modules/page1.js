require(['../config'], function () {
  require(['utils', 'jquery', 'layui'], function (utils) {
    $('div').append('知道吗？</br>' + utils.print())
    $("div").css("background-color","yellow");
    layui.use('layer', function() {
      layer.msg('layui-layer')
    })
  })
})