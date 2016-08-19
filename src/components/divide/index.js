/**
 * Created by Administrator on 2016/8/19.
 */
/*分割线*/
const React = require('react');
require('./index.css');
const Divide = React.createClass({
    getInitialState:function(){
      return {
          style:{
              backgroundColor:'transparent',
              border:'none',
              width:'inherit',
              height:'1px'
          }
      }
    },
    componentDidMount:function(){
    },
    render:function(){
        return (
            <div className="divide_box" style={this.props.style}></div>
        )
    }
})
module.exports = Divide;