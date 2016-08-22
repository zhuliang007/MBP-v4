/**
 * Created by lenovo on 2016/8/20.
 */
const React = require('react');
const Swipe = require('../swiper.min');
const SwipeItem = require('./item/index');
require('!style!css!../swiper.min.css');
require('!style!css!./index.css');
const MBPSwipe = React.createClass({
    setTopImages:function(data){
        const topImages = [];
        if(data){
            data.forEach(function(topImage,index){
                topImages.push(<SwipeItem data={topImage} key={index}></SwipeItem>)
            })
        }
        return topImages;
    },
    initSwipe:function(data){
        if(!this.swiper){
            const swipeName = '.'+this.props.swipeName.split(' ')[0];
            const swipeOptions = {};
            if(data.length>1){
                swipeOptions.loop = true;
                swipeOptions.autoplay = 1500;
                swipeOptions.pagination = '.swiper-pagination';
            }
            swipeOptions.autoplayDisableOnInteraction = false;
            swipeOptions.observer = true;
            swipeOptions.observeParents = true;
            this.swiper = new Swipe(swipeName,swipeOptions);
        }
    },
    componentDidUpdate:function(){
        this.initSwipe(this.props.data.topImages);
        //console.log(this.props.data)
        /*discountEndTime:null
        discountStartTime:null
        discountType:0
        discountTypeText:null*/
    },
    render:function(){
        return (
            <div className={'swiper-container '+this.props.swipeName}>
                <div className="swiper-wrapper">
                    {this.setTopImages(this.props.data.topImages)}
                </div>
                <div className="swiper-pagination"></div>
            </div>
        )
    }
})
module.exports = MBPSwipe;