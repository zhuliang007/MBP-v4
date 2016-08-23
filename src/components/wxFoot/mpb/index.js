/**
 * Created by Administrator on 2016/8/19.
 */
const React = require('react');
let att = require('./attentions.jpg');
const util = require('../../../util/index');
const MBPWXFoot= React.createClass({
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
            <div className="wx_foot" style={this.initStyle()}>
                <img src={att} className="img_auto"/>
            </div>
        )
    }
});
module.exports = MBPWXFoot;