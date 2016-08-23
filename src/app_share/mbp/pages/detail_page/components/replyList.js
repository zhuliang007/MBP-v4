const React = require("React");
const CommonBean = require('../../../commonBean/index');
const Config = require('../../../config/index');
const Util = require('../../../../../util/index');

const replyList = React.createClass({
  render:function(){
    const replyList = this.props.replyList;
    console.log(replyList);
    return(
      <div></div>
    )
  }
})

module.exports = replyList;
