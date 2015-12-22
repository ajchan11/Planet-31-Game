console.log( "Hello" )
var game
var map
var player
var playerShip
var cursors
var move


function preload() {
	map = new Map( sprites.mapSprite() )

	playerShip = new Player( "Test", [ sprites.playerShip(), sprites.player() ] )

	map.preload()
	playerShip.preload()
}

function create() {
	//SET GAME OBJECT PROPERTIES
	game.add.tileSprite( 0, 0, 3200, 3200, map.sprite.name )
	game.world.setBounds( 0, 0, 3200, 3200 )
	game.physics.startSystem( Phaser.Physics.ARCADE )
	//=======================

	//SET PLAYERSHIP OBJECT
	playerShip.create()
	game.camera.follow( playerShip.gameObj )
	//=======================

	//SET CURSORS OBJECT
	cursors   = game.input.keyboard.createCursorKeys()
	cursors.W = game.input.keyboard.addKey( 87 )
	cursors.A = game.input.keyboard.addKey( 65 )
	cursors.S = game.input.keyboard.addKey( 83 )
	cursors.D = game.input.keyboard.addKey( 68 )
	//=======================

}

function update() {

	move = ''
	if (cursors.up.isDown)
	{
		move = 'up'
		console.log(move)

		// player.body.velocity.y = -300
	}
	else if (cursors.down.isDown)
	{
		move = 'down'
		// player.body.velocity.y = 300
		// player.animations.play( move )
	}

	if (cursors.left.isDown)
	{
		move = 'left'
		// player.body.velocity.x = -300
	}
	else if (cursors.right.isDown)
	{
		move = 'right'
		// player.body.velocity.x = 300
	}

	//PLAYERSHIP MOVEMENT
	playerShip.update( move )
	//=======================
}

function render() {

        game.debug.cameraInfo(game.camera, 32, 32);
        game.debug.spriteCoords(playerShip.gameObj, 32, 500);
    }

window.onload = function() {
	game = new Phaser.Game(2000, 2000, Phaser.CANVAS, 'Test-Planet', { preload: preload, create: create, update: update, render: render } )
}