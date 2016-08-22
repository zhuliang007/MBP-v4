/**
 * Created by lenovo on 2016/8/20.
 */
const React  = require('react');
const MBPSwipe = require('./mbp/index');
const SwipeBox = React.createClass({
    initSwipe:function(type,data){
        switch (type){
            case 'mbp':
                return <MBPSwipe data={data} swipeName={this.props.swipeName}></MBPSwipe>
                break;
            default:
                return '';
                break;
        }
    },
    render:function(){
        return (
            <div className="swipe_box">
                {this.initSwipe(this.props.type,this.props.data)}
            </div>
        )
    }
});
module.exports = SwipeBox;