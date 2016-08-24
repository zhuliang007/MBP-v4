const React = require("React");

const replyItem = React.createClass({
  render:function(){
    return(
      <div>
        <div className="replyList-row">
          <div className="replyList-col-1">
            <div className="replyList-img">
              <img src={this.props.backgroundImg}/>
            </div>
            <div className="replyList-nicks">
              <span>{this.props.userNike}</span>
              <span className="replyList-times">{this.props.times}</span>
            </div>
          </div>
          <div className="replyList-col-2">
            <span>{this.props.spotsNum}</span>
          </div>
        </div>
        <div className="replyList-row clearFloat">
          <div className="replyList-content">
            <pre>{this.props.contents}</pre>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = replyItem;
