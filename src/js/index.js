/**
 * Created by Administrator on 2016/8/19.
 */
const $ = require('jquery');
const util = {};

util.isWX = function(){
    let ua = window.navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
        return true;
    }
    return false;
}

/*http请求*/
util.getResponseFromPost = function(options){
    $.ajax(
        {
            url:options.url,
            data:options.data,
            method:options.method||'GET',
            dataType : "jsonp",
            jsonp: "callback",
            success:options.success,
            error:options.error
        }
    )
}

module.exports = util;