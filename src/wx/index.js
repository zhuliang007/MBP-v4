/**
 * Created by Administrator on 2016/8/23.
 */
const Util = require('../util/index');
let wx;
define(['http://res.wx.qq.com/open/js/jweixin-1.0.0.js',function(a){
    wx = a('http://res.wx.qq.com/open/js/jweixin-1.0.0.js');
}])
const UWX = {}
UWX.getCommonBean = function(type) {
    let commonBen = {};
    switch (type){
        case 'mbp':
            const CommonBean = require('../app_share/mbp/commonBean/index');
            commonBen = new CommonBean();
            break;
    }
    return commonBen
}


UWX.getConfig = function(type){
    let config = {};
    switch (type){
        case 'mbp':
            config = require('../app_share/mbp/config/index');
            break;
    }
    return config
}

UWX.setJSSign = function(type){
    const self = this;
    const config = this.getConfig(type);
    const commonBean = this.getCommonBean(type);
    commonBean.cmd = config.cmds.wxJSSign;
    commonBean.parameters = {
        "url" : window.location.href.split("#")[0]
    }
    const options = {
        url:config.getRequestWXAction(),
        data:commonBean,
        success:function(result){
            var response = result.response;
            if(response && wx){
                wx.config({
                    debug : config.debug, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                    appId : config.getAppId(), // 必填，公众号的唯一标识
                    timestamp : response.timestamp, // 必填，生成签名的时间戳
                    nonceStr : response.nonceStr, // 必填，生成签名的随机串
                    signature :response.signature,// 必填，签名，见附录1
                    jsApiList : [ "onMenuShareTimeline",
                        "onMenuShareAppMessage", "onMenuShareQQ",
                        "onMenuShareWeibo","showMenuItems","hideMenuItems"]
                    // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                });
                wx.ready(function() {
                    //判断当前客户端版本是否支持指定JS接口
                    wx.checkJsApi({
                        jsApiList : [ "onMenuShareTimeline",
                            "onMenuShareAppMessage",
                            "onMenuShareQQ", "onMenuShareWeibo","showMenuItems","hideMenuItems"]
                    });
                    self.shareItems(config.shareTitle,config.shareDesc,config.shareLink,config.shareImage);
                });

                wx.error(function() {
                });
            }
        }
    }
    Util.getResponseFromPost(options);
}

UWX.shareItems = function(title,desc,link,imgUrl){
    if(wx){
        this.onMenuShareTimeline(desc,link,imgUrl);
        this.onMenuShareAppMessage(title,desc,link,imgUrl);
        this.onMenuShareQQ(title,desc,link,imgUrl);
        this.onMenuShareWeibo(title,desc,link,imgUrl);
    }
}
UWX.onMenuShareTimeline = function(desc,link,imgUrl){//获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
    if(wx){
        wx.onMenuShareTimeline({
            title : desc, // 分享标题
            link : link, // 分享链接
            imgUrl : imgUrl, // 分享图标
            success: function () { /*用户确认分享后执行的回调函数*/ },
            cancel: function () { /*用户取消分享后执行的回调函数*/ }
        });
    }
}
UWX.onMenuShareAppMessage = function(title,desc,link,imgUrl) { //获取“分享给朋友”按钮点击状态及自定义分享内容接口
    if(wx){
        wx.onMenuShareAppMessage({
            title : title, // 分享标题
            desc : desc, // 分享描述
            link : link, // 分享链接
            imgUrl : imgUrl, // 分享图标
            success: function () { /*用户确认分享后执行的回调函数*/ },
            cancel: function () { /*用户取消分享后执行的回调函数*/ }
        });
    }
}
UWX.onMenuShareQQ = function(title,desc,link,imgUrl) { //获取“分享到QQ好友”按钮点击状态及自定义分享内容接口
    if(wx){
        wx.onMenuShareQQ({
            title : title, // 分享标题
            desc : desc, // 分享描述
            link : link, // 分享链接
            imgUrl : imgUrl, // 分享图标
            success: function () { /*用户确认分享后执行的回调函数*/ },
            cancel: function () { /*用户取消分享后执行的回调函数*/ }
        });
    }
}
UWX.onMenuShareWeibo = function(title,desc,link,imgUrl){ //获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口
    if(wx){
        wx.onMenuShareWeibo({
            title : title, // 分享标题
            desc : desc, // 分享描述
            link : link, // 分享链接
            imgUrl : imgUrl, // 分享图标
            success: function () { /*用户确认分享后执行的回调函数*/ },
            cancel: function () { /*用户取消分享后执行的回调函数*/ }
        });
    }
}


module.exports = UWX;