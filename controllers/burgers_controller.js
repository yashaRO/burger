var express = require('express')
var burgers = requre('../models/cat.js')
var router = express.Router()

router.get('/', function(req, res) {
	burgers.all(function(data) {
		res.render('index', {burgers: data})
	})
})

router.post('/', function(req, res) {
	burgers.create(
		'burger_name',
		[req.body.burgerName],
		function(result) {console.log(result)}
	)
	res.redirect('/')
})

router.put('/:id', function(req, res) {
	burgers.update(
		{'burger_name': req.body.burgerName},
		req.params.id,
		function(result) {
		console.log(result)
	})
})