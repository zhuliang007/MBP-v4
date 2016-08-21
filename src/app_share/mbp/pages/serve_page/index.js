/**
 * Created by lenovo on 2016/8/20.
 */
const React = require('react');
const WXHead = require('../../../../components/wxHead/index');
const config = require('../../config/index');
const Util = require('../../../../util/index');
const CommonBean = require('../../commonBean/index');
const SwipeBox = require('../../../../components/swipe/index');
const TitlePriceBox = require('./title_price/index');
const TimeAddressBox = require('./time_address/index');
const Divide = require('../../../../components/divide/index');
const commonBean = new CommonBean();
require('!style!css!./index.css');
const serveStyle = {
    height:'10px',
    backgroundColor:'#C8C8C8'
}
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
                <SwipeBox data={this.state.data} type={'mbp'} swipeName={'serve_swipe bg_box_4_3'}></SwipeBox>
                <TitlePriceBox data={this.state.data}></TitlePriceBox>
                <Divide data={{style:serveStyle}}></Divide>
                <TimeAddressBox data={this.state.data}></TimeAddressBox>
                <Divide data={{style:serveStyle}}></Divide>
            </div>
        )
    }
});
module.exports = ServePage;