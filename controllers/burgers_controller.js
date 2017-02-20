var express = require('express')
var burgers = requre('../models/cat.js')
var router = express.Router()

router.get('/', function(req, res) {
	burgers.all(function(data) {
		res.render('index', {burgers: data})
	})
})

router.post('/', function(req, res) {
	burgers.insert(
		'burgers',
		'burger_name',
		[req.body.burgerName]
	)
	res.redirect('/')
})

router.put('/:id', function(req, res) {
	burgers.update(
		'burgers',
		'devoured',
		
		function(data) {
		
	})
})