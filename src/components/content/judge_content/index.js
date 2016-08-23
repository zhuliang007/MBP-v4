/**
 * Created by Administrator on 2016/8/22.
 */
const React = require('react');
const Util = require('../../../util/index');
const Config = require('../../../app_share/mbp/config/index');
const CommonBean = require('../../../app_share/mbp/commonBean/index');
const commonBean = new CommonBean();
let flag = true;
const JudgeContent = React.createClass({
    getInitialState:function(){
      return {
          data:[]
      }
    },
    initData:function(id){
        if(id&&flag){
            commonBean.cmd = Config.cmds.serviceEvaluate;
            commonBean.parameters = {
                'serviceId':id,
                "numberOfPerPage": 10,
                "pageNo": 0
            }
            const options = {
                url:Config.getRequestAction(),
                data:commonBean,
                success:function(result){
                    flag = false;
                    this.setState({data:result.response.data.content});
                }.bind(this)
            }
            Util.getResponseFromPost(options);
        }
    },
    componentDidMount:function(){
    },
    componentDidUpdate:function(){
        this.initData(this.props.data);
    },
    initJudgeContent:function(data){
        let content = '';
        if(data&&data.length>1){

        }
        else{
            content = (<div className="no_found_box"><span>没有找到数据</span></div>)
        }
        return content;
    },
    render:function(){
        return (
            <div className='judge_content'>
                {this.initJudgeContent(this.state.data)}
            </div>
        )
    }
})
module.exports = JudgeContent;
