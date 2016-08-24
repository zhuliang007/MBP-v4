const React = require("React");

const detailImgContext = React.createClass({
  render:function(){
    var attachments = this.props.attachments;
    var attaList=[];
    if(attachments!=null&&attachments.length>0){
      var j=0;
      attachments.forEach(function(atta){
        ++j;
        switch (atta.extensionType) {
          case 0:
            attaList.push(<div className="detailImg" key={atta.businessNumber+""+j}><img src={atta.location} /></div>)
            break;
          case 2:
            attaList.push(<div className="detailImg" key={atta.businessNumber+""+j}>
            <video id="VideoShow" className="video-js vjs-default-skin vjs-big-play-centered"  controls autoPlay>
              <source src={atta.location} type="video/mp4"></source>
            </video>
            </div>)
            break;
        }
      })
    }
    return(
      <div>
          {attaList}
        <div>
          <span>{this.props.content}</span>
        </div>
      </div>
    )
  }
})

module.exports = detailImgContext;
