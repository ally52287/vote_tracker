var express = require('express');
var = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.get('/secret', function(request, response) {
  repsonse.send('You found my secret hiding spot.');
});

app.use(function(request, response, next) {
  response.status(404)
.sendFile(__dirname + '/public/404.html')
});

app.listen(app.get('port'), function() {

});
