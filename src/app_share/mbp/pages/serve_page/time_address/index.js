/**
 * Created by lenovo on 2016/8/21.
 */
const React = require('react');
const Util = require('../../../../../util/index');
const Divide = require('../../../../../components/divide/index');
require('!style!css!./index.css');
const normalStyle = {
    lingHeight:'1px',
    width:'100%',
    height: '1px',
    backgroundColor:'#DDDDDD',
    margin:'10px 0px',
    display:'block'
}
const TimeAddressBox = React.createClass({
    render:function(){
        return (
            <div className="time_address_box">
                <div className="time_box">
                    <div className="icon_box">

                    </div>
                    <div className="time_text">
                        {
                            Util.checkResponseData(this.props.data,'serviceRowDescs')?
                                Util.checkResponseData(this.props.data,'serviceRowDescs')[0].centerContent:''
                        }
                    </div>
                </div>
                <Divide data={{style:normalStyle}}></Divide>
                <div className="address_box">
                    <div className="icon_box">

                    </div>
                    <div className="address_text">
                        {
                            Util.checkResponseData(this.props.data,'serviceRowDescs')?
                                Util.checkResponseData(this.props.data,'serviceRowDescs')[1].centerContent:''
                        }
                    </div>
                </div>
            </div>
        )
    }
});
module.exports = TimeAddressBox;