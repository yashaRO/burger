var orm = require('../config/orm')

var burgers = {
	all: function(cb) {
		orm.all('burgers', cb)
	},
	create: function(cols, values, cb) {
		orm.insert('burgers', cols, values, cb)
	},
	update: function() {
		orm.update('burgers', cb)
	}
}

module.export = burgers;