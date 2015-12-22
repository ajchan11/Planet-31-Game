function Ship( name, sprite ) {
	this.sprite = sprite
	this.name   = name
	// this.type   = type
}

Ship.prototype.preload = function() {
	console.log( this.sprite )
	game.load.spritesheet( this.sprite.name, this.sprite.path, this.sprite.W, this.sprite.H, 16 )
}

Ship.prototype.create = function() {
	this.gameObj = game.add.sprite( 32, game.world.height - 200, this.sprite.name )

	this.gameObj.animations.add('down',  [ 0, 1, 2, 3 ], 3, true)
	this.gameObj.animations.add('left',  [ 4, 5, 6, 7 ], 3, true)
	this.gameObj.animations.add('right', [ 8, 9, 10, 11 ], 3, true)
	this.gameObj.animations.add('up',    [ 12, 13, 14, 15 ], 3, true)
	game.physics.arcade.enable( this.gameObj )
	game.camera.follow(this.gameObj )
}