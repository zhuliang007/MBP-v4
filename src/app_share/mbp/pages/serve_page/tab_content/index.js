/**
 * Created by Administrator on 2016/8/22.
 */
const React = require('react');
require('!style!css!./index.css');
const TabContentItem = require('./item/index');
const TabContentBox = React.createClass({
    initTabContentItem:function(data,tabData){
        const tabContentItems = [];
        if(data){
            tabData.forEach(function(tab,index){
                tabContentItems.push(<TabContentItem key={index} tabData={tab} tabType={index} data={data}></TabContentItem>)
            })
        }
        return tabContentItems;
    },
    render:function(){
        return (
            <div className='tab_content_box'>
                {this.initTabContentItem(this.props.data,this.props.tabData)}
            </div>
        )
    }
})
module.exports = TabContentBox;