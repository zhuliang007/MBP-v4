/**
 * Created by Administrator on 2016/8/22.
 */
const React = require('react');
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const Link = require('react-router').Link;
const browserHistory = require('react-router').browserHistory;
const Loading = require('./components/loading/index');
const ServePage = require('./app_share/mbp/pages/serve_page/index');
const DetailPage = require('./app_share/mbp/pages/detail_page/index');

const AppRouter = React.createClass({
    render:function(){
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Loading}></Route>
                <Route path="mbpServer/:id" component={ServePage}></Route>
                <Route path="mbpdetail/:id" component={DetailPage}></Route>
            </Router>
        )
    }
});
module.exports = AppRouter;
