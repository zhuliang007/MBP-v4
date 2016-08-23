/**
 * Created by Administrator on 2016/8/22.
 */
const React = require('react');
const NoticeContent = React.createClass({
    initNotice:function(data){
        let notice = '<div></div>';
        if(data){
            notice = data;
        }
        return notice;
    },
    render:function(){
        return (
            <div className='notice_content'>
                <div dangerouslySetInnerHTML = {{__html:this.initNotice(this.props.data)}}></div>
            </div>
        )
    }
})
module.exports = NoticeContent;
