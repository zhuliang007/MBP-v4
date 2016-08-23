/**
 * Created by Administrator on 2016/8/18.
 */
const React = require('react');
const Util = require('../../../../util/index');
const MBPSwipeItem = React.createClass({
  render:function(){
    return (
      <div className="swiper-slide">
          <img src={Util.compressImageFromWeb(this.props.data.location,'@414w')} className="img_auto"/>
      </div>
    )
  }
})
module.exports = MBPSwipeItem;
