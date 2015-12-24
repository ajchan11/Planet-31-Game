var game
var map
var player
var playerShip
var cursors
var move
var land
var islands
var layer
var windowHeight, windowWidth

function preload() {
	game.load.tilemap('islands', 'assets/map/mapish.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles', 'assets/map/LPC_Terrain/terrain.png');
    game.load.image('player', 'assets/img/captain_32.png');

}

function create() {

	game.physics.startSystem( Phaser.Physics.ARCADE )

	map = game.add.tilemap( 'islands' )
	// map.addTilesetImage( 'water', 'tiles' )
	map.addTilesetImage( 'terrain', 'tiles' )
	// map.addTilesetImage( 'terrain', 'tiles' )

	// map.setCollisionBetween(  )
    map.setCollisionBetween( 190, 400, true, 1 )
    // map.setCollisionBetween(27, 29);
    // map.setCollision( [ 311, 216, 344, 215, 278 ], true, 1)
	// map.setCollision( [ 189 ], true, 1)

	layer = map.createLayer( 'land' )
	layer2 = map.createLayer( 'water' )
	layer.resizeWorld()
	layer.debug = true

	player = game.add.sprite( 32, 32, 'player' )
	game.physics.enable( player )

    // game.physics.arcade.gravity.y = 250;

    // player.body.bounce.y = 0.2;
    // player.body.linearDamping = 1;
    player.body.collideWorldBounds = true;

    game.camera.follow( player )


	cursors = game.input.keyboard.createCursorKeys()
}

function update() {

	game.physics.arcade.collide( player, layer )

	player.body.velocity.x = 0;
	player.body.velocity.y = 0;

	if ( cursors.up.isDown ) {
		player.body.velocity.y = -300
	} else if ( cursors.down.isDown ) {
		player.body.velocity.y = 300
	} else if ( cursors.left.isDown ) {
		player.body.velocity.x = -300
	} else if ( cursors.right.isDown ) {
		player.body.velocity.x = 300
	}
}

function render() {

}

window.onload = function() {
	windowHeight = window.innerHeight
	windowWidth = window.innerWidth
	game = new Phaser.Game(windowWidth - 100, windowHeight - 100, Phaser.Auto, 'Test-Planet', { preload: preload, create: create, update: update, render: render } )
}