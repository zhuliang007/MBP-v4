const React = require('react');
const ReactDom = require('react-dom');
const App = require('./components/divide/index');
require('!style!css!normalize.css');

if (module.hot) {
    module.hot.accept();
}

ReactDom.render(
    <App></App>,
    document.getElementById('app')
)



