/**
 * Created by Administrator on 2016/8/19.
 */
let defaultShareImage = require('../../../components/wxHead/mpb/logo.png');
const config = {}

config.debug = true;

config.requestAction = 'http://erpuat.mengbp.com:8090/wine-rest/cgi';
config.requestActionDebug = 'http://erpuat.mengbp.com:8090/wine-rest/cgi';
//192.168.100.64:8083
config.getRequestAction = function(){
    if(this.debug){
        return this.requestActionDebug;
    }
    return this.requestAction;
}

config.requestWXAction = 'http://erpuat.mengbp.com:8090/wine-rest/cgi';
config.requestWXActionDebug = 'http://erpuat.mengbp.com:8090/wine-rest/cgi';
config.getRequestWXAction = function(){
    if(this.debug){
        return this.requestWXActionDebug;
    }
    return this.requestWXAction;
}

config.appId = 'wx5bb398c959489ae4';
config.appIdDebug = 'wx03fc01e909d9a654';
config.getAppId = function(){
    if(this.debug){
        return this.appIdDebug;
    }
    return this.appId;
}

config.cmds = {
    topicDetail:'smart/topic/detail',
    serveDetail:'smart/services/getServicesDetails',
    serviceEvaluate:'smart/serviceEvaluate/getPage',
    wxJSSign:'',
    detailDetail:'smart/topic/detail'
}

config.shareTitle = '萌宝派';
config.shareDesc = '萌宝派';
config.shareImage = defaultShareImage;
config.shareLink = window.location.href.split('#')[0];


module.exports = config;
