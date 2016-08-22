require('!style!css!normalize.css');
const React = require('react');
const ReactDom = require('react-dom');
const App = require('./AppRouter');

if (module.hot) {
  module.hot.accept();
}

ReactDom.render(
    <App></App>,
    document.getElementById('app')
)



