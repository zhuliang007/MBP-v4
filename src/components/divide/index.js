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
              /*style:{
                  backgroundColor:'transparent',
                  border:'none',
                  width:'inherit',
                  height:'1px'
              }*/
          }

      }
    },
    changeStyle : function(style){
        return Util.mergeJSONData(style,this.state.data.style);
    },
    componentDidMount:function(){
        this.setState({data:this.props.data});
    },
    render:function(){
        return (
            <div className="divide_box">
                {this.props.data.content}
            </div>
        )
    }
})
module.exports = Divide;