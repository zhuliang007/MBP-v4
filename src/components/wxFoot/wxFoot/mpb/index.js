/**
 * Created by Administrator on 2016/8/19.
 */
const React = require('react');
let logo = require('./logo.png');
const util = require('../../../util/index');
const MBPWXHead = React.createClass({
    downloadApp : function(){
        window.location.href = 'http://www.baidu.com';
    },
    initStyle:function(){
        let style = {
            display:'none'
        };
        if(util.isWX()){
            style = {
                display : 'block'
            }
        }
        return style;

    },
    render:function(){
        return (
            <div className="wx_head" style={this.initStyle()}>
                <div className="wx_logo">
                    <img src={logo} className="img_auto"/>
                </div>
                <div className="wx_head_body">
                    <div className="wx_title">萌宝派，用心爱</div>
                    <div className="wx_description">预定达人只送服务 上萌宝派APP</div>
                </div>
                <div className="wx_download">
                    <a onClick={this.downloadApp}>下载APP</a>
                </div>
            </div>
        )
    }
});
module.exports = MBPWXHead;