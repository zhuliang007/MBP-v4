/**
 * Created by Administrator on 2016/8/24.
 */
const React = require('react');
const Util = require('../../../../util/index');
let defaultHead = require('../../../../app_share/mbp/assets/head_default.png');
const JudgeContentItem = React.createClass({
    initJudgeStar:function(scores){
        const stars = [];
        for(var i = 1 ; i <= 5 ; i++){
            if(scores>=i){
                stars.push(<span className="mbp mbp_star_fill" key={i}></span>)
            }
            else{
                stars.push(<span className="mbp mbp_star" key={i}></span>)
            }
        }
        return stars;
    },
    render:function(){
        return (
            <div className="judge_content_item">
                <div className='user_image_box'>
                    <img src=
                             {this.props.data.evaluateUser.userSmallImg?
                             Util.compressImageFromWeb(this.props.data.evaluateUser.userSmallImg,'@414w'):defaultHead}
                         className="img_auto"/>
                </div>
                <div className='judge_content_body'>
                    <div className="user_name_box">
                        <span className='user_name'>{this.props.data.evaluateUser.userNike}</span>
                        <span className='user_talent'></span>
                        <span className='time'>{this.props.data.evaluateDate.split(' ')[0]}</span>
                    </div>
                    <div className="judge_stars_box">
                        打分{this.initJudgeStar(this.props.data.evaluateType)}
                    </div>
                    <div className="judge_detail">
                        {this.props.data.evaluateContent}
                    </div>
                    <div className="judge_image_group">
                        <div className="judge_image_item bg_box_4_3">
                            1
                        </div>
                        <div className="judge_image_item bg_box_4_3">
                            2
                        </div>
                        <div className="judge_image_item bg_box_4_3">
                            3
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})
module.exports = JudgeContentItem;