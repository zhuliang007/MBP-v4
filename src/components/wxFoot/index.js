/**
 * Created by Administrator on 2016/8/19.
 */
const React = require('react');
require('!style!css!./index.css')
const MBPWXFoot = require('./mpb/index');
const WXFoot = React.createClass({
    initWXFoot:function(type){
        switch (type){
            case 'mbp':
                return <MBPWXFoot></MBPWXFoot>
                break;
            default:
                return '';
                break;
        }
    },
    render:function(){
        return (
            <div>
                {this.initWXFoot(this.props.type)}
            </div>
        )
    }
})
module.exports = WXFoot;