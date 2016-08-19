/**
 * Created by Administrator on 2016/8/19.
 */
/*分割线*/
const React = require('react');
const Util = require('../../util/index');
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
    changeStyle : function(style){
        return Util.mergeJSONData(style,this.state.style);
    },
    componentDidMount:function(){
    },
    render:function(){
        return (
            <div className="divide_box" style={this.changeStyle(this.props.style)}></div>
        )
    }
})
module.exports = Divide;