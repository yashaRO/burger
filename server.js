var express = require('express')
var methodOverride = require('method-override')
var bodyParser = require('body-parser')
var exphbs = require('express-handlebars')
var path = require('path')

var app = express()
const PORT = 3030

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get('/', function(req, res) {
	res.render('index')
})

app.listen(PORT);