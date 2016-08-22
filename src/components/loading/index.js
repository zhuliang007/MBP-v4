/**
 * Created by Administrator on 2016/8/22.
 */
const React = require('react');
require('!style!css!./index.css');
const Loading = React.createClass({
    render:function(){
        return (
            <div className="loading_box">
                加载中。。。
            </div>
        )
    }
});
module.exports = Loading;