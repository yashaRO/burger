var orm = require('../config/orm')

var burgers = {
	all: function(cb) {
		orm.all('burgers', function(res) {
			cb(res)
		})
	},
	create: function(cols, values, cb) {
		orm.insert('burgers', cols, values, function(res) {
			cb(res)
		})
	},
	update: function(setArgs, whereKey, whereValues, cb) {
		orm.update('burgers', setArgs, 'devoured', whereValues, function(res) {
			cb(res)
		})
	}
}

module.exports = burgers;