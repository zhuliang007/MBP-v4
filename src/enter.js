const React = require('react');
const ReactDom = require('react-dom');
require('!style!css!normalize.css');
const App = require('./components/divide/index');

if (module.hot) {
    module.hot.accept();
}

ReactDom.render(
    <App></App>,
    document.getElementById('app')
)



