/**
 * Created by lenovo on 2016/8/21.
 */
const React = require('react');
const Util = require('../../../../../util/index');
const Divide = require('../../../../../components/divide/index');
require('!style!css!./index.css');
const dashedStyle = {
    borderBottom: '1px dashed #DDDDDD',
    padding:'0px',
}
const TitlePriceBox = React.createClass({
    checkPriceType:function(type){
        let typeText =Util.checkResponseData(this.props.data,'discountTypeText');
        let priceType = '';
        if(type){
            priceType = <span className="price_type">{typeText}价</span>
        }
        return priceType;
    },
    checkOriginalPrice:function(price){
        let originalPrice = '';
        if(price){
            originalPrice = <span className="original_price">{price}</span>
        }
        return originalPrice;
    },
    render:function(){
        return (
            <div className="title_price_box">
                <div className="title_box">
                    {Util.checkResponseData(this.props.data,'title')}
                </div>
                <Divide data={{style:dashedStyle}}></Divide>
                <div className="price_box">
                    {
                        this.checkPriceType(Util.checkResponseData(this.props.data,'discountType'))
                    }
                    <span className="current_price">
                        {Util.checkResponseData(this.props.data,'currentPrice')}
                        {Util.checkResponseData(this.props.data,'priceDesc')}
                    </span>
                    {
                        this.checkOriginalPrice(Util.checkResponseData(this.props.data,'originalPrice'))
                    }
                    <span className="peoples_buy_number">
                        {
                            Util.checkResponseData(this.props.data,'peoples')||0
                        }
                        人购买
                    </span>
                </div>
            </div>
        )
    }
});
module.exports = TitlePriceBox;