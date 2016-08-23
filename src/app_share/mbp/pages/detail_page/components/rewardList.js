require("!style!css!../index.css")

const React = require("React");
const CommonBean = require('../../../commonBean/index');
const Config = require('../../../config/index');
const Util = require('../../../../../util/index');

const rewardList = React.createClass({
  render:function(){
    const rewardList = this.props.rewardList;
    console.log(rewardList);
    return(
      <div className="rewardList-main">
        <div >
          <div className="rewardList-button">
            <span className="rewardList-ds">打赏</span>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = rewardList;
