const React = require("React");
const DetailImgContext = require("./detailImgContext");

const detailItem=React.createClass({
  render:function(){
    const details = this.props.data;
    const detailList = details.objectData.imgTxtList;
    var listComps;
    if(detailList!=null&&detailList.length>0){
      var j=0;
      listComps = detailList.map(function(detail){
        ++j;
        console.log(detail.businessId+""+j);
        return <DetailImgContext key={detail.businessId+""+j}
        content={detail.content}
        attachments={detail.attachments}></DetailImgContext>
      }.bind(this));
    }
    return(
      <div className="clearFloat" key="detail">
        <div className="detail-row detail-title">
          <span>{details.objectData.title}</span>
        </div>
        <div className="detail-row detail-content">
          <span>{details.objectData.contents}</span>
        </div>
        {listComps}
      </div>
    )
  }
})

module.exports = detailItem;
