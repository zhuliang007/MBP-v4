require('!style!css!normalize.css');
require('!style!css!./app_share/mbp/styles/base.css');
const React = require('react');
const ReactDom = require('react-dom');
const App = require('./app_share/mbp/pages/serve_page/index');

if (module.hot) {
  module.hot.accept();
}

ReactDom.render(
    <App serveId={1}></App>,
    document.getElementById('app')
)



