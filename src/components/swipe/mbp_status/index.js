/**
 * Created by Administrator on 2016/8/23.
 */
const React = require('react');
let time = 0;
const MPBStatusBox = React.createClass({
    getInitialState:function(){
        return {
            time:0,
            timeText:''
        }
    },
    componentDidMount:function(){
        time = this.props.data.time;
        setInterval(this.calcTime,1000);
    },
    calcTime:function(){
        if(Math.floor(time/1000)<=0){
            return;
        }
        time = time - 1000;
        let days = Math.floor(time/1000/60/60/24);
        let hour = Math.floor(time/1000/60/60 - days * 24);
        let minutes = Math.floor(time/1000/60 - days * 24 * 60 - hour * 60);
        let seconds = Math.floor(time/1000 - days * 24 * 60 * 60 - hour * 60 * 60 - minutes * 60);
        let dayText = days?days+"天":'';
        let hourText = dayText?((hour+'').length>1?hour+"时":'0'+hour+'时'):(hour?((hour+'').length>1?hour+"时":'0'+hour+'时'):'');
        let minuteText = hourText?((minutes+'').length>1?minutes+"分":'0'+minutes+'分'):(minutes?((minutes+'').length>1?minutes+"分":'0'+minutes+'分'):'');
        let secondText = minuteText?((seconds+'').length>1?seconds+"秒":'0'+seconds+'秒'):(seconds?((seconds+'').length>1?seconds+"秒":'0'+seconds+'秒'):'');
        this.setState({time:time,timeText:dayText+hourText+minuteText+secondText})
    },
    render:function(){
        return (
            <div className={this.state.time>0?'status_box':'status_box hidden'}>
                距离{this.props.data.typeText}结束还有{this.state.timeText}
            </div>
        )
    }
})
module.exports = MPBStatusBox;