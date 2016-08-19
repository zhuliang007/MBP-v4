const React = require('react');
const ReactDom = require('react-dom');
const App = require('./components/divide/index');
require('!style!css!normalize.css');

if (module.hot) {
    module.hot.accept();
}

const style = {
    backgroundColor:'red',
    height:'10px'
}

const data = {
    style:style
}

ReactDom.render(
    <App data={data}></App>,
    document.getElementById('app')
)



