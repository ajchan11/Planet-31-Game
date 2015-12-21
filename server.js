//DECLARING VARIABLES
//===========================
var bodyParser     = require( 'body-parser' )
var cors           = require( 'cors' )
var express        = require( 'express' )
var morgan         = require( 'morgan' )
var app            = express()
var port           = 3000

//ROUTING
//===========================
app.use( cors() )
app.use( morgan( 'dev' ) )
app.use( bodyParser.json() )
app.use( bodyParser.urlencoded( { extended: true } ) )
app.use( express.static( 'public' ) )

app.get( '/testPlanet', function( req, res ) {
	res.sendFile( __dirname + '/public/index.html' )
} )

app.get( '/hellophaser', function( req, res ) {
	res.sendFile( __dirname + '/public/hellophaser/index.html' )
} )

app.listen( port, function() {
	console.log( "Server up and running on port " + port )
} )