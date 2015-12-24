var game
var map
var player
var playerShip
var cursors
var move
var land
var islands
var floorLayer, waterLayer, furnLayer, wallLayer, doorLayer, peepLayer
var layers =  [ floorLayer, waterLayer, furnLayer, wallLayer, doorLayer, peepLayer ]
var windowHeight, windowWidth

function preload() {
	game.load.tilemap( 'islands', 'assets/map/allmap1.json', null, Phaser.Tilemap.TILED_JSON )
	game.load.image( 'terrainTiles', 'assets/map/LPC_Terrain/terrain.png' )
	game.load.image( 'dunTiles', 'assets/map/LPC_Terrain/dungonTiles1.png' )
	game.load.image( 'tiles3Tiles', 'assets/map/LPC_Terrain/tiles3.png' )
	game.load.image( 'thingsTiles', 'assets/map/LPC_Terrain/things1.png' )
	game.load.image( 'player', 'assets/img/captain_32.png' )
}

function create() {

	game.physics.startSystem( Phaser.Physics.ARCADE )

	//===============================================
	map = game.add.tilemap( 'islands' )
	// map.addTilesetImage( 'terrain', 'terrainTiles' )
	console.log("1")

	map.addTilesetImage( 'terrain', 'terrainTiles' )
	map.addTilesetImage( 'dungonTiles1', 'dunTiles' )
	map.addTilesetImage( 'tiles3', 'tiles3Tiles' )
	map.addTilesetImage( 'things1', 'thingsTiles' )

	console.log("2")
	//Seting collisions for ground
	map.setCollisionBetween( 190, 400, true, 1 )
	waterLayer = map.createLayer( 'water' )
	floorLayer = map.createLayer( 'floor' )
	furnLayer  = map.createLayer( 'furniture' )
	wallLayer  = map.createLayer( 'walls' )
	doorLayer  = map.createLayer( 'door and chest' )
	// peepLayer  = map.createLayer( 'peeps' )


	waterLayer.resizeWorld()
	floorLayer.resizeWorld()
	furnLayer.resizeWorld()
	wallLayer.resizeWorld()
	doorLayer.resizeWorld()
	// peepLayer.resizeWorld()

	console.log("3")
	// waterLayer.debug = true
	// floorLayer.debug = true
	//===============================================

	player = game.add.sprite( 3458, 2717, 'player' )
	game.physics.enable( player )

    // game.physics.arcade.gravity.y = 250;

    // player.body.bounce.y = 0.2;
    // player.body.linearDamping = 1;
    player.body.collideWorldBounds = true;

    game.camera.follow( player )

	cursors = game.input.keyboard.createCursorKeys()
}

function update() {

	game.physics.arcade.collide( player, floorLayer )

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