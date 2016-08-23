require('!style!css!./index.css');

const React = require('react');
const CommonBean = require('../../commonBean/index');
const Config = require('../../config/index');
const Util = require('../../../../util/index');

const WXHead = require('../../../../components/wxHead/index');
const UserInfo = require('./components/userInfo');
const RewardList = require('./components/rewardList');
const SpotList = require('./components/spotList');
const ReplyList = require('./components/replyList');

const detailPage = React.createClass({
  getInitialState:function(){
    return {
      id:this.props.params.id,
      data:{},
      userDetail:{},
      rewardList:{},
      spotList:{},
      replyList:{}
    }
  },
  componentDidMount:function(){
    this.initDetail();
  },
  initDetail:function(){
    CommonBean.cmd = Config.cmds.detailDetail;
    CommonBean.parameters = {
        'id':this.state.id
    }

    const options = {
        url:Config.getRequestAction(),
        data:CommonBean,
        success:function(result){
          console.log(result)
          this.setState({
            userDetail:result.response.data.objectData.user
          });
          this.setState({
            rewardList:result.response.data.businessData.rewardList
          });
          this.setState({
            spotList:result.response.data.businessData.spotList
          });
          this.setState({
            spotList:result.response.data.businessData.replyList
          });
        }.bind(this)
    }
    Util.getResponseFromPost(options);
  },
  render:function(){
      return (
        <div className="main">
          <WXHead type={'mbp'}></WXHead>
          <UserInfo userInfo={this.state.userDetail}></UserInfo>
          <div className="clearFloat">
            帖子详情上半部分
          </div>
          <RewardList rewardList={this.state.rewardList}></RewardList>
          <SpotList spotList={this.state.spotList}></SpotList>
          <ReplyList replyList={this.state.replyList}></ReplyList>
        </div>
      )
    }
})

module.exports = detailPage;
