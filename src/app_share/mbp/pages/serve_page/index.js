/**
 * Created by lenovo on 2016/8/20.
 */
const React = require('react');
const WXHead = require('../../../../components/wxHead/index');
const WXFoot = require('../../../../components/wxFoot/index');
const Config = require('../../config/index');
const Util = require('../../../../util/index');
const CommonBean = require('../../commonBean/index');
const SwipeBox = require('../../../../components/swipe/index');
const TitlePriceBox = require('./title_price/index');
const TimeAddressBox = require('./time_address/index');
const UserHeadBox = require('./user_head/index');
const TabBarBox = require('../../../../components/tabBar/index');
const TabContentBox = require('./tab_content/index');
const Divide = require('../../../../components/divide/index');
const UWX = require('../../../../wx/index');
require('!style!css!../../styles/base.css');
require('!style!css!./index.css');
const serveStyle = {
    height:'10px',
    backgroundColor:'#C8C8C8'
}
const ServePage = React.createClass({
    getInitialState:function(){
        return {
            data:{},
            tabBarData: [
                {title:'服务详情',active:true},{title:'服务须知',active:false},{title:'妈妈点评',active:false}
            ]
        }
    },
    initServeData:function(){
        CommonBean.cmd = Config.cmds.serveDetail;
        CommonBean.parameters = {
            'id':this.props.params.id
        }

        const options = {
            url:Config.getRequestAction(),
            data:CommonBean,
            success:function(result){
                this.setState({data:result.response.data.objectData});
                console.log(result.response.data.objectData);
                const shareObject = {
                    title:result.response.data.objectData.title,
                    desc:result.response.data.objectData.introduce,
                    imgUrl:Util.compressImageFromWeb(result.response.data.objectData.topImages[0].location,'@414w'),
                    link:Config.shareLink
                    }
                this.initWXSign(shareObject);
            }.bind(this)
        }
        Util.getResponseFromPost(options);
    },
    initWXSign:function(shareObject){
        CommonBean.cmd = Config.cmds.wxJSSign;
        CommonBean.parameters = {
            'url':window.location.href.split('#')[0]
        }
        const wxOptions = {
            url:Config.getRequestWXAction(),
            data:CommonBean,
            appId:Config.getAppId(),
            debug:Config.debug,
            shareObject:shareObject
        }
        UWX.setJSSign(wxOptions);
    },
    componentDidMount:function(){
        this.initServeData();
    },
    changeTab:function(data,dataIndex){
        const dataObjects = [];
        this.state.tabBarData.forEach(function(dataObject,index){
            dataObject.active = false;
            if(dataIndex==index){
                dataObject.active = true;
            }
            dataObjects.push(dataObject);
        });
        this.setState({tabBarData:dataObjects});
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
                <UserHeadBox data={this.state.data}></UserHeadBox>
                <Divide data={{style:serveStyle}}></Divide>
                <TabBarBox data={this.state.tabBarData} changeTab={this.changeTab}></TabBarBox>
                <TabContentBox data={this.state.data} tabData={this.state.tabBarData} serveId={this.props.params.id}></TabContentBox>
                <WXFoot type={'mbp'}></WXFoot>
            </div>
        )
    }
});
module.exports = ServePage;