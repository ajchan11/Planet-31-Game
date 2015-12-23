function Player( name, sprites ) {
	this.sprites = sprites
	this.name   = name
	// this.type   = type
}

Player.prototype.preload = function() {
	game.load.spritesheet( this.sprites[0].name, this.sprites[0].path, this.sprites[0].W, this.sprites[0].H, 16 )
	game.load.spritesheet( this.sprites[1].name, this.sprites[1].path, this.sprites[1].W, this.sprites[0].H, 16 )
}

Player.prototype.create = function() {
	this.gameObj = game.add.sprite( 32, 32, this.sprites[0].name )

	this.gameObj.animations.add('down',  [ 0, 1, 2, 3 ], 3, true)
	this.gameObj.animations.add('left',  [ 4, 5, 6, 7 ], 3, true)
	this.gameObj.animations.add('right', [ 8, 9, 10, 11 ], 3, true)
	this.gameObj.animations.add('up',    [ 12, 13, 14, 15 ], 3, true)
	game.physics.arcade.enable( this.gameObj )
	game.camera.follow( this.gameObj )
	this.gameObj.collideWorldBounds = true
}

Player.prototype.sailState = function() {
	// this.gameObj = game.add.sprite( 32, game.world.height - 10, this.sprites[ 1 ].name )
	this.gameObj.loadTexture( 'player' )
	this.gameObj.animations.add('down',  [ 0, 1, 2, 3 ], 3, true)
	this.gameObj.animations.add('left',  [ 4, 5, 6, 7 ], 3, true)
	this.gameObj.animations.add('right', [ 8, 9, 10, 11 ], 3, true)
	this.gameObj.animations.add('up',    [ 12, 13, 14, 15 ], 3, true)
	game.physics.arcade.enable( this.gameObj )
	game.camera.follow( this.gameObj )
}

Player.prototype.update = function( move ) {
	//Movement Controls
	this.gameObj.animations.play( move )
	switch( move ) {
		case 'up':
			this.gameObj.body.velocity.y = -300
			break
		case 'down':
			this.gameObj.body.velocity.y = 300
			break
		case 'left':
			this.gameObj.body.velocity.x = -300
			break
		case 'right':
			this.gameObj.body.velocity.x = 300
			break
		// case 'b' :

		default:
			this.gameObj.body.velocity.x = 0
			this.gameObj.body.velocity.y = 0
	}
}