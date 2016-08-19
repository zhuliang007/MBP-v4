/**
 * Created by Administrator on 2016/8/19.
 */
const config = {}

config.debug = true;

config.requestAction = 'http://erpuat.mengbp.com:8090/wine-rest/cgi';
config.requestActionDebug = 'http://erpuat.mengbp.com:8090/wine-rest/cgi';
config.getRequestAction = function(){
    if(this.debug){
        return this.requestActionDebug;
    }
    return this.requestAction;
}

config.cmds = {
    topicDetail:'smart/topic/detail',
    serveDetail:'smart/services/getServicesDetails'
}


module.exports = config;