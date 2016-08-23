require("!style!css!../index.css")
const React = require("React");
const CommonBean = require('../../../commonBean/index');
const Config = require('../../../config/index');
const Util = require('../../../../../util/index');

const userInfo = React.createClass({
  render:function(){
    const userDetail = this.props.userInfo;
    console.log(userDetail);
    return(
      <div >
        <div className="userInfo-headImg">
          <img src={userDetail.backgroundImg} className="userInfo-wh"/>
        </div>
        <div className="userInfo-userNike">
          <span>{userDetail.userNike}</span>
        </div>
      </div>
    )
  }
})

module.exports = userInfo;
