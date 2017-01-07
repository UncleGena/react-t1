var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function(req, resp, next) {
  if (req.headers['x-forwarded-proto'] === 'http') {
    next();
  } else {
    resp.redirect('http://' + req.hostname + req.url);
  }
});

app.use(express.static('build'));


app.listen(PORT, function() {
  console.log('Express server is up on port ' + PORT);
  // if (process.send) {
  //   process.send('online');
    // process.send({
    //   event:'online',
    //   url:'http://react-weather.loc:3000/'
    // });
  // }
});
