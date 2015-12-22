function Ship( obj ) {
	this.stuff = obj
	console.log( "Creating a ship" )
	this.preload = preload
	this.create  = create
	this.update  = update
	// this.shoot   = shoot

	return this
}

var naval_ship

function preload() {
	game.load.spritesheet( this.stuff.spriteName, this.stuff.spritePath, this.stuff.spriteW, this.stuff.spriteH, 16 )
}

function create() {

	naval_ship = game.add.sprite( 32, game.world.height - 200, this.stuff.spriteName )

	naval_ship.animations.add('down',  [ 0, 1, 2, 3 ], 3, true);
	naval_ship.animations.add('left',  [ 4, 5, 6, 7 ], 3, true);
	naval_ship.animations.add('right', [ 8, 9, 10, 11 ], 3, true);
	naval_ship.animations.add('up',    [ 12, 13, 14, 15 ], 3, true);
	return naval_ship
}

// function shoot( x, y ) {
// 	this.position.x = x
// 	this.position.y = y
// }

function update( move ) {
	naval_ship.animations.play( move )
}