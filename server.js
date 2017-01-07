var express = require('express');

// Create our app
var app = express();

app.use(express.static('build'));

app.listen(3000, function() {
  console.log('Express server is up on port 3000');
  if (process.send) {
    process.send('online');
    // process.send({
    //   event:'online',
    //   url:'http://react-weather.loc:3000/'
    // });
  }
})
