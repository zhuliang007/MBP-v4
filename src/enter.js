require('!style!css!normalize.css');
require('!style!css!./app_share/mbp/styles/base.css');
const React = require('react');
const ReactDom = require('react-dom');
const App = require('./components/wxHead/index');

if (module.hot) {
    module.hot.accept();
}

ReactDom.render(
    <App type={'mbp'}></App>,
    document.getElementById('app')
)



