/**
 * Created by lenovo on 2016/8/20.
 */
const React = require('react');
const WXHead = require('../../../../components/wxHead/index');
const config = require('../../config/index');
const Util = require('../../../../util/index');
const CommonBean = require('../../commonBean/index');
const SwipeBox = require('../../../../components/swipe/index');
const commonBean = new CommonBean();
const ServePage = React.createClass({
    getInitialState:function(){
        return {
            data:{}
        }
    },
    initServeData:function(){
        commonBean.cmd = config.cmds.serveDetail;
        commonBean.parameters = {
            'id':this.props.serveId
        }

        const options = {
            url:config.getRequestAction(),
            data:commonBean,
            success:function(result){
                this.setState({data:result.response.data.objectData});
            }.bind(this)
        }
        Util.getResponseFromPost(options);
    },
    componentDidMount:function(){
        this.initServeData();
    },
    render:function(){
        return (
            <div className="serve_page">
                <WXHead type={'mbp'}></WXHead>
                <SwipeBox data={this.state.data.topImages} type={'mbp'} swipeName={'serve_swipe bg_box_4_3'}></SwipeBox>
            </div>
        )
    }
});
module.exports = ServePage;