﻿loader.define(function(require,exports,module) {

    // 示例
    var uiActionsheet = bui.actionsheet({
        trigger: "#btnOpen",
        buttons: [{ name:"分享到微博",value:"weibo" },{ name:"分享到微信",value:"weixin" },{ name:"分享到QQ",value:"QQ" }],
        callback: todo
    })

    // 也可以通过监听click 事件的方式处理回调
    // uiActionsheet.on("click",todo)

    function todo(e) {
            
        var val = $(e.target).attr("value");

        console.log(val);
        if( val == "cancel"){
            uiActionsheet.hide();
        }
    }
    uiActionsheet.on("click",function (e) {
        console.log(e)
    })
    // uiActionsheet.show();
    // uiActionsheet.hide();
})