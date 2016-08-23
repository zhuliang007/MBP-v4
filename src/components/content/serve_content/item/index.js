/**
 * Created by Administrator on 2016/8/23.
 */
const React = require('react');
const ServeContentItem = React.createClass({
    initTitle:function(data){
        let title = '';
        if(data){
            if(data.title){
                title = (<div className="title">{data.title}</div>)
            }
        }
        return title;
    },
    initContent:function(data){
        let content = '';
        if(data){
            if(data.content){
                content = (<div className="content">{data.content}</div>)
            }
        }
        return content;
    },
    initImages:function(data){
        const images = [];
        if(data){
            data.forEach(function(dataObject,index){
                images.push(<img src={dataObject.location} className="img_auto" key={index}/>)
            })
        }
        return images;
    },
    initImageContent:function(data){
        let imageContent = '';
        if(data){
            if(data.attachments){
                imageContent = (
                    <div className="image_content">
                        {this.initImages(data.attachments)}
                    </div>
                )
            }
        }
        return imageContent;
    },
    render:function(){
        return (
            <div className="serve_content_item">
                {this.initTitle(this.props.data)}
                {this.initContent(this.props.data)}
                {this.initImageContent(this.props.data)}
            </div>
        )
    }
})
module.exports = ServeContentItem;