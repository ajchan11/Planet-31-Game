console.log( "Hello" )
var game
var map
var player
var playerShip
var cursors
var move
var land
var islands
var layer


function preload() {
	map = new Map( sprites.mapSprite() )

	playerShip = new Player( "Test", [ sprites.rowBoat(), sprites.playerShip(), sprites.player() ] )

//TILEMAPPING COLLISION AREA
	// game.load.tilemap('map', 'assets/map/map3.json', null,  Phaser.Tilemap.TILED_JSON);

	// game.load.image('tiles','assets/map/map3.png');
	game.load.tilemap( 'test', 'assets/map/mapCSV.json', null, Phaser.Tilemap.TILED_JSON )
	game.load.image( 'islands', 'assets/map/map3.png' )

//=============================

	map.preload()
	playerShip.preload()
}

function create() {


	//SET GAME OBJECT PROPERTIES
	game.physics.startSystem( Phaser.Physics.ARCADE )
	game.add.tileSprite( 0, 0, 3200, 3200, map.sprite.name )
	game.world.setBounds( 0, 0, 3200, 3200 )
	//=======================


	//Images for testing
	islands = game.add.tilemap( 'test' )
	islands.addTilesetImage( 'terrain', 'islands' )

	islands.setCollisionBetween( 1, 400 )

	layer = islands.createLayer( 'land' )
	// layer.debug = true
	// layer.resizeWorld()
	// game.physics.arcade.enable( land )
	// land.inputEnabled = false
	//=======================

	//SET PLAYERSHIP OBJECT
	playerShip.create()
	playerShip.gameObj.body.collideWorldBounds = true;
	// game.camera.follow( playerShip.gameObj )
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

	game.physics.arcade.collide( playerShip.gameObj, layer )
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

        // game.debug.cameraInfo(game.camera, 32, 32);
        // game.debug.spriteCoords(playerShip.gameObj, 32, 500);
    }

window.onload = function() {
	game = new Phaser.Game(2000, 2000, Phaser.CANVAS, 'Test-Planet', { preload: preload, create: create, update: update, render: render } )
}