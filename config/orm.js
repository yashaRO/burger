var connection = require('./connection')

function insertFormatting(arr) {
	c = '('
	for(let i =0; i < dave.length; i++) {
		if (typeof dave[i] == 'string')
			{c += '"' + dave[i] + '",'; continue;}
		c += dave[i] +','
	}
	c = c.replace(/,$/,'')
	c += ')'
	return c
}

orm = {
  all: function(table, cb){
    connection.query(`SELECT * FROM ${table};`, function(err, result) {
      if (err) throw err;
      else {console.log(result);}
    })
		cb()
  },
  insert: function(table, cols, values, cb){
    connection.query(`INSERT INTO ${table} (${cols.toString()}) VALUES ${insertFormatting(values)};`, function(err, result) {
      //Expects full values, with null being in place of auto generated values. Duh
      if (err) throw err;
      else {console.log(result);}
    })
  },
  update: function(table, firstKey, firstValue, whereKey, whereValue, cb){
    connection.query(`UPDATE ${table} SET ${firstKey} = ${firstValue} WHERE ${whereKey} = ${whereValue};`, function(err, result) {
      if (err) throw err;
      else {console.log(result);}
    })
  }
}

module.exports = orm;