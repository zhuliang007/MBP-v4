/**
 * Created by Administrator on 2016/8/19.
 */
const React = require('react');
require('!style!css!./index.css')
const MBPWXHead = require('./mpb/index');
const WXHead = React.createClass({
    initWXHead:function(type){
        switch (type){
            case 'mbp':
                return <MBPWXHead></MBPWXHead>
                break;
            default:
                return '';
                break;
        }
    },
    render:function(){
        return (
            <div>
                {this.initWXHead(this.props.type)}
            </div>
        )
    }
})
module.exports = WXHead;