var express = require('express');
var app = express();
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('index', {
    	name: 'Jack'
    });
});

app.use('/static', express.static('public'));
app.get('/home', function(req, res) {
	res.render('home');
});

app.listen(3000, function() {
	console.log('Server up: http://localhost:3000');
});