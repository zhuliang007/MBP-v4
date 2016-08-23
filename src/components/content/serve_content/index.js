/**
 * Created by Administrator on 2016/8/22.
 */
const React = require('react');
const ServeContentItem = require('./item/index');
const ServeContent = React.createClass({
    initServeContent:function(data){
        const contents = [];
        if(data){
            data.forEach(function(dataObject,index){
                contents.push(<ServeContentItem data={dataObject} key={index}></ServeContentItem>)
            })
        }
        return contents;
    },
    render:function(){
        return (
            <div className='serve_content'>
                {this.initServeContent(this.props.data)}
            </div>
        )
    }
})
module.exports = ServeContent;