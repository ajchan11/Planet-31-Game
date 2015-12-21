function Ship() {
	this.preload = preload
	this.create  = create
	this.update  = update
}

function preload() {
	game.load.spritesheet( 'naval_ship', 'assets/sprites/naval_ship_sprite.png', 208, 192, 16 )
}

function create() {

	naval_ship = game.add.sprite( 32, game.world.height - 200, 'naval_ship' )

	naval_ship.animations.add('down',  [ 0, 1, 2, 3 ], 3, true);
	naval_ship.animations.add('left',  [ 4, 5, 6, 7 ], 3, true);
	naval_ship.animations.add('right', [ 8, 9, 10, 11 ], 3, true);
	naval_ship.animations.add('up',    [ 12, 13, 14, 15 ], 3, true);

}

function update( move ) {
	naval_ship.animations.play( move )
}

