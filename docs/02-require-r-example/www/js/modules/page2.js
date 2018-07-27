require(['../config'], function () {
  require(['utils', 'jquery'], function (utils) {
    $('div').append('我到哪里了？</br>' + utils.print())
    $("body").css("background-color","yellow");
  })
})