const React = require("React");

const userInfo = React.createClass({
  render:function(){
    var userDetail = this.props.data;
    return(
      <div className="userInfo-main">
        <div className="userInfo-background">
          <div className="userInfo-headImg">
            <img src={userDetail.backgroundImg} className="userInfo-wh"/>
          </div>
          <div className="userInfo-userNike">
            <span>{userDetail.userNike}</span>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = userInfo;
