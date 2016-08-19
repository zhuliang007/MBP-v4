var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.js');

config.entry.app.unshift(
  'eventsource-polyfill',
  'webpack-hot-middleware/client'
);

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/public', express.static('public'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'test.html'));
});

app.listen(3000,'0.0.0.0', function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:3000');
});
