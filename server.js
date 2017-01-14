var express = require('express');

// Create our app
var app = express();
// const PORT = process.env.PORT || 3000;
const PORT = 3000;
// app.use(function(req, resp, next) {
//   if (req.headers['x-forwarded-proto'] === 'http') {
//     resp.redirect('http://' + req.hostname + req.url);
//   } else {
//     next();
//   }
// });

app.use(express.static('build'));


app.listen(PORT, function() {
  console.log('Express server is up on port ' + PORT);
  // if (process.send) {
  //   process.send('online');
  //   process.send({
  //     event:'online',
  //     url:'http://react-weather.loc:3000/'
  //   });
  // }
});
