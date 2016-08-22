/**
 * Created by Administrator on 2016/8/19.
 */
/*分割线*/
const React = require('react');
const Util = require('../../util/index');
require('!style!css!./index.css');
const Divide = React.createClass({
    getInitialState:function(){
      return {
          data:{
              style:{
                  backgroundColor:'transparent',
                  width:'inherit',
                  height:'0px'
              }
          }

      }
    },
    changeStyle : function(data){
        return Util.mergeJSONData(data?data.style:{},this.state.data.style);
    },
    componentDidMount:function(){
    },
    render:function(){
        return (
            <div className="divide_box" style={this.changeStyle(this.props.data)}>
            </div>
        )
    }
})
module.exports = Divide;