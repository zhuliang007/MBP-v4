/**
 * Created by Administrator on 2016/8/22.
 */
const React = require('react');
const ServeContent = require('../../../../../../components/content/serve_content/index');
const NoticeContent = require('../../../../../../components/content/notice_content/index');
const JudgeContent = require('../../../../../../components/content/judge_content/index');
const TabContentItem = React.createClass({
    initTabContent:function(type,data){
        let content = '';
        if(data){
            switch (type){
                case 0:
                    content = (<ServeContent data={data.serviceDetails}></ServeContent>);
                    break;
                case 1:
                    content = (<NoticeContent data={data.notice}></NoticeContent>);
                    break;
                case 2:
                    content = (<JudgeContent></JudgeContent>);
                    break;
                default:
                    break;
            }
        }
        return content;
    },
    render:function(){
        return (
            <div className={this.props.tabData.active?'tab_content_item':'tab_content_item hidden'}>
                {this.initTabContent(this.props.tabType,this.props.data)}
            </div>
        )
    }
})
module.exports = TabContentItem;