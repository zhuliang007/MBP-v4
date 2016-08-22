/**
 * Created by Administrator on 2016/8/18.
 */
const React = require('react');
const MBPSwipeItem = React.createClass({
  render:function(){
    return (
      <div className="swiper-slide">
          <img src={this.props.data.location} className="img_auto"/>
      </div>
    )
  }
})
module.exports = MBPSwipeItem;
