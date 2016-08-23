/**
 * Created by lenovo on 2016/8/20.
 */
const React  = require('react');
const MBPSwipe = require('./mbp/index');
const Util = require('../../util/index');
const MBPStatusBox = require('./mbp_status/index');
const SwipeBox = React.createClass({
    initSwipe:function(type,data){
        let swipe = '';
        switch (type){
            case 'mbp':
                swipe =  <MBPSwipe data={data} swipeName={this.props.swipeName}></MBPSwipe>
                break;
            default:
                break;
        }
        return swipe;
    },
    initStatus:function(type,data){
        let status = '';
        switch (type){
            case 'mbp':
                if(data){
                    status = this.initMBPStatus(data);
                }
                break;
            default:
                break;
        }
        return status;
    },
    initMBPStatus:function(data){
        let mbpStatus = '';
        if(data&&data.discountType){
            let sysStartTime = new Date().getTime();
            let startTime = Util.parseTime(data.currentSystemDate).getTime();
            let endTime = Util.parseTime(data.discountEndTime).getTime();
            let sysEndTime = new Date().getTime();
            let cacheTime = (endTime - startTime) - (sysEndTime - sysStartTime);
            if(cacheTime>0){
                mbpStatus  = (
                    <MBPStatusBox data={{time:cacheTime,typeText:data.discountTypeText}}></MBPStatusBox>
                )
            }
        }
        return mbpStatus;
    },
    render:function(){
        return (
            <div className="swipe_box">
                {this.initSwipe(this.props.type,this.props.data)}
                {this.initStatus(this.props.type,this.props.data)}
                {/*<div className="status_box">距离团购结束还有1小时6分32秒</div>*/}
            </div>
        )
    }
});
module.exports = SwipeBox;