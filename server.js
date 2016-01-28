'use strict'

// Default environment to 'development' if not specified
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

// Require Express.js module and invoked it to get an instance, app
var express = require('express'),
	app = express()
	
// Use morgan if development and compression if production
if (process.env.NODE_ENV === 'development'){
	var morgan = require('morgan')
	app.use(morgan('dev'))
} else if (process.env.NODE_ENV === 'production'){
	var compression= require('compression')
	app.use(compression())
}

// Server static files from /public
app.use(express.static(__dirname+'/public'))

// Default port to 3000 if not specified
process.env.PORT = process.env.PORT || 3000
app.listen(process.env.PORT)

console.log('Listening on port', process.env.PORT )
