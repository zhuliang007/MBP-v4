const React = require("React");

const spotList = React.createClass({
  render:function(){
    var spotLists = this.props.data;
    console.log(spotLists);
    var list=[];
    if(spotLists.length>0){
      var i=spotLists.length-1;
      if(spotLists.length>5){
        i=4
      }
      for(i;i>=0;i--){
         list.push(<div className="spotList-headImg" key={i}>
            <img src={spotLists[i].userSmallImg} className="spotList-Img"/>
         </div>)
      }
    }

    return(
      <div className="spotList-main">
        <div className="spotList-name">
          <span>点赞的人</span>
        </div>
        <div className="spotList-head">
          {list}
        </div>
      </div>
    )
  }
})

module.exports = spotList;
