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

util.checkResponseData = function(data,key){
    if(data){
        if(data[key]){
            return data[key];
        }
    }
    return '';
}


/*解析时间*/
util.parseTime = function(time){
    if(time){
        var tempStrs = time.split(" ");
        var dateStrs = tempStrs[0].split("-");
        var year = parseInt(dateStrs[0], 10);
        var month = parseInt(dateStrs[1], 10) - 1;
        var day = parseInt(dateStrs[2], 10);
        var timeStrs = tempStrs[1].split(":");
        var hour = parseInt(timeStrs[0], 10);
        var minute = parseInt(timeStrs[1], 10);
        var second = parseInt(timeStrs[2], 10);
        var date = new Date(year, month, day, hour, minute, second);
        return date;
    }
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

/*json数据合并*/
util.mergeJSONData = function(params,defaults){
    params = params || {};
    for(const def in defaults){
        if (typeof params[def] === 'undefined') {
            params[def] = defaults[def];
        }
        else if (typeof params[def] === 'object') {
            for (var deepDef in defaults[def]) {
                if (typeof params[def][deepDef] === 'undefined') {
                    params[def][deepDef] = defaults[def][deepDef];
                }
            }
        }
    }
    return params;
}

module.exports = util;