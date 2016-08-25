const React = require("React");
const DetailImgContext = require("./detailImgContext");
const UWX = require('../../../../../wx/index');


const detailItem=React.createClass({
  render:function(){
    const details = this.props.data;
    const detailList = details.objectData.imgTxtList;

    var img = '';
    var listComps;
    if(detailList!=null&&detailList.length>0){
      var attachments = detailList[0].attachments;
      if(attachments!=null&&attachments.length>0){
        img =  attachments[0].location;
      }
      var j=0;
      listComps = detailList.map(function(detail){
        ++j;
        return <DetailImgContext key={detail.businessId+""+j}
        content={detail.content}
        attachments={detail.attachments}></DetailImgContext>
      }.bind(this));
    }

    UWX.shareItems(details.objectData.title,details.objectData.contents,window.location.href,img);

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
